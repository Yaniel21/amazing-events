/* function printPastEvents() {
	let events = datos.events;
	let currentDate = datos.currentDate;
	let templates = [];

	for(let elemento of events){
		if(elemento.date < currentDate){
				templates.push(template(elemento._id,elemento.image,elemento.name,elemento.description,elemento.price));
		}
	}
	let cardPast = document.getElementById("pastCard");
	cardPast.innerHTML = templates.join("");
	
}
 printPastEvents(); */


 //Modificaciones implementacion de la API
 
let cards = []

//definimos el template para cada una de las cards dinámicas

function defineTemplateCardPast(cards){
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
		//console.log(fetchResponse)

		let response = await fetchResponse.json()//se espera la transformación
		//console.log(response)
		let datos = response.events
		let currentDate = response.currentDate;
		//console.log(datos)
		printPastEvents(datos, currentDate)
	} catch(error){
		console.log("ocurrio un error que diosito lo ayude")
		console.log(error)
	}
}
fetchApi()

function printPastEvents(datos, currentDate) {
	let templates = [];

	for (let element of datos) {
		if (element.date < currentDate) {
			//template(element.image, element.name,element.description,element.price )			
		templates.push(
			defineTemplateCardPast(element)
			);
		}
	}
	let tarjeta = document.getElementById("pastCard");
	tarjeta.innerHTML = templates.join("");
}