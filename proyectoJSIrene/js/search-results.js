//buscador
const capturarBotonBusqueda = document.querySelector('.busqueda');
const capturarCampoBusqueda = document.querySelector('.elementoABuscar');

const valorUriEncoded = '';


capturarBotonBusqueda.addEventListener('click', (e) => {
    console.log(e);
    console.log(capturarBotonBusqueda);
    console.log(capturarCampoBusqueda.value); //este es el elemento que buscamos (string)
    valorUriEncoded = encodeURI(capturarCampoBusqueda.value);
});



const requestFilmsAndSeries = `https://api.themoviedb.org/3/search/multi?api_key=api_key=2424098daf645db283d946a0fd13247c&page=1`; //como le paso el valor a buscar??

fetch(requestFilmsAndSeries)
    .then(response => response.json())
    .then(datos => {
        console.log(datos)




    })
    .catch(error => {
        console.log(error)
    })

