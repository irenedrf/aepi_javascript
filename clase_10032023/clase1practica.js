//ejercicio 1

let edad;
let peso;
console.log(edad);
console.log(peso);


//ejercicio 2
edad = 40;
peso = 64;
console.log(edad);
console.log(peso);


//ejercicio 3
let saludo = "Hola Mundo!";
console.log(saludo);

//ejercicio 4
let numeroA = 30;
let numeroB = 45;
let aux;

aux = numeroA;
numeroA = numeroB;
numeroB = aux;

console.log(numeroA); //expected 45
console.log(numeroB); //expected 30

//ejercicio 5
let meGustaElHelado = true;
console.log(meGustaElHelado);

//ejercicio 6
let suma = 5 + 10;
console.log(suma);

let resta = 20 - 5;
console.log(resta);

let numeroUno = 2;
let numeroDos = 14;
let multiplicacion = numeroUno * numeroDos;
console.log(multiplicacion);

let comparacion4 = 2 > 1;
console.log(comparacion4); //expected true

let comparacion5 = 1 > 1;
console.log(comparacion5); //expected false

//ejercicio 7
let edadUsuario = prompt('Dime tu edad');
alert('Gracias por tu respuesta');
console.log('Necesito utilizar variables para procesar tu edad');

//ejercicio 8
const euros = 7;
const dolar = 2;
let conversion = euros * dolar;
console.log(conversion);


//ejercicio 9
const precio = 100;
const iva = 1.21;

let precioFinal = precio * iva;
console.log(precioFinal);

//ejercicio 10
const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza extraña, indómita';

let mensaje = `${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. ${comentario}`;
console.log(mensaje);


//ejercicio 11
let veintitres = 23;
let quince = 15;
let tres = 3;
let dos = 2;
let diez = 10;

let resultado = veintitres + (quince * (tres / dos)) - diez;
console.log(resultado);

resultado -= 5;
console.log(resultado);

resultado--;
console.log(resultado);

//ejercicio 12
let enero = 1;
let febrero = 2;
let marzo = 3;
let abril = 4;
let mayo = 5;
let junio = 6;
let julio = 7;
let agosto = 8;
let septiembre = 9;
let octubre = 10;
let noviembre = 11;
let diciembre = 12;

console.log(enero > diciembre); //expected false
console.log(junio < julio);//expected true








