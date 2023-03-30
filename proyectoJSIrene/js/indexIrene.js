//crear endpoints

const requestTopRatedFilms = "https://api.themoviedb.org/3/movie/top_rated?api_key=2424098daf645db283d946a0fd13247c";

const requestPopularFilms = "https://api.themoviedb.org/3/movie/popular?api_key=2424098daf645db283d946a0fd13247c";

const requestTopRatedSeries = "https://api.themoviedb.org/3/tv/top_rated?api_key=2424098daf645db283d946a0fd13247c";

//películas top rated

fetch(requestTopRatedFilms)
    .then(response => response.json())
    .then(datos => {
        //console.log(datos.results)
        const peliculasTop = document.querySelector(".peliculasTopRated");

        /* for (i = 0; i < datos.results.length; i++) {
             peliculasTop.innerHTML += `<div class="col-sm mb-4">
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
             //innerhtml es problemático porque no me va a dejar añadir event listeneeres
             //tengo quee probar a crear un elemeeento en document
 
         }*/


        datos.results.forEach(element => {
            //  console.log(element);
            const card = document.createElement('div');
            card.className = 'col-sm mb-4';
            card.innerHTML = `
            <div class="card tarjeta" style="width: 20rem">
            <img src="https://image.tmdb.org/t/p/w342/${element.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.release_date}</p>
                <p class="card-text">Valoración media: ${element.vote_average}</p>
                <p class="card-text">${element.vote_count} votos</p>
            </div>
        </div>
        `
            const espacioBotones = document.createElement('div');
            espacioBotones.className = 'd-flex justify-content-left pt-2 mb-6';

            const botonDetalle = document.createElement('a');
            const botonFavorito = document.createElement('a');

            botonDetalle.className = 'btn btn-primary btnDetalle';
            botonFavorito.className = 'btn btn-success pl-2 btnFavorito';

            botonDetalle.innerText = 'Detalle';
            botonFavorito.innerText = 'Favorito';

            espacioBotones.appendChild(botonDetalle);
            espacioBotones.appendChild(botonFavorito);

            card.appendChild(espacioBotones);

            peliculasTop.appendChild(card);

            //terminados de añadir todos los elementos dinámicamente, insertamos los event listeners

            //1 problema con solucion 1: mee desapareceen los resultados y solo me mueestra una peli
            /*
                        botonDetalle.addEventListener('click'), () => {
                            console.log('click en detalle');
                        };
            
                        botonFavorito.addEventListener('click'), () => {
                            console.log('click en favoritos');
                        };
            */

            //2 probleema con solucion 2: cada vez que hago un click, se repite multiplees veces (como si clicase 20 veecees en eel mismo boton)

            document.querySelectorAll('.btnDetalle').forEach(el => {
                el.addEventListener('click', (event) => {
                    event.preventDefault();
                    console.log("click en detalle");
                });
            });

            document.querySelectorAll('.btnFavorito').forEach(el => {
                el.addEventListener('click', (event) => {
                    event.preventDefault();
                    console.log("click en favorito");
                });
            });

            //continuar aqui




        });


    })
    .catch(error => {
        console.log(error)
    })



//películas populares
fetch(requestPopularFilms)
    .then(response => response.json())
    .then(datos => {
        //console.log(datos.results)
        const peliculasTop = document.querySelector(".peliculasPopulares");

        for (i = 0; i < datos.results.length; i++) {
            const esParaAdultos = datos.results[i].adult ? 'Cine para adultos' : 'Para todos los públicos';

            peliculasTop.innerHTML += `<div class="col-sm mb-4">
            <div class="card tarjeta" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${datos.results[i].title}</h5>
                <p class="card-text">${datos.results[i].release_date}</p>
                <p class="card-text">${esParaAdultos}</p>
                <a href="#" class="btn btn-primary">Detalle</a>
                <a href="#" class="btn btn-secondary">Añadir a favoritos</a>
            </div>
        </div>
        </div>
        `
        }



    })
    .catch(error => {
        console.log(error)
    })



//series más valoradas
fetch(requestTopRatedSeries)
    .then(response => response.json())
    .then(datos => {
        // console.log(datos.results)
        const peliculasTop = document.querySelector(".seriesTopRated");

        for (i = 0; i < datos.results.length; i++) {
            peliculasTop.innerHTML += `<div class="col-sm mb-4">
                    <div class="card tarjeta" style="width: 18rem;">
                    <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${datos.results[i].name}</h5>
                        <p class="card-text">${datos.results[i].first_air_date}</p>
                        <p class="card-text">Valoración media: ${datos.results[i].vote_average}</p>
                        <p class="card-text">${datos.results[i].vote_count} votos</p>
                        <a href="#" class="btn btn-primary">Detalle</a>
                        <a href="#" class="btn btn-secondary">Añadir a favoritos</a>
                    </div>
                </div>
                </div>
                `
        }



    })
    .catch(error => {
        console.log(error)
    })


