/* function printUpcomingEvents() {
	let events = datos.events;
	let currentDate = datos.currentDate;
	let templates = [];

	for (let element of events) {
		if (element.date > currentDate) { */
			//template(element.image, element.name,element.description,element.price )
/* 			templates.push(
				template(
					element._id,
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
printUpcomingEvents();  */

let cards = []

//definimos el template para cada una de las cards dinámicas

function defineTemplateCardUpcoming(cards){
	return `
	<div class="col">
	<div class="card shadow-sm">
			<figure class="figure">
					<img src="${cards.image}" alt="${cards.name}"  class="bd-placeholder-img card-img-top tamanioFoto">
			</figure>
		<div class="card-body">
				<h1 class="d-flex flex-wrap justify-content-center font-title">${cards.name}</h1>
				<p class="card-text font-paragraph">${cards.description}</p>
				<div class="d-flex justify-content-between align-items-center">
						<small class="text-muted fs-6">Price $${cards.price}</small>
						<button class="button-color" id="boton">
						<a href="./details.html?id=${cards.id}&nombre=${cards.name}"   class="nav-link btn btn-sm text-light button-color">Ver mas</a>
						</button>
				</div>
		</div>
	</div>
</div>`;
}

//Modificaciones: implementacion de la api

async function fetchApi(){
	try{
		let urlApi = "https://mindhub-ab35.onrender.com/api/amazing-events"
		let fetchResponse = await fetch(urlApi)//se espera la respuesta 
		console.log(fetchResponse)
	
		let response = await fetchResponse.json()//se espera la transformación
		console.log(response)

		let datos = response.events
		let currentDate = response.currentDate;
		console.log(datos)

		printUpcomingEvents(datos, currentDate)

	} catch(error){
		console.log("ocurrio un error que diosito lo ayude")
		console.log(error)
	}

}
fetchApi()

function printUpcomingEvents(datos, currentDate) {
	let templates = [];

	for (let element of datos) {
		if (element.date > currentDate) {
			//template(element.image, element.name,element.description,element.price )

			
		templates.push(
			defineTemplateCardUpcoming(element)
			);

		}
	}
	let tarjeta = document.getElementById("upcomingEvents");
	tarjeta.innerHTML = templates.join("");
}


//fin de la generacion dimamica de las card

//elaboracion y filtrado de las categorias:
