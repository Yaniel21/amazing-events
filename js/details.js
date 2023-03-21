//* para generar el template  de details

	//console.log([document])
/* 	let informacion = datos.events
	console.log(informacion)
	 const queryString = location.search
	 const params = new URLSearchParams(queryString)
	 const id = params.get("id")
	 console.log(id)
	const detalle = informacion.find(each => each._id == id)
	const contenedorDetalle = document.querySelector("#tarjetaDetalle")
	contenedorDetalle.innerHTML =  `
		<div class="row flex-lg-row-reverse align-items-center g-2 py-2 bounceIn">
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
	` */

	//Modificaciones: implementacion de la api

async function fetchApi(){
	try{
		let urlApi = "https://mindhub-ab35.onrender.com/api/amazing-events"
		let fetchResponse = await fetch(urlApi)//se espera la respuesta 
		//console.log(fetchResponse)

		let response = await fetchResponse.json()//se espera la transformación
		//console.log(response)
		let datos = response.events
		
		//console.log(datos)
		printDetails(datos)
		
	} catch(error){
		console.log("ocurrio un error que diosito lo ayude")
		console.log(error)
	}
}
fetchApi()


//console.log([document])


function printDetails(datos){
		//console.log([document])
			//let informacion = datos.events
			//console.log(informacion)
	 		const queryString = location.search
	 		const params = new URLSearchParams(queryString)
	 		const id = params.get("id")
	 		//console.log(id)
			
			const detalle = datos.find(each => each.id == id)
						
			const contenedorDetalle = document.querySelector("#tarjetaDetalle")
						
			contenedorDetalle.innerHTML =  `
			<div class="row flex-lg-row-reverse align-items-center g-2 py-2 ">
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
	`
}