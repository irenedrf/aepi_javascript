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

        for (i = 0; i < datos.results.length; i++) {
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
        }



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


