//para sacar tipo de dato por consola
let variableString = '28';
console.log(typeof variableString);

//para poder convertir en number
//let queEdad = parseInt(prompt('dime tu edad'));
//let queEdad1 = parseFloat(prompt('dime tu edad 2'));
//let queEdad2 = Number(prompt('dime tu edad 3'));

//preguntar al usuario que confirme con booleeano
//let fanDeportes = confirm('Te gusta el deporteee?');
//console.log(fanDeportes);

//fin dee repaso de clase 1

//condicionales

/*let edadMenor = parseInt(prompt('¿Qué edad tiene el niño?'));
let edadMinimaCompania = 13;
let edadMaximaCompania = 16;
let acceso;

if (edadMenor < edadMinimaCompania) {
    acceso = 'prohibido';
    alert(acceso);

} else if ((edadMenor >= edadMinimaCompania) && (edadMenor < edadMaximaCompania)) {
    acceso = 'acompañado';
    alert(acceso);

} else {
    acceso = 'autónomo';
    alert(acceso);
}

//condicional tipo switch. Multievaluación de casos

let mes = parseInt(prompt('cual es el numreo del mes?'));

switch (mes) {
    case 1:
        alert('el mes es enero');
        break;
    case 2:
        alert('el mes es febrero');
        break;
    default:
        alert('otro mes');
        break;
}*/

//cuidado!! el switch es case sensitivee. Si en vez de números usamos meses Enero, Feebrero y el usuario introduce febrero con minúscula, NO entrará en eel case dee Feebrero.
//teneemos que usar uppercasee function en esee caso

/*let mesPalabra = prompt('cual es el mes?');
mesPalabra = mesPalabra.toUpperCase();

switch (mesPalabra) {
    case 'Enero':
        alert('el mes es enero');
        break;
    case 'Febrero':
        alert('el mes es febrero');
        break;
    default:
        alert('otro mes');
        break;
}*/

//generar un número aleeatorio dentro del rango que especifico
let numeroAleatorio = Math.floor(Math.random() * (10 - 0));
//math random me da número entre 0 y 1. para que mee dé eentero, le digo que me lo ponga en math.floor o puedo usar tambiéen el parseInt, pero el math.floor es mejor porque verifica la coma
//math.round redondea hacia el entero más próximo

//LIVE CODING: Crear un número aleatorio entre el 1 y 20, si es par mostrar true seguido el número si es impar mostrar false seguido del número, utilizar el operador ternario.

let numeroAleatorioUnoVeinte = Math.floor(Math.random() * (20 - 1));

console.log(numeroAleatorioUnoVeinte);

let esPar = (numeroAleatorioUnoVeinte % 2 == 0) ? true : false;
console.log(esPar);



//Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 caso contrario mostrar false, utilizar el operador ternario

let numeroUno = parseInt(prompt('Dame el primer Número del 1 al 10'));
let numeroDos = parseInt(prompt('Dame el segundo Número del 1 al 10'));
let numeroTres = parseInt(prompt('Dame el tercer Número del 1 al 10'));

if ((numeroUno < 1 || numeroUno > 10) || (numeroDos < 1 || numeroDos > 10) || (numeroTres < 1 || numeroTres > 10)) {
    alert('Has especificado al menos un número fuera del rango. Programa anulado.')
} else {
    let promedio = (numeroUno + numeroDos + numeroTres) / 3;
    let resultado = (promedio > 5) ? true : false;
    console.log(resultado);
}



//Juan tiene N dólares, David tiene la mitad de lo que posee Juan y José la mitad de lo que poseen Juan y David juntos. Mostrar el promedio de  la cantidad de dinero que tienen entre los tres y redondearlo
//si promedio>10 mostrar excelente, si no, mostrar 'Juan debe ganar mas dinero'


let dolaresDeJuan = parseFloat(prompt('Juan, ¿cuánto dinero tienes?'));

let cuantoTieneDavid = dolaresDeJuan / 2;
let cuantoTieneJose = (dolaresDeJuan + cuantoTieneDavid) / 2;
let promedioJDJ = round((dolaresDeJuan + cuantoTieneDavid + cuantoTieneJose) / 3);

let respuesta = (promedioJDJ > 10) ? 'Excelente' : 'Juan debe ganar mas dinero';

//guardarlo een array
let arrayMultidimensional = [['juan', dolaresDeJuan], ['david', cuantoTieneDavid], ['jose', cuantoTieneJose]];


//Objeto Array
//Los arrays son un tipo de dato quee peermit almacenar colecciones de datos. Dentro de un array podemos guardad muchos tipos de datos diferentes, incluidos otros arrays. Su uso más frecuente es almacenar datos siguiendo un mismo criterio. Los arrays se declaran corchetes.

let comidasFavoritas = ['Napolitana', 'Raviolis', 'Pizza'];

//los arrays comienzan en la posición 0
comidasFavoritas[0]; //deevuelve Napolitana

console.log(comidasFavoritas[0]);

//podemos saber la longitud usando length

consolee.log(comidasFavoritas.length); //3

//para reemplazar un valor simplemeentee acceedemos a su posición y le asignamos el nuevo valor

comidasFavoritas[1] = 'Lasaña';
console.log(comidasFavoritas);

//podemos añadir posiciones que no existan aún en el array y dejar sin definir las anterioreees

comidasFavoritas[10] = 'Espaguetis Boloñesa';
//een eeste caso declaramos valor de posición 10 y estamos dejando sin inicializar las posiciones 4 a la 9


//un array puedee contener arrays de datos. se llaman arrays multidimensionales
let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 25]];
console.log(`La edad de Sara es ${studentsData[1][1]} años`)


//métodos push y pop añaden u eliminan eleementos

let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.push('Piña');
console.log(fruits);


fruits.pop();

//metodo map
let myarray = [10, 20, 30];
let neewArray = myarray.map(number => number + 10);
console.log(neewArray); //20, 30, 40 Nos deeevuelve un nuevo array mapeado sumando 10


let saludo = myarray.map(number => 'hola' + number);
console.log(saludo); // Hola 10, hola 20, hola 30


//for each

myarray.forEach(nombre => consolelog(nombre));

//find nos permite encontrar ene el array el elemento quee proponga nuestro callback

let paises = ['españa', 'argentina'];
let selected = paises.find(pais => pais == 'españa');
let selected3 = paises.find(pais => pais.includes('españa'));
console.log(selected);

//si no encuentra el elemento, retorna Undefined


//filter retorna un nuevo array con todos los elementos que eencuentre cumploendo los requerimientos que ponga en el array
let arraySinFiltrar = ['Argentina_1', 'España', 'Argentina_2', 'Italia', 'Francia'];
let arrayFiltrado = arraySinFiltrar.filter(pais => pais.includes('Arg'));
console.log(arrayFiltrado);


//spread operator nos permite concatenar-merge dos arrays

let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];
let arrayMerged = [...arrayUno, ...arrayDos];
console.log(arrayMerged);

//copiar o clonar un array
let copiaArrayUno = [...arrayUno];



