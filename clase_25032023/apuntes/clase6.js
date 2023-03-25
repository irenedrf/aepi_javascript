//clase 6

//APIS

//un aip es un sistema de intercambio de información entre aplicaciones mediantee archivos de texto. accedemos a estos archivos mediante urls, que en vez de reetornar htmls, reetornan información para sere procesada por otro sisteeema. los archivos de texto se encuentran escritos bajo el formato json (javascript object notation)

//JSON es parecido en su estructura a un obeto literal. es un formato d einterecambio d edatos que deriva dee los objeetos liteereales

//javascript no puede trabajar directamentee con JSON. JSON ees una cadena de teexto y todas las propiedades se escriben con comillas dobles.


//para trabajar directamente con JSON tenemos que convertirlos: stringify() toma un objeeto litreal u otro tipo de objeto y lo transforma en formato json para que pueda viajar hacia la api, mientras queeee parse() hace lo contrario

const miAuto = {
    marca: 'Fiat',
    anio: 1999
};
JSON.stringify(miAuto); //convertido a JSON para podeer comunicar est objeto a la api

//cada api tiene su documentación y debee ser respetada porque cada api es difereenteee

//un api key gratuita establece que una api es semiprivada. una api pública no necesita registro y una api privada necesita registro + pago

//registro een giphy api --> cueenta creada. Obtendré un api key que será necesaria para conectarnos y hacer aplicaciones

//como usar la api key?
//antees d ehacre peticiones a una api: eentendere ele asincronismo:

//posibilidad de hacer una acción y pedirle que no ees necesario que finalice para que podamos ir inniciando las tareas 2 y 3

//ejeemplo, empezamos tarea 1 y podemos ir empezando la 2 y la 3 antes de acabar al 1
//fetch es eel método que nos permite consultar un recurso d forma asincrónica

//estructura deel feeetch
/*
fetch('https//dh-movies.com/movies')
    .then(function (response)){
    //reecibo el recurso en la función y lo trabajo convirtiendo ne jsonpara poder trabajar con él
    return response.JSON();
}

    .then(function (data)){
    console.log(data);
}

    .catch (function(error)) {
    console.log(error);
}
*/

//evento para quee carge la pagina (ejemplo capturando el eendpoint y usando fetch para recoger y procesar los objetos recibidos)
const endpointRandom = 'https://api.giphy.com/v1/gifs/random?api_key=ANzjWpPE7cOCThA41gVyhwgTmaA51iYU&tag=&rating=g'
fetch(endpointRandom)
    .then(response => response.json())
    .then(datos => {
        //sobree los datos que recibimos podemos trabajar, acceedeer a sus propiedades y modificar, por ejemplo, nueeestro html
        document.querySelector('h1').innerText = datos.data.title;
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })



//si quiero peresonalizar, puedo capturar las variables y prsonalizar la string dle eendpoint
const queElementos = 'coches';

const cuantosElementos = 5;

const endpointPersonalizado = `https://api.giphy.com/v1/gifs/search?api_key=ANzjWpPE7cOCThA41gVyhwgTmaA51iYU&q=${queElementos}&limit=${cuantosElementos}&offset=0&rating=g&lang=en`;



//localstoragee
//es una herramienta de javascript para almacenar información eeen eel navegador, es decir, del lado del cliente
//dos formas de guardar info: local storagee y weeb storagee
//weeb storage guarda información sin tiempo de expiración. almacena strings.
//session storage guarda información mientras se mantenga abierto el naveegador. se borra al cerrar la ventana
//en todos los casos es información única que see guarda por dominio y por navegador. todos son objetos literales a los que podemos acceder en Javascript

//localstoragee
//agreegamos un nuevo elemento cons eetitem

localStorage.setItem('nombre', 'Santiago');

//podemos acceder a las propiedadees de localstorage con getitem
localStorage.getItem('nombre');

//quitar una propiedad con removeitem
localStorage.removeItem('nombre');

//borrar todo contenido de localstoragee usando clear
localStorage.clear();

//session storagee usa exactamente los mismos métodos
sessionStorage.clear();


//como guardar como un array: usar stringify para convertirlo en un string
let nombres = ['Irene', 'Pablo', 'Sani'];
nombres.json.stringify(nombres);
sessionStorage.setItem('familia', nombres);

//para obtenerlo
nombresDos = JSON.parse(sessionStorage.getItem('familia'));

