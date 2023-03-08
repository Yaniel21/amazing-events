//version para traer las categorias de forma dinamica

let eventos = datos.events 
let categorias = [] //categorias
eventos.forEach(each => {
    if ( ! categorias.includes(each.category) ) {
        categorias.push(each.category)
    }    
    //console.log(categorias)
})

function printChecks(id_etiqueta, array_categoria) {
	let container = document.querySelector(id_etiqueta)
	array_categoria = array_categoria.map(each => {
		return `
		<fieldset class="d-inline-flex p-2 bd-highlight">
		<label class="form-check-label color-icon font-category" for="${each}">${each}</label>
		<input onclick="captureData()" class="class_checks form-check-input ms-1" type="checkbox" value="${each}" name="tipo" id="${each}">
		</fieldset>
	`
	})

	array_categoria.push(`<input onkeyup="captureData()" id="id_search" class="justify-content-end color-icon font-category margin-search" type="text" name="texto" placeholder="search">`)
	container.innerHTML = array_categoria.join("")
}
printChecks('#table_checks_upcoming',categorias)

function printTemplates(id_etiqueta,filtro) {
    let container = document.querySelector(id_etiqueta) 
     /* trae el elemento con ese id */
     container.innerHTML = ""
    filtro= filtro.map(defineTemplate)
    container.innerHTML = filtro.join('')
}

//printTemplates(id_etiqueta,filtro)

//filtro capture data
/**
 * @captureData captura los datos de checks checkeados y del input text
 */

function captureData() {
    let texto = document.getElementById('id_search').value
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
	let currentDate = datos.currentDate;
	
    let contenedorGeneral = document.getElementById("upcomingEvents")
    let contenedorBusqueda = document.getElementById("resultado_busqueda_upcoming")
    if (texto != "" || checks.length > 0) {
        //console.log(texto)
        //console.log(checks)
        let filtro = eventos.filter(each => {
            return (
                each.name.includes(texto)) 
                && (checks.length === 0 || checks.includes(each.category)) && (each.date > currentDate)
        })
     //console.log(filtro)
        if (filtro.length>0) {
            contenedorGeneral.style.display = "none"
            printTemplates('#resultado_busqueda_upcoming',filtro)
    
        } else {
            contenedorGeneral.style.display = "none"
            notFound('#resultado_busqueda_upcoming')
        }

     }else{
        contenedorGeneral.style.display = "flex"
        contenedorBusqueda.innerHTML = ""
     } //operador no es igual

     //   return filtro
}


function notFound(id_etiqueta) {
    let container = document.querySelector(id_etiqueta)
    container.innerHTML = `
                                    <div class="alert alert-warning d-flex align-items-center" role="alert">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                                    </svg>
                                        <div>
                                                EVENT NOT FOUND
                                                </div>
                                    </div> 
    `
}

/**
 * @defineTemplate define el template de cada card dinamica
 */
function defineTemplate(filtro) {
    return ` 
 <div class="col">
    <div class="card shadow-sm">
                <figure class="figure">
                        <img src="${filtro.image}" alt="${filtro.name}"  class="bd-placeholder-img card-img-top tamanioFoto">
        </figure>
    <div class="card-body">
            <h1 class="d-flex flex-wrap justify-content-center font-title">${filtro.name}</h1>
            <p class="card-text font-paragraph">${filtro.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted fs-6">Price $${filtro.price}</small>
                <div class="button-color">
                    <a href="./details.html?id=${filtro._id}&nombre=${filtro.name}" class="nav-link btn btn-sm text-light button-color">Ver mas</a>
                </div>
            </div>
        </div>
    </div>
    </div>`
}