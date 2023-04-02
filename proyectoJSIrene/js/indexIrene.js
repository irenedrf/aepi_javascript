//crear endpoints

const requestTopRatedFilms = "https://api.themoviedb.org/3/movie/top_rated?api_key=2424098daf645db283d946a0fd13247c";

const requestPopularFilms = "https://api.themoviedb.org/3/movie/popular?api_key=2424098daf645db283d946a0fd13247c";

const requestTopRatedSeries = "https://api.themoviedb.org/3/tv/top_rated?api_key=2424098daf645db283d946a0fd13247c";

//A RESOLVER ENTRE PELIS TOP RATED Y PELIS POPULARES: CUANDO AÑADO FAVORITOS DE UNA DE LAS DOS CATEGORIAS (TOP RATED) Y LUEGO AÑADO UNA DE POPULARES, LA DE POPULARES SOBRESCRIBE TOP RATED Y VICEVERSA. solucionar este comportamiento

//películas top rated
fetch(requestTopRatedFilms)
    .then(response => response.json())
    .then(datos => {

        const peliculasPop = document.querySelector(".peliculasTopRated");
        let arrayPelisFavoritas = [];



        for (i = 0; i < datos.results.length; i++) {
            const esParaAdultos = datos.results[i].adult ? 'Cine para adultos' : 'Para todos los públicos';

            const peliculaPop = document.createElement('div');
            peliculaPop.classList.add("col-sm");
            peliculaPop.classList.add("mb-4");

            peliculaPop.innerHTML += `
            <div class="card tarjeta" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${datos.results[i].title}</h5>
                    <p class="card-text">${datos.results[i].release_date}</p>
                    <p class="card-text">${esParaAdultos}</p>
                    <a href="detalle.html?id=${datos.results[i].id}" class="btn btn-primary">Detalle</a>
                    <a href="#" class="btn btn-success claseFavorito">Añadir a favoritos</a>
                </div>
            </div>
            `


            const fav = peliculaPop.querySelector('.claseFavorito');

            const idFilm = datos.results[i].id;



            fav.addEventListener('click', (e) => {
                e.preventDefault();


                //toggle
                if (e.target.innerHTML === 'Añadir a favoritos') {
                    e.target.innerHTML = 'Quitar de Favoritos';

                    console.log('el id del film que guardaremos es ' + idFilm);

                    //guardamos el ID de cada film en el array
                    arrayPelisFavoritas.push(idFilm);



                    //Stringify del array y guardarlo en LocalStorage
                    let arrayPelisFavoritasToString = JSON.stringify(arrayPelisFavoritas);
                    localStorage.setItem("favouriteFilms", arrayPelisFavoritasToString)





                } else {
                    e.target.innerHTML = 'Añadir a favoritos';

                    console.log('el id del film que eliminaremos es ' + idFilm);


                    //paso 1: recuperar el array que tenemos guardado en localstorage. Convertirlo a JSON para trabajarlo

                    let filmsRecuperados = JSON.parse(localStorage.getItem("favouriteFilms"));


                    //paso 2: borrar el id del array

                    arrayPelisFavoritas = filmsRecuperados.filter(film => film !== idFilm);



                    //paso 3: sustituir el localstorage por este nuevo array. Stringify del array antes de guardarlo
                    localStorage.removeItem("favouriteFilms");

                    let arrayActualizadoToString = JSON.stringify(arrayPelisFavoritas);
                    localStorage.setItem("favouriteFilms", arrayActualizadoToString);



                }





            });

            peliculasPop.appendChild(peliculaPop);
        }




    })
    .catch(error => {
        console.log(error)
    })






