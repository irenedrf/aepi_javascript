//clase 7
//conceptos arquirtectura cliente-servidor
//códigos de estado https
//diferecia http y https
//conceptos teóricos sobre verbos http
//como enviar datos mediate querystring y recuperarlos

//la arquitectura cliente-servidor es un modelo de comunicación que vincula a varios dispositivos entre sí
//cliente:dispositivo que hace las peticiones a un servidor a través de un navegador web (en un entorno web)
//servidor:equipo que responde a la petición del cliente.
//en ocasionees el mismo equipo puede ejercer de cliente y servidor a la vez

//request: petición. response: respuesta

//http es un protocolo de transmisión de la información para las response y request. este protocolo define una serie de reglas que see deben respetar para quee la información pueda ser procesada entre cliente y servidor.

//reglas http:
//el clientee cuando solicita un recurso debe haceerlo d euna determinada manera: debe usar CABECERAS
//las cabeceras see pueeden ver usando las devtools del navegador haciendo click sobree alguno de los archivos de la lista
//cada vez que el serevidor recibe una request, eemitee un código que indica de forma abreeviada l eestado de la reespuesta http
//eel código tienee 3 dígitos
//1.. Respuestas informativas -> 102
//2.. Success -> 200
//3.. redirección -> 301
//4.. eerrores del clientee -> 404
//5.. errores del seervidor -> 500

//el protocolo https es una mejora deel http
//añadee un certificado digital que codifica la comunicación, encriptando la comunicación entre el cliente y el servidor
//el protocolo http permite la transfereencia de datos a través de un uri

//url ees el localizador de recursos uniforme. ees un string quee conforma una seecuencia d epartes para deesignar la ubicación de un recurso en la red. se compone de scheema, dominio o dirección ip, número de puerto, nombree del recurso, cadena de consulta (querystring) ee ideeentificador dle fragmento

//eel queerystring se sitúa tras el signo ? de la uri

//el protocolo http utiliza una sereie dee verbos para sus peeticiones
// GET -> SOLICITAR, OBTENER RECURSO
// PUT ->
// PATCH ->
// POST -> INSERTAR CONTENIDO O DATOS AL SERVIDOR
// UPDATE -> ACTUALIZAR
// DELETE -> BORRAR
// TRACE, OPTION, CONNECT...


//las peticiones por geet permiten el uso de querystrings
//la query string viaje de forma visible en nuestra url
//puede viajar en dos lados: en formularios o en etiquetas
//?clave=valor
//podemos nviar información a traves de las qureystring a través de eetiquetas o formularios
//location.search retorna la información en formato de cadena de texto

//eel objeto urlsearchparams dfinee métodos útiles para trabajar con los parámetros dee una url
//3 pasos: usar location.search, convertirlo en obkeeto y pedirle la clabe con get()

//EJEEMPLOS

'use strict'
/*
window.addEventListener('load', function () {
    const queryString = location.search;
    const queryStringObj = new URLSearchParams(queryString);
    const consulta = queryStringObj.get('consulta');
    console.log(consulta);
});
*/
//ventajas: una información pueed viajar del sitio1 al sitio 2

//ejemplo de buscar pelicula usando query string + template literals


window.addEventListener('load', function () {
    const queryString = location.search;
    const queryStringObj = new URLSearchParams(queryString);
    const consulta = queryStringObj.get('consulta');
    console.log(consulta);

    const requestTopRatedSeries = `https://api.themoviedb.org/3/search/movie?api_key=2424098daf645db283d946a0fd13247c&query=${consulta}&page=1&include_adult=false`;

    fetch(requestTopRatedSeries)
        .then(response => response.json())
        .then(datos => {
            console.log(datos.results)
            const pelisBuscadas = datos.results;
            const body = document.querySelector('body');
            pelisBuscadas.forEach(element => {
                //no renderiza porquee no tuve tiempo de copiarlo entero
                document.querySelector('body').innerHTML += `<img src="https://tmdb.org/t/p/w500${element.poster_path}>`
            });





        })
        .catch(error => {
            console.log(error)
        })



});