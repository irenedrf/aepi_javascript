window.addEventListener('load', () => {


    const capturarQueryString = location.search;

    const queryStringObjeto = new URLSearchParams(capturarQueryString);
    const idSerie = queryStringObjeto.get('id');


    const requestSerieEspecifica = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=2424098daf645db283d946a0fd13247c`

    console.log('la request queda asi: ' + requestSerieEspecifica);



    fetch(requestSerieEspecifica)
        .then(resp => resp.json())
        .then(data => {


            const serieEspecifica = document.querySelector(".detallePelicula");
            const listaGeneros = [];
            data.genres.forEach(genero => {
                listaGeneros.push(genero.name)
            });

            const imagen = data.poster_path === null ? 'assets/vector_interrogante_fallback_img.png' : `https://image.tmdb.org/t/p/w342/${data.poster_path}`;
            const esParaAdultos = data.adult ? 'Serie para adultos' : 'Para todos los públicos';

            serieEspecifica.innerHTML += `<div class="row d-flex justify-content-center">
                            <div class="card" style="width: 20rem;">
                            <img src="${imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.name}</h5>
                                <p class="card-text">Categorías: ${listaGeneros}</p>
                                <p class="card-text">Temporadas: ${data.number_of_seasons}</p>
                                <p class="card-text">Número de episodios: ${data.number_of_episodes}</p>
                                <p class="card-text">${esParaAdultos}</p>
                                <p class="card-text">Puntuación media: ${data.vote_average}</p>
                                <p class="card-text">${data.vote_count} votos</p>
                                <p class="card-text">${data.overview}</p>
                                <a href="${data.homepage}" target="_blank" class="btn btn-danger ver">Web oficial</a>
                            </div>
                        </div>
                        </div>
                        `



        })
        .catch(error => {
            console.log(error)
        })



})