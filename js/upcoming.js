function printUpcomingEvents() {
	let events = datos.events;
	let currentDate = datos.currentDate;
	let templates = [];

	for (let element of events) {
		if (element.date > currentDate) {
			//template(element.image, element.name,element.description,element.price )
			templates.push(
				template(
					element.image,
					element.name,
					element.description,
					element.price
				)
			);
		}
	}
	let tarjeta = document.getElementById("upcomingEvents");
	tarjeta.innerHTML = templates.join("");
}
printUpcomingEvents();