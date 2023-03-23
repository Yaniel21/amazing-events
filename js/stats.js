//Sort ordena los elementos de la tabla gasto anual y promedio por masc
//requiere dos parametros el elemento1, elemento 2
//let informacion = datos.events

 //let sorted1 = [...datos.events].sort((elemento1, elemento2) => elemento1.price-elemento2.price) //si funciona
//console.log(sorted1) 
//va a ordenar los elementos 
/* let sorted2 = [...datos.events].sort((e1, e2) => e1.assistance - e2.assistance) //debo elegir otro elemento para comparar
console.log(sorted2)
 */

//console.log("el que posee mayor precio:  "+ sorted1[sorted1.length-1].price)

//console.log(" el menor precio de evento es: " + sorted1[0].price)

//console.log("La categoría: "+sorted1[sorted1.length-1].category + " es la que posee mayor precio, de : "+ sorted1[sorted1.length-1].price )

//debemos reducirlose usa @reduce
//* TABLA EVENTOS ESTATICOS 
//eventos con mayo porcentaje de asistencia

//let porcentajeAsistencia = informacion.reduce(
	// exige dos parametros el primero es una función
/* 	(acc, each) => {
	console.log(acc)
	console.log(each)
	let capacidad = each.capacity
	let asistencia = each.assistance
	let porcentaje = (asistencia *100)/capacidad
	return porcentaje

}, */
//acc es el acumulador arranca en cero pero despues se guarda en el acumulador - each representa cada elemento que pertenece al array 
	//valor inicial en el que se inicia la reduccion
/* 	0

)
 */
//mayor porcentaje de asistencia


//evento con menor porcentaje de audiencia

// evento con mayor capacidad 

//let mayorCapacidad = informacion.sort((cap1,cap2) => cap1.capacity-cap2.capacity)
//console.log("la categoría es: "+ mayorCapacidad[mayorCapacidad.length-1].category+ "con una capacidad total de: "+  mayorCapacidad[mayorCapacidad.length-1].capacity )

//Sort ordena los elementos de la tabla gasto anual y promedio por masc
//requiere dos parametros el elemento1, elemento 2



//* TABLA EVENTOS ESTATICOS 

async function fetchApi(){
	try{
		let urlApi = "https://mindhub-ab35.onrender.com/api/amazing-events"
		let fetchResponse = await fetch(urlApi)//se espera la respuesta 
		//console.log(fetchResponse)

		let response = await fetchResponse.json()//se espera la transformación
		//console.log(response)
		
		let datosTabla = response.events
		
		//console.log(datosTabla)
		//printDetails(datostabla)

		printmayorCapacidad(datosTabla)
		percentajeOfAttendance(response)
		porcentajeUpcoming(response)
		porcentajePast(response)

	} catch(error){
		console.log("ocurrio un error que diosito lo ayude")
		console.log(error)
	}
}
fetchApi()
//eventos con mayor porcentaje de asistencia--->>>> Events width the highest percentage of attendance
// se debe calcular los porcentajes en base a la capacidad - usar regla de tres simple
//al hacerlo se determina cuál es el que tiene el mayor y el menor porcentaje
//mayor porcentaje de asistencia

function percentajeOfAttendance(response){
	let currentDate =response.currentDate
	let eventos = response.events
	let resultado = []
	eventos.forEach (each => {
					if((each.date < currentDate)&& (!isNaN(each.assistance) )){
						
								let objetoTemporal = {
													nombre: each.name,
													categoria: each.category, 
													capacidad: each.capacity , 
													asistencia: each.assistance, 
													porcentaje: ((each.assistance*100)/each.capacity)
								}
	
								
							
									resultado.push(objetoTemporal)
									//console.log(objetoTemporal)
								
		
						}	
						
					})
					//console.log(resultado)
					sortedPorcentaje(resultado)
					return resultado
	}


