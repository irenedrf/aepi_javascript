//aseguramos que el DOM se ha cargado

window.addEventListener('load', () => {
    //paso 1: recuperar el array de ids de pelis favoritas desde localstorage
    let listaFavoritos = JSON.parse(localStorage.getItem("favouriteTopFilms"));
    let listaFavoritosPop = JSON.parse(localStorage.getItem("favouritePopFilms"));
    let listaSeriesFavoritas = JSON.parse(localStorage.getItem("favouriteSeries"));

    //recuperamos las pelis favoritas de entre las peelis Top
    const peliEspecifica = document.querySelector(".misFavoritos");
    if (!listaFavoritos) {
        peliEspecifica.innerHTML += '<div class="text-center" mb-5><h2>Lo siento, no hay resultados para tu búsqueda</h2><div class="justify-content-center" m-5><img src="assets/vector_interrogante_fallback_img.png"</div></div>';

    } else {



        listaFavoritos.forEach(favorito => {
            const requestPelicula = `https://api.themoviedb.org/3/movie/${favorito}?api_key=2424098daf645db283d946a0fd13247c`

            console.log('la request queda asi: ' + requestPelicula);



            fetch(requestPelicula)
                .then(resp => resp.json())
                .then(data => {

                    //paso 3: imprimir



                    const esParaAdultos = data.adult ? 'Cine para adultos' : 'Para todos los públicos';

                    //imagen de fallback para los resultados sin imagen
                    const imagen = data.poster_path === null ? 'assets/vector_interrogante_fallback_img.png' : `https://image.tmdb.org/t/p/w342/${data.poster_path}`;

                    peliEspecifica.innerHTML += `<div class="col-sm mb-4">
                            <div class="card tarjeta" style="width: 18rem;">
                            <img src="${imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.release_date}</p>
                                <p class="card-text">${esParaAdultos}</p>
                                <a href="similares.html?id=${data.id}" class="btn btn-warning">Títulos similares</a>
                            </div>
                        </div>
                        </div>
                        `


                })
                .catch(error => {
                    console.log(error)
                })



        });
    }

    const peliEspecificaPop = document.querySelector(".misFavoritosPop");
    if (!listaFavoritosPop) {
        peliEspecificaPop.innerHTML += '<div class="text-center" mb-5><h2>Lo siento, no hay resultados para tu búsqueda</h2><div class="justify-content-center" m-5><img src="assets/vector_interrogante_fallback_img.png"</div></div>';

    } else {
        //reecuperamos las pelis favoritas de entre las pelis populares
        listaFavoritosPop.forEach(favorito => {
            const requestPelicula = `https://api.themoviedb.org/3/movie/${favorito}?api_key=2424098daf645db283d946a0fd13247c`

            console.log('la request queda asi: ' + requestPelicula);



            fetch(requestPelicula)
                .then(resp => resp.json())
                .then(data => {




                    const esParaAdultos = data.adult ? 'Cine para adultos' : 'Para todos los públicos';

                    const imagen = data.poster_path === null ? 'assets/vector_interrogante_fallback_img.png' : `https://image.tmdb.org/t/p/w342/${data.poster_path}`;

                    peliEspecificaPop.innerHTML += `<div class="col-sm mb-4">
                            <div class="card tarjeta" style="width: 18rem;">
                            <img src="${imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.release_date}</p>
                                <p class="card-text">${esParaAdultos}</p>
                                <a href="similares.html?id=${data.id}" class="btn btn-warning">Títulos similares</a>
                            </div>
                        </div>
                        </div>
                        `


                })
                .catch(error => {
                    console.log(error)
                })



        });
    }

    const serieEspecifica = document.querySelector(".misSeriesFavoritas");

    if (!listaSeriesFavoritas) {
        serieEspecifica.innerHTML += '<div class="text-center" mb-5><h2>Lo siento, no hay resultados para tu búsqueda</h2><div class="justify-content-center" m-5><img src="assets/vector_interrogante_fallback_img.png"</div></div>'
    } else {

        //recuperamos las seeries favoritas
        listaSeriesFavoritas.forEach(favorito => {
            const requestSerie = `https://api.themoviedb.org/3/tv/${favorito}?api_key=2424098daf645db283d946a0fd13247c`

            console.log('la request queda asi: ' + requestSerie);



            fetch(requestSerie)
                .then(resp => resp.json())
                .then(datos => {
                    //console.log(datos);



                    const proximoEpisodio = datos.next_episode_to_air ? datos.next_episode_to_air.name : 'Serie finalizada';

                    serieEspecifica.innerHTML += `<div class="col-sm mb-4">
                <div class="card tarjeta" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w342/${datos.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${datos.name}</h5>
                        <p class="card-text">${datos.first_air_date}</p>
                        <p class="card-text">Valoración media: ${datos.vote_average}</p>
                        <p class="card-text">${datos.vote_count} votos</p>
                        <p class="card-text">Última emisión: ${datos.last_air_date}</p>
                        <p class="card-text">Último episodio emitido: ${datos.last_episode_to_air.name}</p>
                        <p class="card-text">Próximo episodio: ${proximoEpisodio}</p>

                        
                </div>
                </div>
            </div>`




                })
                .catch(error => {
                    console.log(error)
                })



        });


    }



})

