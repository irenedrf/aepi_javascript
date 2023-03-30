//imprimir los resultados de la búsqueda reutilizando la api call de index

//MODIFICAR: estoy usando como ejemplo una llamada genérica pero necesito una personalizada, pasarle al api el título a buscar

function buscarPeliculaOSerie(titulo) {
    console.log('me estoy ejecutando y estoy recibiendo ' + titulo);


}

const requestTopRatedFilms = "https://api.themoviedb.org/3/movie/top_rated?api_key=2424098daf645db283d946a0fd13247c";


fetch(requestTopRatedFilms)
    .then(response => response.json())
    .then(datos => {
        //console.log(datos.results)
        const resultados = document.querySelector(".resultadosBusqueda");

        for (i = 0; i < datos.results.length; i++) {
            resultados.innerHTML += `<div class="col-sm mb-4">
            <div class="card tarjeta" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${datos.results[i].title}</h5>
                <p class="card-text">${datos.results[i].release_date}</p>
                <p class="card-text">Valoración media: ${datos.results[i].vote_average}</p>
                <p class="card-text">${datos.results[i].vote_count} votos</p>
                <a href="#" class="btn btn-primary">Detalle</a>
                <a href="#" class="btn btn-secondary favorito">Añadir a favoritos</a>
            </div>
        </div>
        </div>
        `
        }



    })
    .catch(error => {
        console.log(error)
    })