function sortedPorcentaje(resultado) {
	//console.log(resultado)
	let sorted = [...resultado].sort((e1,e2)=> e1.porcentaje- e2.porcentaje)
	//console.log(sorted)

	//console.log(sorted[sorted.length-1].nombre + "  con porcentaje de  "+ sorted[sorted.length-1].porcentaje)

	let mayorAsistencia = sorted[sorted.length-1].nombre


	//console.log(sorted[0].nombre + "  con menor  porcentaje de asistencia  "+ sorted[0].porcentaje)


let menorAsistencia = sorted[0].nombre

printTablaPorcentajeAsistencia(mayorAsistencia, menorAsistencia)
}

function printTablaPorcentajeAsistencia(mayorAsistencia, menorAsistencia){
						
	const contenedorDetalle1 = document.querySelector("#tablaMayorAsistencia")
				
	contenedorDetalle1.innerHTML =  `${mayorAsistencia}`

	const contenedorDetalle2 = document.querySelector("#tablaMenorAsistencia")
				
	contenedorDetalle2.innerHTML =  `${menorAsistencia}`
}

//evento con menor porcentaje de audiencia

// evento con mayor capacidad 


function printmayorCapacidad(datosTabla){

	let mayorCapacidad = [...datosTabla].sort((cap1,cap2) => cap1.capacity-cap2.capacity)
//console.log("la categoría es: "+ mayorCapacidad[mayorCapacidad.length-1].category+ "con una capacidad total de: "+  mayorCapacidad[mayorCapacidad.length-1].capacity )

//console.log(mayorCapacidad[mayorCapacidad.length-1].name)

let nombreEvento = mayorCapacidad[mayorCapacidad.length-1].name


printDetails(nombreEvento)
}

function printDetails(nombreEvento){
						
			const contenedorDetalle = document.querySelector("#tablaCapacity")
						
			contenedorDetalle.innerHTML =  `${nombreEvento}`
}


// & upcoming events genera datos para tabla de categoría, ganancia, porcentaje de asistencia 

function porcentajeUpcoming(response){
	let currentDate =response.currentDate
	let eventos = response.events
	let resultadoUpcoming = []
	let categoriaUpcoming = []
	eventos.forEach (each => {
					if((each.date > currentDate)&& (!isNaN(each.estimate) )){
						
								let objetoTemporal = {
													nombre: each.name,
													categoria: each.category, 
													capacidad: each.capacity , 
													estimado: each.estimate, 
													porcentaje: ((each.estimate*100)/each.capacity),
													gananciaEstimada: each.price*each.estimate
								}
	
								
							
									resultadoUpcoming.push(objetoTemporal)
									categoriaUpcoming.push(objetoTemporal.categoria)
									console.log(objetoTemporal)
								
		
						}	
						
					})
					console.log(resultadoUpcoming)
					console.log(categoriaUpcoming)


					
					/* imprimirTablaUpcoming(resultadoUpcoming) */
					filtroCategorias(categoriaUpcoming,resultadoUpcoming)
					/* printCardsUpcoming("#UpcomingTabla", resultadoUpcoming) */
				

					return resultadoUpcoming
	}

