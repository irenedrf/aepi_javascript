

window.addEventListener('load', () => {


    const capturarQueryString = location.search;

    const queryStringObjeto = new URLSearchParams(capturarQueryString);
    const idPelicula = queryStringObjeto.get('id');


    //obtenemos ahora la película concreta sobre la cual hicimos click en Detalles

    const requestPeliculaEspecifica = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=2424098daf645db283d946a0fd13247c`

    console.log('la request queda asi: ' + requestPeliculaEspecifica);



    fetch(requestPeliculaEspecifica)
        .then(resp => resp.json())
        .then(data => {


            const peliEspecifica = document.querySelector(".detallePelicula");


            const esParaAdultos = data.adult ? 'Cine para adultos' : 'Para todos los públicos';

            peliEspecifica.innerHTML += `<div class="col-sm mb-4">
                            <div class="card tarjeta" style="width: 18rem;">
                            <img src="https://image.tmdb.org/t/p/w342/${data.poster_path}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.release_date}</p>
                                <p class="card-text">${esParaAdultos}</p>
                                <p class="card-text">Puntuación media: ${data.vote_average}</p>
                                <p class="card-text">${data.vote_count} votos</p>
                                <p class="card-text">${data.overview}</p>
                            </div>
                        </div>
                        </div>
                        `





        })
        .catch(error => {
            console.log(error)
        })



})