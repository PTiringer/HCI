var reservationArray = [
	{'date':'2022-03-20', 'time':'20:00', 'name':'Klaus Klausen', 'email':'klaus.en@gmy.de', 'seats':'4', 'comment':''},
	{'date':'2022-03-20', 'time':'20:30', 'name':'Mareike Ke', 'email':'mareike-ke@geemail.com', 'seats':'2', 'comment':''},
	{'date':'2022-03-21', 'time':'19:45', 'name':'Anne Susanne', 'email':'sus-anne@gmy.de', 'seats':'6', 'comment':'Vielleicht sind wir doch nur 5.'}
];

window.onload = () => {
	buildReservationTable(reservationArray);
};

function buildReservationTable(data){
	var tableBody = document.getElementById('reservationData');
	let dataHTML = '';
	
	for(let d of data) {
		dataHTML += `<tr onclick="customerInfo('${d.email}', '${d.comment}')"><td>${d.date}</td><td>${d.time}</td><td>${d.name}</td><td>${d.seats}</td></tr>`;
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
	
function doMinus_salat(){
	if (document.getElementById("count_salat").value > 0) {
	document.getElementById("count_salat").value = --document.getElementById("count_salat").value;}
}
function doPlus_salat(){
  document.getElementById("count_salat").value = ++document.getElementById("count_salat").value;
}

function doMinus_suppe(){
	if (document.getElementById("count_suppe").value > 0) {
	document.getElementById("count_suppe").value = --document.getElementById("count_suppe").value;}
}
function doPlus_suppe(){
  document.getElementById("count_suppe").value = ++document.getElementById("count_suppe").value;
}

function doMinus_steak(){
	if (document.getElementById("count_steak").value > 0) {
	document.getElementById("count_steak").value = --document.getElementById("count_steak").value;}  
}
function doPlus_steak(){
  document.getElementById("count_steak").value = ++document.getElementById("count_steak").value;
}

function doMinus_ravioli(){
	if (document.getElementById("count_ravioli").value > 0) {
	document.getElementById("count_ravioli").value = --document.getElementById("count_ravioli").value;}  
}
function doPlus_ravioli(){
  document.getElementById("count_ravioli").value = ++document.getElementById("count_ravioli").value;
}

function doMinus_gemuese(){
	if (document.getElementById("count_gemuese").value > 0) {
	document.getElementById("count_gemuese").value = --document.getElementById("count_gemuese").value;}  
}
function doPlus_gemuese(){
  document.getElementById("count_gemuese").value = ++document.getElementById("count_gemuese").value;
}

function doMinus_mousse(){
	if (document.getElementById("count_mousse").value > 0) {
	document.getElementById("count_mousse").value = --document.getElementById("count_mousse").value;}  
}
function doPlus_mousse(){
  document.getElementById("count_mousse").value = ++document.getElementById("count_mousse").value;
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
