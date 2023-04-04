//crear endpoints

const requestTopRatedFilms = "https://api.themoviedb.org/3/movie/top_rated?api_key=2424098daf645db283d946a0fd13247c";

const requestPopularFilms = "https://api.themoviedb.org/3/movie/popular?api_key=2424098daf645db283d946a0fd13247c";

const requestTopRatedSeries = "https://api.themoviedb.org/3/tv/top_rated?api_key=2424098daf645db283d946a0fd13247c";




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

            let recuperamosLocalStorageTop = JSON.parse(localStorage.getItem("favouriteTopFilms"));
            let textoBoton = '';
            console.log('recupero ' + recuperamosLocalStorageTop)

            if (!recuperamosLocalStorageTop) {
                textoBoton = 'Añadir a favoritos';
            } else {
                let encontrado = recuperamosLocalStorageTop.find(film => film == idFilm);
                console.log(encontrado);
                if (encontrado) {
                    textoBoton = 'Quitar de favoritos'
                } else {
                    textoBoton = 'Añadir a favoritos'
                }
            }

            /*
            let encontrado=recuperamosLocalStorageTop.find(idFilm);
            let textoBoton='';
            if(encontrado){
                textoBoton='Quitar de favoritos';
            }else{
                textoBoton='>Añadir a favoritos';
            }

*/

            fav.addEventListener('click', (e) => {
                e.preventDefault();


                //toggle
                if (e.target.innerHTML === 'Añadir a favoritos') {
                    e.target.innerHTML = 'Quitar de Favoritos';

                    console.log('el id del film que guardaremos es ' + idFilm);

                    arrayPelisFavoritas.push(idFilm);


                    let arrayPelisFavoritasToString = JSON.stringify(arrayPelisFavoritas);
                    localStorage.setItem("favouriteTopFilms", arrayPelisFavoritasToString)



                } else {
                    e.target.innerHTML = 'Añadir a favoritos';

                    console.log('el id del film que eliminaremos es ' + idFilm);


                    let filmsRecuperados = JSON.parse(localStorage.getItem("favouriteTopFilms"));


                    arrayPelisFavoritas = filmsRecuperados.filter(film => film !== idFilm);


                    localStorage.removeItem("favouriteTopFilms");

                    let arrayActualizadoToString = JSON.stringify(arrayPelisFavoritas);
                    localStorage.setItem("favouriteTopFilms", arrayActualizadoToString);


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

                    arrayPelisFavoritas.push(idFilm);

                    //Stringify del array y guardarlo en LocalStorage
                    let arrayPelisFavoritasToString = JSON.stringify(arrayPelisFavoritas);
                    localStorage.setItem("favouritePopFilms", arrayPelisFavoritasToString);





                } else {
                    e.target.innerHTML = 'Añadir a favoritos';

                    console.log('el id del film que eliminaremos es ' + idFilm);


                    let filmsRecuperados = JSON.parse(localStorage.getItem("favouritePopFilms"));


                    arrayPelisFavoritas = filmsRecuperados.filter(film => film !== idFilm);


                    localStorage.removeItem("favouritePopFilms");

                    let arrayActualizadoToString = JSON.stringify(arrayPelisFavoritas);
                    localStorage.setItem("favouritePopFilms", arrayActualizadoToString);

                }

            });

            peliculasPop.appendChild(peliculaPop);
        }



    })
    .catch(error => {
        console.log(error)
    })



//series más valoradas


fetch(requestTopRatedSeries)
    .then(response => response.json())
    .then(datos => {

        const peliculasPop = document.querySelector(".seriesTopRated");
        let arraySeriesFavoritas = [];



        for (i = 0; i < datos.results.length; i++) {


            const peliculaPop = document.createElement('div');
            peliculaPop.classList.add("col-sm");
            peliculaPop.classList.add("mb-4");

            //antes de añadir el toggle del event listener hay que saber si ya tenemos la película en favoritos. Recuperamos el localstorage y verificamos. El texto del botón es dinámico según si encontremos o no el ID de la película

            peliculaPop.innerHTML += `
            <div class="card tarjeta" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${datos.results[i].name}</h5>
                        <p class="card-text">${datos.results[i].first_air_date}</p>
                        <p class="card-text">Valoración media: ${datos.results[i].vote_average}</p>
                        <p class="card-text">${datos.results[i].vote_count} votos</p>
                    <a href="detalleSerie.html?id=${datos.results[i].id}" class="btn btn-primary">Detalle</a>
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

                    arraySeriesFavoritas.push(idSerie);


                    let arraySeriesFavoritasToString = JSON.stringify(arraySeriesFavoritas);
                    localStorage.setItem("favouriteSeries", arraySeriesFavoritasToString)



                } else {
                    e.target.innerHTML = 'Añadir a favoritos';

                    console.log('el id de la serie que eliminaremos es ' + idSerie);

                    let seriesRecuperadas = JSON.parse(localStorage.getItem("favouriteSeries"));

                    arraySeriesFavoritas = seriesRecuperadas.filter(serie => serie !== idSerie);

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

