
/**
 * @captureData captura los datos del formulario y retorna un objeto
 */
function captureData() {
    let name = document.getElementById('nameContact')
	let email = document.getElementById('emailContact')
	let textArea = document.getElementById('textContact')
    console.log(name)
    console.log(email) //trae el email
    console.log(textArea)

	let data = {
        [name.name]: name.value,
		[email.name]: email.value, //trae el email
		[textArea.name]: textArea.value // trae el textarea
    }

    console.log(data)

}

const handleForm = (event) => { /* le puede poner cualquier nombre PERO VA A HACER REFERENCIA SIEMPRE AL EVENTO ASOCIADO */
    event.preventDefault()
    captureData()
}

let buttonForm = document.getElementById('form-button')
buttonForm.addEventListener(
    'click', /* tipo de evento que tiene que escuchar */
    handleForm /* funcion que se va a ejecutar cada vez que se realice el evento */
)