function filtroCategorias(categoriaUpcoming,resultadoUpcoming) {
	let categoriasUnicas = Array.from(new Set(categoriaUpcoming)) 

	//console.log(categoriasUnicas)
	let eventsByCategory = categoriasUnicas.map(eventCat => resultadoUpcoming.filter(each => each.categoria === eventCat))

	//console.log(eventsByCategory)
	reduceUpcoming(eventsByCategory)
    return eventsByCategory

}


 	function reduceUpcoming(eventsByCategory){

	let tablaUpcomingTotal= eventsByCategory.map(eventCat => {
		let calculate  =  eventCat.reduce(
			(acc, each) =>{
				console.log(each.categoria)
	
	
				acc.categoriaAgrupada = each.categoria
				acc.totalGanancia += each.gananciaEstimada
				acc.totalPorcentaje += each.porcentaje
				acc.cantidad += 1
	
				return acc
	
			},
			{categoriaAgrupada: "", totalGanancia: 0, totalPorcentaje:0, cantidad:0}
			
			
		 )
		 calculate.totalPorcentaje=  calculate.totalPorcentaje/  calculate.cantidad
		 return calculate
	})
	
	imprimirTablaUpcoming(tablaUpcomingTotal)


} 

	function imprimirTablaUpcoming(tablaUpcomingTotal){
			console.log(tablaUpcomingTotal)
			const contenedorTabla2 = document.querySelector("#UpcomingTabla")
			
	
			let  html = "" 
			tablaUpcomingTotal.forEach((each =>{
				html += `
				<tr class="table-warning table-style-2">
				<td>${each.categoriaAgrupada}</td>
				<td>${each.totalGanancia}</td>
				<td>${each.totalPorcentaje.toFixed(2)} %</td>
				</tr>
				`

			}))
				
			//console.log(html)
		
			contenedorTabla2.innerHTML =  html 
	}
//?Past Events categoría ganancia porcentaje de asistencia
 

function porcentajePast(response){
	let currentDate =response.currentDate
	let eventos = response.events
	let resultadoPast = []
	let categoriaPast = []
	eventos.forEach (each => {
					if((each.date < currentDate)&& (!isNaN(each.assistance) )){
						
								let objetoTemporal = {
													nombre: each.name,
													categoria: each.category, 
													capacidad: each.capacity , 
													asistencia: each.assistance, 
													porcentaje: ((each.assistance*100)/each.capacity),
													gananciaAsistencia: each.price*each.assistance
								}
	
								
							
									resultadoPast.push(objetoTemporal)
									categoriaPast.push(objetoTemporal.categoria)
									console.log(objetoTemporal)
								
		
						}	
						
					})
					console.log(resultadoPast)
					console.log(categoriaPast)


					
					/* imprimirTablaUpcoming(resultadoPast) */
					filtroCategoriasPast(categoriaPast,resultadoPast)
					/* printCardsPast("#UpcomingTabla", resultadoPast) */
				

					return resultadoPast
	}

function filtroCategoriasPast(categoriaPast,resultadoPast) {
	let categoriasUnicasPast = Array.from(new Set(categoriaPast)) 

	console.log(categoriasUnicasPast )
	let eventsByCategoryPast = categoriasUnicasPast.map(eventCat => resultadoPast.filter(each => each.categoria === eventCat))

	console.log(eventsByCategoryPast)
	reducePast(eventsByCategoryPast)
    return eventsByCategoryPast

}


 	function reducePast(eventsByCategoryPast){

	let tablaPastTotal= eventsByCategoryPast.map(eventCat => {
		let calculate  =  eventCat.reduce(
			(acc, each) =>{
				console.log(each.categoria)
	
	
				acc.categoriaAgrupada = each.categoria
				acc.totalGanancia += each.gananciaAsistencia
				acc.totalPorcentaje += each.porcentaje
				acc.cantidad += 1
	
				return acc
	
			},
			{categoriaAgrupada: "", totalGanancia: 0, totalPorcentaje:0, cantidad:0}
			
			
		 )
		 calculate.totalPorcentaje=  calculate.totalPorcentaje/  calculate.cantidad
		 return calculate
	})
	
	imprimirTablaPast(tablaPastTotal)


} 

	function imprimirTablaPast(tablaPastTotal){
			console.log(tablaPastTotal)
			const contenedorTabla3 = document.querySelector("#tablePast")
			
	
			let  html = "" 
			tablaPastTotal.forEach((each =>{
				html += `
				<tr class="table-warning table-style-2">
				<td>${each.categoriaAgrupada}</td>
				<td>${each.totalGanancia}</td>
				<td>${each.totalPorcentaje.toFixed(2)} %</td>
				</tr>
				`

			}))
				
			//console.log(html)
		
			contenedorTabla3.innerHTML =  html 
	}