
/* function createTemplate() { */
//se crea variable en la que se almacenan los datos  events
/* 	let events = datos.events */
//se crea variable en la que se almacenan los datos  (array) para renderizar las CARDS
//templates
/* 	let templates = [] */

	//loop
	/* for (let one of events){ */
		//cada uno de los elementos del array de eventos es un objeto
				//console.log(one)
		//se debe guardar cada card  en un array que luego se imprimira en el DOM
		/* 		templates.push(template( one._id ,one.image, one.name, one.description, one.price)) */
/* 		} */
	//console.log(templates)

	/* let selector = document.getElementById("cardContainer") */

/* 	selector.innerHTML = templates.join("") */
	
//} 
/* createTemplate() */

//Modificaciones: implementación de la API

let cards = []

//definimos el template para cada una de las cards dinámicas

function defineTemplateCard(cards){
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

function printCards(id_etiqueta, array){
	let container = document.querySelector(id_etiqueta)//trae el elemento con ese id
	array = array.map(defineTemplateCard)
	container.innerHTML = array.join('')
}

/* printCards('#cardContainer', cards) */


async function fetchApi(){
	try{
		let urlApi = "https://mindhub-ab35.onrender.com/api/amazing-events"
		let fetchResponse = await fetch(urlApi)//se espera la respuesta 
		console.log(fetchResponse)
	
		let response = await fetchResponse.json()//se espera la transformación
		console.log(response)

		let datos = response.events
		console.log(datos)

		printCards('#cardContainer', datos)


	} catch(error){
		console.log("ocurrio un error que diosito lo ayude")
		console.log(error)
	}

}
fetchApi()