//películas populares
fetch(requestPopularFilms)
    .then(response => response.json())
    .then(datos => {

        const peliculasPop = document.querySelector(".peliculasPopulares");
        let arrayPelisFavoritas = [];



        for (i = 0; i < datos.results.length; i++) {
            const esParaAdultos = datos.results[i].adult ? 'Cine para adultos' : 'Para todos los públicos';

            const peliculaPop = document.createElement('div');
            peliculaPop.classList.add("col-sm");
            peliculaPop.classList.add("mb-4");

            peliculaPop.innerHTML += `
            <div class="card tarjeta" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${datos.results[i].title}</h5>
                    <p class="card-text">${datos.results[i].release_date}</p>
                    <p class="card-text">${esParaAdultos}</p>
                    <a href="detalle.html?id=${datos.results[i].id}" class="btn btn-primary">Detalle</a>
                    <a href="#" class="btn btn-success claseFavorito">Añadir a favoritos</a>
                </div>
            </div>
            `


            const fav = peliculaPop.querySelector('.claseFavorito');

            const idFilm = datos.results[i].id;



            fav.addEventListener('click', (e) => {
                e.preventDefault();


                //toggle
                if (e.target.innerHTML === 'Añadir a favoritos') {
                    e.target.innerHTML = 'Quitar de Favoritos';

                    console.log('el id del film que guardaremos es ' + idFilm);

                    //guardamos el ID de cada film en el array
                    arrayPelisFavoritas.push(idFilm);



                    //Stringify del array y guardarlo en LocalStorage
                    let arrayPelisFavoritasToString = JSON.stringify(arrayPelisFavoritas);
                    localStorage.setItem("favouriteFilms", arrayPelisFavoritasToString)





                } else {
                    e.target.innerHTML = 'Añadir a favoritos';

                    console.log('el id del film que eliminaremos es ' + idFilm);


                    //paso 1: recuperar el array que tenemos guardado en localstorage. Convertirlo a JSON para trabajarlo

                    let filmsRecuperados = JSON.parse(localStorage.getItem("favouriteFilms"));


                    //paso 2: borrar el id del array

                    arrayPelisFavoritas = filmsRecuperados.filter(film => film !== idFilm);



                    //paso 3: sustituir el localstorage por este nuevo array. Stringify del array antes de guardarlo
                    localStorage.removeItem("favouriteFilms");

                    let arrayActualizadoToString = JSON.stringify(arrayPelisFavoritas);
                    localStorage.setItem("favouriteFilms", arrayActualizadoToString);



                }





            });

            peliculasPop.appendChild(peliculaPop);
        }




    })
    .catch(error => {
        console.log(error)
    })











//series más valoradas
//A RESOLVER: 1) BOTON FAVORITOS NO FUNCIONA 2) BOTON DETALLE ME LLEVA A UNA PELI EN VEZ DE A ESTA SERIE


fetch(requestTopRatedSeries)
    .then(response => response.json())
    .then(datos => {

        const peliculasPop = document.querySelector(".seriesTopRated");
        let arraySeriesFavoritas = [];



        for (i = 0; i < datos.results.length; i++) {


            const peliculaPop = document.createElement('div');
            peliculaPop.classList.add("col-sm");
            peliculaPop.classList.add("mb-4");

            peliculaPop.innerHTML += `
            <div class="card tarjeta" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${datos.results[i].name}</h5>
                        <p class="card-text">${datos.results[i].first_air_date}</p>
                        <p class="card-text">Valoración media: ${datos.results[i].vote_average}</p>
                        <p class="card-text">${datos.results[i].vote_count} votos</p>
                    <a href="detalle.html?id=${datos.results[i].id}" class="btn btn-primary">Detalle</a>
                    <a href="#" class="btn btn-success claseFavorito">Añadir a favoritos</a>
                </div>
            </div>
            `


            const fav = peliculaPop.querySelector('.claseFavorito');

            const idSerie = datos.results[i].id;



            fav.addEventListener('click', (e) => {
                e.preventDefault();


                //toggle
                if (e.target.innerHTML === 'Añadir a favoritos') {
                    e.target.innerHTML = 'Quitar de Favoritos';

                    console.log('el id dela serie que guardaremos es ' + idSerie);

                    //guardamos el ID de cada serie en el array
                    arraySeriesFavoritas.push(idSerie);



                    //Stringify del array y guardarlo en LocalStorage
                    let arraySeriesFavoritasToString = JSON.stringify(arraySeriesFavoritas);
                    localStorage.setItem("favouriteSeries", arraySeriesFavoritasToString)





                } else {
                    e.target.innerHTML = 'Añadir a favoritos';

                    console.log('el id de la serie que eliminaremos es ' + idSerie);


                    //paso 1: recuperar el array que tenemos guardado en localstorage. Convertirlo a JSON para trabajarlo

                    let seriesRecuperadas = JSON.parse(localStorage.getItem("favouriteSeries"));


                    //paso 2: borrar el id del array

                    arraySeriesFavoritas = seriesRecuperadas.filter(serie => serie !== idSerie);



                    //paso 3: sustituir el localstorage por este nuevo array. Stringify del array antes de guardarlo
                    localStorage.removeItem("favouriteSeries");

                    let arrayActualizadoToString = JSON.stringify(arraySeriesFavoritas);
                    localStorage.setItem("favouriteSeries", arrayActualizadoToString);



                }





            });

            peliculasPop.appendChild(peliculaPop);
        }




    })
    .catch(error => {
        console.log(error)
    })


