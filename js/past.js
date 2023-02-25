function printPastEvents() {
	let events = datos.events;
	let currentDate = datos.currentDate;
	let templates = [];

	for(let elemento of events){
		if(elemento.date < currentDate){
				templates.push(template(elemento.image,elemento.name,elemento.description,elemento.price));
		}
	}
	let cardPast = document.getElementById("pastCard");
	cardPast.innerHTML = templates.join("");
	
}
 printPastEvents();