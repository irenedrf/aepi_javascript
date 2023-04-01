

//anadir eeeel window



const capturarQueryString = location.search;
console.log('capturar querystring es ' + capturarQueryString)
const queryStringObjeto = new URLSearchParams(capturarQueryString);
const idPelicula = queryStringObjeto.get('id');
console.log('la id de la peli de detalle es ' + idPelicula)

//obtenemos ahora la película concreta sobre la cual hicimos click en Detalles

const requestPeliculaEspecifica = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=2424098daf645db283d946a0fd13247c`

console.log('la request queda asi: ' + requestPeliculaEspecifica);



fetch(requestPeliculaEspecifica)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)

        const peliEspecifica = document.querySelector(".detallePelicula");


        const esParaAdultos = data.adult ? 'Cine para adultos' : 'Para todos los públicos';

        peliEspecifica.innerHTML += `<div class="col-sm mb-4">
                            <div class="card tarjeta" style="width: 18rem;">
                            <img src="https://image.tmdb.org/t/p/w342/${data.poster_path}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.release_date}</p>
                                <p class="card-text">${esParaAdultos}</p>
                                <p class="card-text">${data.overview}</p>
                                <a href="#" class="btn btn-success claseFavorito">Añadir a favoritos</a>
                                <p>CONSEGUIR PONER REVIEWS COMO FUNCIONALIDAD EXTRA REQUERIDA AQUI ABAJO</p>
                            </div>
                        </div>
                        </div>
                        `





    })
    .catch(error => {
        console.log(error)
    })



