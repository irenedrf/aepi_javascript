window.addEventListener('load', () => {
    const queryStringBuscador = location.search;
    const queryStringBuscadorObj = new URLSearchParams(queryStringBuscador);
    const resultado = queryStringBuscadorObj.get('buscador');

    console.log(resultado);

    //fetch para reecuperar las películas que tengan este criterio de búsqueda por nombre
    const buscarPeliculas = `https://api.themoviedb.org/3/search/movie?api_key=2424098daf645db283d946a0fd13247c&query=${resultado}&page=1`;

    console.log('la request queda asi: ' + buscarPeliculas);



    fetch(buscarPeliculas)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.results);

            const peliEspecifica = document.querySelector(".resultadosBusqueda");
            const tit = document.querySelector(".tituloBusqueda");

            const titulo = document.createElement('h1');
            titulo.classList.add('mb-5');
            titulo.innerText = `Resultados de tu búsqueda para ${resultado}`;
            tit.appendChild(titulo);



            if (data.results.length <= 0) {
                peliEspecifica.innerHTML += '<div class="text-center" mb-5><h2>Lo siento, no hay resultados para tu búsqueda</h2><div class="justify-content-center" m-5><img src="assets/vector_interrogante_fallback_img.png"</div></div>'
            } else {

                data.results.forEach(result => {
                    const esParaAdultos = result.adult ? 'Cine para adultos' : 'Para todos los públicos';
                    const imagen = result.poster_path === null ? 'assets/vector_interrogante_fallback_img.png' : `https://image.tmdb.org/t/p/w342/${result.poster_path}`;

                    peliEspecifica.innerHTML += `<div class="col-sm mb-4">
                            <div class="card tarjeta" style="width: 18rem;">
                            <img src="${imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${result.title}</h5>
                                <p class="card-text">${result.release_date}</p>
                                <p class="card-text">${esParaAdultos}</p>
                                <p class="card-text">Puntuación media: ${result.vote_average}</p>
                                <p class="card-text">${result.vote_count} votos</p>
                                <p class="card-text">${result.overview}</p>
                               
                            </div>
                        </div>
                        </div>
                        `

                });


            }



        })
        .catch(error => {
            console.log(error)
        })



});

