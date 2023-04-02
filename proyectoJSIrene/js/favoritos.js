//aseguramos que el DOM se ha cargado

window.addEventListener('load', () => {
    //paso 1: recuperar el array de ids de pelis favoritas desde localstorage
    let listaFavoritos = JSON.parse(localStorage.getItem("favouriteFilms"));

    //paso 2: usar un fetch para recuperar las películas favoritas desde la api
    listaFavoritos.forEach(favorito => {
        const requestPelicula = `https://api.themoviedb.org/3/movie/${favorito}?api_key=2424098daf645db283d946a0fd13247c`

        console.log('la request queda asi: ' + requestPelicula);



        fetch(requestPelicula)
            .then(resp => resp.json())
            .then(data => {

                //paso 3: imprimir
                const peliEspecifica = document.querySelector(".misFavoritos");


                const esParaAdultos = data.adult ? 'Cine para adultos' : 'Para todos los públicos';

                peliEspecifica.innerHTML += `<div class="col-sm mb-4">
                            <div class="card tarjeta" style="width: 18rem;">
                            <img src="https://image.tmdb.org/t/p/w342/${data.poster_path}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.release_date}</p>
                                <p class="card-text">${esParaAdultos}</p>
                               
                               
                            </div>
                        </div>
                        </div>
                        `





            })
            .catch(error => {
                console.log(error)
            })



    });






})

