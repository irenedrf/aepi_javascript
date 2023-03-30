//buscador
//Capturar el input del buscador

const capturarBotonBusqueda = document.querySelector('.busqueda');


capturarBotonBusqueda.addEventListener('click', (e) => {
    const capturarCampoBusqueda = document.querySelector('.elementoABuscar');
    stringABuscar = capturarCampoBusqueda.value;
    console.log('buscaremos ' + stringABuscar);
    buscarPeliculaOSerie(stringABuscar);
});




