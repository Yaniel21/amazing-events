let template = (id,foto,titulo,descripcion,precio) => {
	return	`
<div class="col">
<div class="card shadow-sm">
			<figure class="figure">
					<img src="${foto}" alt="${titulo}"  class="bd-placeholder-img card-img-top tamanioFoto">
	</figure>
<div class="card-body">
		<h1 class="d-flex flex-wrap justify-content-center font-title">${titulo}</h1>
		<p class="card-text font-paragraph">${descripcion}</p>
		<div class="d-flex justify-content-between align-items-center">
			<small class="text-muted fs-6">Price $${precio}</small>
			<div class="button-color">
				<a href="./details.html?id=${id}" class="nav-link btn btn-sm text-light button-color">Ver mas</a>
			</div>
		</div>
	</div>
</div>
</div>`;
}
//Modificaciones