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






