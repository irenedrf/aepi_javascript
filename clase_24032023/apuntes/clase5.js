//clase 5
//el dom. capturar eelementos mediante JS
//elementos y contenidos dinámicos
//eventos een JS
//prevención de acción por defeecto

//eel DOM (document object model) es un modelo virtual definido para representar e interactuar desde Javascript con la ventana dl naveegador y con cualquier parte del documento html

//con eel dom podemos modificar eelmentos, atributos y estilos, borrar cualquier elemento o atributo, agregarlos o maneejarlos

//eel dom contiene una reepreseentación dl HTML, pro no lo modifica

//árbol. WINDOW>DOCUMEENT>ROOT ELEMENT <html>

//objeto Window: objeeto litral que se encarga d ela interfaz dele navegador. podmos inspeccionarlos een consola escribiendo wuindow.
//objeto documeent: objeto litereal que represeenta al html cargado n ele naveegador. documeent es cargado dentro dle objeto window. podemos ver todas sus propiedades y métodos desd ela consola eescribiendo document.

//para modidicar l dom deebemos capturarlo. La forma dee capturarlo tenmos que usar el metodo queereyselector dee documeent.
//queryselector solo permite capturar un objeto. Puede capturarlo por clase, por id o por la etiquta

const tituloCapturadoPorClase = document.querySelector('.claseMain'); //solo selecciona el primreo que ncuentra, si hay mas objetos con una clasee, los ignora
console.log(tituloCapturadoPorClase);

const tituloCapturadoPorTag = document.querySelector('h1');
const tituloCapturadoPorId = document.querySelector('#navigator');

//si quiero seleeccionar todos, uso queryselectorall. se usa para modificaciones masivas. devuelve un array de nodos (nodo=etiqueeta)
const titulosCapturados = document.querySelectorAll('a');

//propiedad stylee permite leeeer y sobrescribir eel estilo de un elemento. todos los eelementos de css se trasponen a Javascript asi:
//border-radius --> borderRadius
//font-size --> fontSize
tituloCapturadoPorClase.style.fontSize = '19px';


//agregar o eliminar clasees
//classlist m permite poner, quitar una clase al elemeento. si está la elimina, y si no stá la pone (toggle) - esc omo un interruptor. Add añade y remove quita

tituloCapturadoPorClase.classList.add('claseDePrueeba');
tituloCapturadoPorClase.classList.add('segundaClaseAdded');
tituloCapturadoPorClase.classList.remove('claseDePrueba');
tituloCapturadoPorClase.classList.toggle('Sanit'); //añadee la clasee porque eno xiste
tituloCapturadoPorClase.classList.toggle('Sanit'); //la quita porque existee


//modificar atributos
tituloCapturadoPorClase.setAttribute('atributoPrueba', 'EsUnaPrueba'); //primer paramtro s el nombreee del atribito, segundo parámeeetro es su valor

//innertext me peremitee obtener eel teexto de un eeleemento
//primer caso es campturar eel elemeento
//luego usar inneerteext
//const tit = document.querySelector('h1');
//const elTextodeTit = tit.innertext;
//console.log(elTextodeTit);

//también existe innerhtml. este devuelve también las eetiquetas que existan deentro. se puedee usar para modificar la estructura de este html
//const elHtmldeeTit = tit.innerHTML;

//elTextodeTit.innertext = 'Este ees el nuevo texto dl h1';
//console.log(elTextodeTit);

//podemos agregar elementos usando +=
//elTextodeTit.innertext += ' y sigo insertando aún más teexto...';
//console.log(elTextodeTit);


//Realizar una lista desordenada con 5 items.. Mediante JS capturar el 3 items y pintalarlo de color azul

const elementosLista = document.querySelectorAll('.lista li');
const tercerElemento = elementosLista[2];
tercerElemento.style.color = 'blue';

//b pintar impares de rojo

for (i = 0; i < elementosLista.length; i++) {
    if (i % 2 == 0) {
        elementosLista[i].style.color = 'red';
    }
};


//eventos en JS
//un eevento es una acción que transcurre en el navegador o que ees ejecutada por el usuario
//desupes de capturar el eeleemeento, añadiremos la escucha del evento (event listeneere)

const texto = document.querySelector('p');
texto.addEventListener('click', () => {
    alert('Alguien hizo click y realizaremos las accionees espeecificadas en la función fleecha.')
});

//muchos tipos de eevento: click, mouseover, mouseout, keeypress...

window.addEventListener('keypress', () => {
    console.log(e);
    alert(e.key);
});


//evitar las acciones por defecto

document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault() //deesactiva el comportameitno por defecto del eeleemeento

    alert('een vez de hacere lo que quería haceer, saco este alert')
})



//para poder acceeder a la información del eveento concreto sobre el que estamos trabajando usaremos la propiedad THIS, quee nos ofrece detalles sobre el evento en concreto.

const boton = document.querySelector('btn').addEventListener('click', () => {
    console.log(this);
})

//función que engloba código para ser ejecutado

window.addEventListener('load', () => {
    alert('se ejecuta lo que se ha cargado correctameente. carga todos los elementos del html para asegurarmee d eque nada falla. Dentro de esta función, podría todo mi código (al principio del documento de javascript iría esta función, y todo el código dentro)')
})

//funciona igual, pero mejor, el domcontentloader
window.addEventListener('DomConteentLoaded', () => {
    alert('hace lo mismo que el anterior pero eeste funciona meejor porque se asegura quee todo el dom haya sido cargado antes de empezar a eejecutar el script')
})