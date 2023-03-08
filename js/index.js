function createTemplate() {
//se crea variable en la que se almacenan los datos  events
	let events = datos.events
//se crea variable en la que se almacenan los datos  (array) para renderizar las CARDS
//templates
	let templates = []

	//loop
	for (let one of events){
		//cada uno de los elementos del array de eventos es un objeto
				//console.log(one)
		//se debe guardar cada card  en un array que luego se imprimira en el DOM
				templates.push(template( one._id ,one.image, one.name, one.description, one.price))
		}
	//console.log(templates)

	let selector = document.getElementById("cardContainer")

	selector.innerHTML = templates.join("")
	
}
createTemplate()

//Modificaciones