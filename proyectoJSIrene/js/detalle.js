

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

            const listaGeneros = [];
            data.genres.forEach(genero => {
                listaGeneros.push(genero.name)
            });

            const esParaAdultos = data.adult ? 'Cine para adultos' : 'Para todos los públicos';
            const imagen = data.poster_path === null ? 'assets/vector_interrogante_fallback_img.png' : `https://image.tmdb.org/t/p/w342/${data.poster_path}`;

            peliEspecifica.innerHTML += `<div class="row d-flex justify-content-center">
                            <div class="card" style="width: 20rem;">
                            <img src="${imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">Categorías: ${listaGeneros}</p>
                                <p class="card-text">${data.release_date}</p>
                                <p class="card-text">${esParaAdultos}</p>
                                <p class="card-text">Puntuación media: ${data.vote_average}</p>
                                <p class="card-text">${data.vote_count} votos</p>
                                <p class="card-text">${data.overview}</p>
                                <a href="#" class="btn btn-danger ver">Ver reseñas</a>
                            </div>
                        </div>
                        </div>
                        `

            const verOpiniones = peliEspecifica.querySelector(".ver");
            const id = data.id;

            const divOculto = document.querySelector(".opiniones");

            verOpiniones.addEventListener('click', (e) => {
                e.preventDefault();

                //toggle
                if (e.target.innerHTML === 'Ver reseñas') {
                    e.target.innerHTML = 'Ocultar reseñas';
                    divOculto.classList.remove('d-none');
                    divOculto.classList.add('d-block');

                    //request de reviews para el movieid e imprimirlas
                    const requestReviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=2424098daf645db283d946a0fd13247c&page=1`;

                    fetch(requestReviews)
                        .then(resp => resp.json())
                        .then(datos => {
                            //console.log(datos.results);
                            //imprimimos solo tres opiniones para que no se haga muy largo
                            if (datos.length > 0) {


                                for (i = 0; i < 3; i++) {
                                    divOculto.innerHTML += `<div class="container-fluid border border-danger rounded-5 m-4 p-3">
                                <p class="fw-bold">Autor</p>
                                <p>${datos.results[i].author}</p>
                                <p class="fw-bold">Reseña</p>
                                <p>${datos.results[i].content}</p>
                                <p class="fw-bold">Fecha</p>
                                <p>${datos.results[i].created_at}</p>
                                </div>`
                                }
                            } else {
                                divOculto.innerHTML = `<div class="container-fluid border border-danger rounded-5 m-4 p-3">
                                <p class="fw-bold">Lo sentimos, aún no hay reseñas para este título</p></div>`
                            }


                        })
                        .catch(error => {
                            console.log(error)
                        })








                } else {
                    e.target.innerHTML = 'Ver reseñas';
                    divOculto.classList.remove('d-block');
                    divOculto.classList.add('d-none');

                }

            });



        })
        .catch(error => {
            console.log(error)
        })



})