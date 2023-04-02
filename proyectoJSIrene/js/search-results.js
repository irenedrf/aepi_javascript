window.addEventListener('load', () => {
    const queryStringBuscador = location.search;
    const queryStringBuscadorObj = new URLSearchParams(queryStringBuscador);
    const resultado = queryStringBuscadorObj.get('buscador');

    console.log(resultado);

    //fetch para reecuperar las películas que tengan este criterio de búsqueda por nombre
    const buscarPeliculas = `https://api.themoviedb.org/3/search/multi?api_key=2424098daf645db283d946a0fd13247c&query=${resultado}&page=1`;

    console.log('la request queda asi: ' + buscarPeliculas);



    fetch(buscarPeliculas)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.results);
            //paso 3: imprimir
            const peliEspecifica = document.querySelector(".resultadosBusqueda");

            data.results.forEach(result => {
                const esParaAdultos = result.adult ? 'Cine para adultos' : 'Para todos los públicos';

                peliEspecifica.innerHTML += `<div class="col-sm mb-4">
                            <div class="card tarjeta" style="width: 18rem;">
                            <img src="https://image.tmdb.org/t/p/w342/${result.poster_path}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${result.title}</h5>
                                <p class="card-text">${result.release_date}</p>
                                <p class="card-text">${esParaAdultos}</p>
                               
                               
                            </div>
                        </div>
                        </div>
                        `

            });






        })
        .catch(error => {
            console.log(error)
        })



});

