//En algun lado mando el id al hacer click correspondiente a la tarjeta generada y lo recibe mi generador de templateCard details
//funcional para generar las tarjetas dinamicamente

/* let info = datos.events */
//sirve para armar la tarjetas card completas
/* console.log(info.map(nombreConParrafo))
function nombreConParrafo(each){
	let nombre = each.name
	let template = `<p> ${nombre}</p>`
	return template

}
 */

/* console.log(info) */

//** find funcionando para traer la informacion a cargar en el detail 
/* console.log(info.find(each => each._id == "4"))

let valor = 3 */


/* function recibirId(id){
	let events = datos.events
	let info = []
	/* console.log(animales.find(each => each.tipo === "terrestre")) */
	/* console.log(events.find(each => each.'${id}')) */

/* } */

/* recibirId(3) */
//* para generar el template  de details

console.log([document])
let informacion = datos.events
console.log(informacion)

 const queryString = location.search

 const params = new URLSearchParams(queryString)

 const id = params.get("id")
 console.log(id)
const detalle = informacion.find(each => each._id == id)

const contenedorDetalle = document.querySelector("#tarjetaDetalle")

contenedorDetalle.innerHTML =  `
	<div class="row flex-lg-row-reverse align-items-center g-2 py-2">
	<div class="col-12  col-lg-6  align-items-center">
		<img src="${detalle.image}" class="d-block mx-lg-auto img-fluid sombreado" alt="${detalle.name}"
			width="700" height="500" loading="lazy">
	</div>
	<div class="col-lg-6">
		<h1 class="display-6 lh-1 mb-3 title-center d-md-flex justify-content-md-center">${detalle.name}</h1>
		<p class="lead text-start  fst-italic m-1"><strong>Date:</strong> ${detalle.date}</p>
		<p class="lead title-center  fw-bolder fst-italic colorDescription">${detalle.description}</p>
		<p class="lead text-center fst-italic"><strong>Category: </strong>${detalle.category}    <strong>Place: </strong>${detalle.place} </p>
		<p class="lead text-center"><strong>Price: $</strong>${detalle.price}</p>
	</div>
</div>
`;


//Modificaciones
	
//Vamos a usar find para encontrar un detalle

//vamos a filtrar las categorías


//uso del params 

