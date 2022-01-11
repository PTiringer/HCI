function reserve() {
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

        food_html += `<hr style="width:100%;"><br/>Gesamt: ` + parseFloat(total).toFixed(2) + "€";
    }

    var result_html = `<div id="result" style="margin-top:40px;text-align:center;width:100%;">`;
    result_html += `<h2>VIELEN DANK F&Uuml;R IHRE BESTELLUNG</h2><br/>`;

    if ( food_html ) {
        result_html += `
            <div style="font-size:11pt;margin:15px 0;width:40%;"><hr style="width:100%;">` + food_html + `</div>
        `;
    }

    $('#main-box').html(result_html);
    return;
}
