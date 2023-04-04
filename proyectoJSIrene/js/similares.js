window.addEventListener('load', () => {
    const capturarQueryString = location.search;

    const queryStringObjeto = new URLSearchParams(capturarQueryString);
    const idPelicula = queryStringObjeto.get('id');


    const requestPeliculasSimilares = `https://api.themoviedb.org/3/movie/${idPelicula}/similar?api_key=2424098daf645db283d946a0fd13247c&page=1`

    console.log('la request queda asi: ' + requestPeliculasSimilares);

    fetch(requestPeliculasSimilares)
        .then(resp => resp.json())
        .then(datos => {
            const peliculasPop = document.querySelector(".pelisSimilares");

            // console.log(datos);

            if (datos.results.length === 0) {
                peliculasPop.innerHTML += '<div class="text-center" mb-5><h2>Lo siento, no hay resultados para tu búsqueda</h2><div class="justify-content-center" m-5><img src="assets/vector_interrogante_fallback_img.png"</div></div>'

            } else {

                for (i = 0; i < datos.results.length; i++) {
                    const esParaAdultos = datos.results[i].adult ? 'Cine para adultos' : 'Para todos los públicos';

                    const peliculaPop = document.createElement('div');
                    peliculaPop.classList.add("col-sm");
                    peliculaPop.classList.add("mb-4");

                    const imagen = datos.results[i].poster_path === null ? 'assets/vector_interrogante_fallback_img.png' : `https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}`;


                    peliculaPop.innerHTML += `
                <div class="card tarjeta" style="width: 18rem;">
                    <img src="${imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${datos.results[i].title}</h5>
                        <p class="card-text">${datos.results[i].release_date}</p>
                        <p class="card-text">${esParaAdultos}</p>
                        <p class="card-text">Puntuación media: ${datos.results[i].vote_average}</p>
                        <p class="card-text">${datos.results[i].vote_count} votos</p>
                        <p class="card-text">${datos.results[i].overview}</p>
                        
                    </div>
                </div>
                `




                    peliculasPop.appendChild(peliculaPop);
                }
            }

        })
        .catch(error => {
            console.log(error)
        })




})
