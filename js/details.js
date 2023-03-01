//En algun lado mando el id al hacer click correspondiente a la tarjeta generada y lo recibe mi generador de templateCard details
//funcional para generar las tarjetas dinamicamente

let info = datos.events
//sirve para armar la tarjetas card completas
console.log(info.map(nombreConParrafo))
function nombreConParrafo(each){
	let nombre = each.name
	let template = `<p> ${nombre}</p>`
	return template

}


console.log(info)

//** find funcionando para traer la informacion a cargar en el detail 
console.log(info.find(each => each._id == "4"))

let valor = 3


function recibirId(id){
	let events = datos.events
	let info = []
	/* console.log(animales.find(each => each.tipo === "terrestre")) */
	/* console.log(events.find(each => each.'${id}')) */

}

recibirId(3)
//* para generar el template  de details

function cardDetalle(numero){

	return  `

	<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
	<div class="col-10 col-sm-8 col-lg-6">
		<img src="./assets/img/details/${animal.foto}" class="d-block mx-lg-auto img-fluid" alt="${animal.nombre}"
			width="700" height="500" loading="lazy">
	</div>
	<div class="col-lg-6">
		<h1 class="display-5 fw-bold lh-1 mb-3 title-center d-md-flex justify-content-md-center">${animal.nombre}</h1>
		<p class="lead title-center">${animal.date}</p>
		<p class="lead title-center">${animal.description}</p>
		<p class="lead title-center">${animal.category}</p>
		<p class="lead title-center">${animal.place}</p>
		<p class="lead title-center">${animal.price}</p>
		
	</div>
</div>

`
}

//Modificaciones
	
//Vamos a usar find para encontrar un detalle

//vamos a filtrar las categorías