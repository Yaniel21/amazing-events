//Sort ordena los elementos de la tabla gasto anual y promedio por masc
//requiere dos parametros el elemento1, elemento 2
let informacion = datos.events

 let sorted1 = [...datos.events].sort((elemento1, elemento2) => elemento1.price-elemento2.price) //si funciona
console.log(sorted1) 
//va a ordenar los elementos 
/* let sorted2 = [...datos.events].sort((e1, e2) => e1.assistance - e2.assistance) //debo elegir otro elemento para comparar
console.log(sorted2)
 */

console.log("el que posee mayor precio:  "+ sorted1[sorted1.length-1].price)

console.log(" el menor precio de evento es: " + sorted1[0].price)

console.log("La categoría: "+sorted1[sorted1.length-1].category + " es la que posee mayor precio, de : "+ sorted1[sorted1.length-1].price )

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

let mayorCapacidad = informacion.sort((cap1,cap2) => cap1.capacity-cap2.capacity)
console.log("la categoría es: "+ mayorCapacidad[mayorCapacidad.length-1].category+ "con una capacidad total de: "+  mayorCapacidad[mayorCapacidad.length-1].capacity )


// & upcoming events genera datos para tabla de categoría, ganancia, porcentaje de asistencia 

//?Past Events categoría ganancia porcentaje de asistencia
 