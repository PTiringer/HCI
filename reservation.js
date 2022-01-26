$('document').ready(function() {
    $(function() {
        $( "#date-input" ).datepicker({
            showOtherMonths: true,
            dateFormat: 'dd.mm.yy', // format of the datepicker
            selectOtherMonths: true,
            minDate: 0, // only allow future dates
        });
    });
});


// check if the mail format is valid
function valid_mail(str) {
    var r = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return r.test(str);
}

// reservation button was clicked
function reserve( confirmed ) {
    var error = false;
    $('#alert-text').empty();

    // check if the user has selected a date
    var date = $('#date-input').val();
    if ( !date ) {
        $('#alert-text').append(`Bitte geben Sie ein Reservierungs-Datum an.<br/>`);
        $('#date-input').css("border-color", "red");
        error = true;
    } else {
        $('#date-input').css("border-color", "black");
    }

    // check if the user has selected a name
    var name = $('#name_content').val();
    if ( !name ) {
        $('#alert-text').append(`Bitte geben Sie einen Namen an.<br/>`);
        $('#name_content').css("border-color", "red");
        error = true;
    } else {
        $('#name_content').css("border-color", "black");
    }

    // check if the user has selected an email
    var email = $('#email_content').val();
    if ( !email ) {
        $('#alert-text').append(`Bitte geben Sie eine E-Mail Adresse an.<br/>`);
        $('#email_content').css("border-color", "red");
        error = true;
    } else if ( !valid_mail(email) ) {
        $('#alert-text').append(`Bitte geben Sie eine gültige E-Mail Adresse an.<br/>`);
        $('#email_content').css("border-color", "red");
        error = true;
    } else {
        $('#email_content').css("border-color", "black");
    }

    // reserved seats
    var seats = $('#seat_content').val();

    if ( error ) {
        $('#alert').show();
        return;
    } else {
        if ( confirmed != 1 ) {
            $('#confirm-alert').show();
            return;
        }
    }

    // load and calc food prices
    var food_html = "";
    if( $("#food_checkbox").is(':checked') ) {
        var salad = $('#count_salat').val();
        var soup = $('#count_suppe').val();
        var steak = $('#count_steak').val();
        var ravioli = $('#count_ravioli').val();
        var veggies = $('#count_gemuese').val();
        var mousse = $('#count_mousse').val();

        var total = 0.00;
        if ( salad > 0 ) {
            var price = salad * 5.99;
            total += price;
            food_html += "Gemischter Salat x" + salad + ": " + parseFloat(price).toFixed(2) + "€<br/>";
        }
        if ( soup > 0 ) {
            var price = soup * 5.99;
            total += price;
            food_html += "Suppe der Saison x" + soup + ": " + parseFloat(price).toFixed(2) + "€<br/>";
        }
        if ( steak > 0 ) {
            var price = steak * 16.99;
            total += price;
            food_html += "Gegrilltes Steak vom Rind x" + steak + ": " + parseFloat(price).toFixed(2) + "€<br/>";
        }
        if ( ravioli > 0 ) {
            var price = ravioli * 14.99;
            total += price;
            food_html += "Ravioli mit Kr&auml;uter-Tomatenf&uuml;llung x" + ravioli + ": " + parseFloat(price).toFixed(2) + "€<br/>";
        }
        if ( veggies > 0 ) {
            var price = veggies * 12.99;
            total += price;
            food_html += "Gem&uuml;se der Saison aus dem Schmortopf x" + veggies + ": " + parseFloat(price).toFixed(2) + "€<br/>";
        }
        if ( mousse > 0 ) {
            var price = mousse * 6.99;
            total += price;
            food_html += "Mousse au Chocolat x" + mousse + ": " + parseFloat(price).toFixed(2) + "€<br/>";
        }

        food_html += `<br/>Gesamt: ` + parseFloat(total).toFixed(2) + "€";
    }

    // build the confirmation text
    var result_html = `<div id="result" style="margin-top:40px;text-align:center;width:100%;">`;
    result_html += `<h2>VIELEN DANK F&Uuml;R IHRE BESTELLUNG</h2><br/>`;
    result_html += `<p>Eine Bestellbest&auml;tigung wurde Ihnen per E-Mail geschickt.</p><br/>`;

    // collect the date and time from the user input
    var hours = $('#time_content option:selected').text();
    var minutes = $('#minute_content option:selected').text();
    var time = hours + ':' + minutes;

    // some very odd things are happening with space characters if we don't do this
    var date_time = date + " - " + time;
    date_time = date_time.replace(/ +(?= )/g,'');
    date_time = date_time.replace(/ : /g,':');

    result_html += `
        <hr style="width:40%;"><br/>
        ` + date_time + `<br/><br/>
        ` + name + `<br/>
        ` + email + `<br/>
        ` + seats + `<br/>
    `;

    if ( food_html ) {
        result_html += `
            <div style="font-size:12pt;margin:15px 0;width:40%;"><hr style="width:100%;">` + food_html + `</div>
        `;
    }

    $('#main-box').html(result_html);
    return;
}



//WOZ
var loginname = 'admin';
var loginpass = 'admin';

var request = new XMLHttpRequest();
var request_failed = 0;

request.onreadystatechange = function() {
    // console.log("onreadystatechange: " + request.readyState + ", " +  request.status);
    // console.log(request.responseText);
    if (request.readyState == 4) {
        if (request.status == 200) {
            var response = JSON.parse(request.responseText);
            handlers[response._id](response);
        }
        if (request.status == 404) {
            console.log("not found: " + request.responseText);
        }
    }
};

function get(variable) {
    // console.log("get " + variable);
    request.open("GET", dburl + variable, false);
	request.setRequestHeader("Authorization", "Basic " + btoa(loginname + ":" + loginpass));
    request.onerror = function(e) {
        request_failed = 1;
    };
    request.send();
}

function update() {

    // don't produce the same error over and over if woz is not installed
    if ( request_failed == 1 ) {
        return;
    }
    
    for (var name in handlers) {
        // console.log("updating " + name);
        get(name);
    }
}

// request updates at a fixed interval (ms)
var intervalID = setInterval(update, 1000);

///////////////////////////////////////////////////////////////////////////////
// your code below

var dbname = "gmci";
var dburl = "http://127.0.0.1:5984/" + dbname + "/";
var handlers = {
    "mapImage" : updateMap,
};

function updateMap(response) {
    document.getElementById(response._id).src = response.src;
    document.getElementById(response._id).width = response.width;
}
