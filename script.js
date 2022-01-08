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