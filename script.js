var reservationArray = [
	{'date':'20-03-2022', 'time':'20:00', 'name':'Klaus Klausen', 'email':'klaus.en@gmy.de', 'seats':'4', 'comment':'', 'table':'A12'},
	{'date':'20-03-2022', 'time':'20:30', 'name':'Mareike Ke', 'email':'mareike-ke@geemail.com', 'seats':'2', 'comment':'', 'table':'B06'},
	{'date':'21-03-2022', 'time':'19:45', 'name':'Anne Susanne', 'email':'sus-anne@gmy.de', 'seats':'6', 'comment':'Vielleicht sind wir doch nur 5.', 'table':'A15, A16'}
];

window.onload = () => {
	buildReservationTable(reservationArray);
};

function buildReservationTable(data){
	var tableBody = document.getElementById('reservationData');
	if ( !tableBody ) {
		return;
	}
	let dataHTML = '';
	
	for(let d of data) {
		dataHTML += `<tr onclick="customerInfo('${d.email}', '${d.comment}')"><td>${d.date}</td><td>${d.time}</td><td>${d.name}</td><td>${d.seats}</td><td>${d.table}</td></tr>`;
	}
	console.log(dataHTML)
	
	/*sortieren der Daten nach Datum und Uhrzeit*/
	tableBody.innerHTML = dataHTML;
}

function customerInfo(email, comment) {
	document.getElementById("commentInfo").innerHTML = comment;
	document.getElementById("emailInfo").innerHTML = email;
	
	/*Markieren vom ausgewählten Tisch auf der Karte.
	Information über den Tisch sollte in das json Array.*/
}

/*Funktionen fürs Essen vorbestellen*/
function checkMaxFood( amount ) {
	var limit = 5;
	if ( amount >= limit ) {
		$('#alert-text').empty();
		$('#alert-text').append(`Sie können ein Gericht maximal ` + limit + ` Mal vorbestellen.<br/>`);
		$('#alert').show();
		return -1;
	}
	return 1;
}

function checkFood() {
	// Get the checkbox
	var check_food = document.getElementById("food_checkbox");
	// Get the output text
	var food_text = document.getElementById("food_text");
  
	// If the checkbox is checked, display the output text
	if (check_food.checked == true){
	  food_text.style.display = "block";
	} else {
	  food_text.style.display = "none";
	}
  }

function doMinus_salat(){
	var count_salat = document.getElementById("count_salat").value;
	if (count_salat > 0) {
		count_salat = --document.getElementById("count_salat").value;
	}
}
function doPlus_salat(){
	var count_salat = document.getElementById("count_salat").value;
	if ( checkMaxFood( count_salat ) != -1 ) {
		document.getElementById("count_salat").value++;
	}
}

function doMinus_suppe(){
	if (document.getElementById("count_suppe").value > 0) {
	document.getElementById("count_suppe").value = --document.getElementById("count_suppe").value;}
}
function doPlus_suppe(){
	var count_suppe = document.getElementById("count_suppe").value;
	if ( checkMaxFood( count_suppe ) != -1 ) {
		document.getElementById("count_suppe").value++;
	}
}

function doMinus_steak(){
	if (document.getElementById("count_steak").value > 0) {
	document.getElementById("count_steak").value = --document.getElementById("count_steak").value;}  
}
function doPlus_steak(){
	var count_steak = document.getElementById("count_steak").value;
	if ( checkMaxFood( count_steak ) != -1 ) {
		document.getElementById("count_steak").value++;
	}
}

function doMinus_ravioli(){
	if (document.getElementById("count_ravioli").value > 0) {
	document.getElementById("count_ravioli").value = --document.getElementById("count_ravioli").value;}  
}
function doPlus_ravioli(){
	var count_ravioli = document.getElementById("count_ravioli").value;
	if ( checkMaxFood( count_ravioli ) != -1 ) {
		document.getElementById("count_ravioli").value++;
	}
}

function doMinus_gemuese(){
	if (document.getElementById("count_gemuese").value > 0) {
	document.getElementById("count_gemuese").value = --document.getElementById("count_gemuese").value;}  
}
function doPlus_gemuese(){
	var count_gemuese = document.getElementById("count_gemuese").value;
	if ( checkMaxFood( count_gemuese ) != -1 ) {
		document.getElementById("count_gemuese").value++;
	}
}

function doMinus_mousse(){
	if (document.getElementById("count_mousse").value > 0) {
	document.getElementById("count_mousse").value = --document.getElementById("count_mousse").value;}  
}
function doPlus_mousse(){
	var count_mousse = document.getElementById("count_mousse").value;
	if ( checkMaxFood( count_mousse ) != -1 ) {
		document.getElementById("count_mousse").value++;
	}
}

function checkPlace() {
	// Get the checkbox
	var check_place = document.getElementById("place_checkbox");
	// Get the output text
	var mapImage = document.getElementById("mapImage");
  
	// If the checkbox is checked, display the output text
	if (check_place.checked == true){
	  mapImage.style.display = "block";
	} else {
	  mapImage.style.display = "none";
	}
  }
