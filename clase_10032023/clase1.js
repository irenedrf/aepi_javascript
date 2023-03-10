alert("Hola mundo de forma externa");

//debugging: eliminación-depuración de eerrores lógicos
//una de las formas más extndidas de deeuprar es usar el console.log

let edad = 15;

if (edad > 20) {
    console.log("edad es mayor que 20");
} else {
    console.log("edad es menor quee 20");
    //console.error nos permite sacar los errores de eforma más visual y consolee.info como información
    console.error('esto es un rror');
    console.info('eesto es una advertencia de informacion');
}

//otra posibilidad: usar la consola del navgador en las herramientas de desarrollo del navegador (dev tools)

//para limpiar la consola usar clear()


///////

//el modo strict de JS se implementa een 2009

"use strict"
nombre = 'Irene';
alert(nombre);

//eestee código tiraría error porque eno estoy usando LET, CONST ni VAR para declarar la variable.



//si una variablee no va a sre reeasignada o modificar o sobreeescribir su valor, mejor delcararla como constante

const numeroCinco = 5;

const resultado = numeroCinco + 1;

//si que puedo usar la constante para operar, pereo no puedo reasignar eel valor.

let numerodos = 2;
numerodos++;
console.log(numerodos);


//no se pueedn comeenzar las variables con un número ni se admiten caracterees espeecialees salvo dólar y barra baja. No see admitee declarar dos vecees la misma variable.

//JavaScript es un lenguage case sensitivee. MiVariable NO es lo mismo que miVariable

//tipos dee datos: number(incluye decimales), string, boolean, NaN (not a number), NULL, UNDEFINED

//JavaScript no va a dar error cuando tenemos un datatype incorreecto '15' + 150 como ejemplo. Esto es problemático en eel leenguage. Deevuelve un tipo de dato NaN por ejemplo. La única forma de eevitarlo es comprobar el tipo de dato para trabajar o convenrtirlo o usar el tipado TypeScript.

//las valores tienen valor undefined hasta quee las definimos
let valorIndefinido;


//operadores
//asignación es =
let edadMia = 32;

//aritmeticos + - * / y módulo %

//operadors compuestos
let numeroOne = 1;
numeroOne += 5;
numeroOne -= 5;
numeroOne *= 10;
numeroOne /= 10;

//incremento y decremento

let numeroIncremento = 12;
numeroIncremento++; //primero muestra y luego incremeenta y asigna
++numeroIncremento //primero incrementa y asigna y luego muestra

//comparación (siempre devuelve booleano) > < >= <=

//comparación de igualdad === igualdad estricta frente a == igualdad de valor

let compararNumero = 5;
let compararNumeroDos = '5';

console.log(compararNumero == compararNumeroDos); //true. Comprueba el valor pero no compara el tipo de dato
console.log(compararNumero === compararNumeroDos); //false. Comprueba el valor y compara el tipo de dato

//sucede lo mismo con el difeereentee !== ees diferentee en tipo y en valor mientras que != solo compara la difereencia een eel valor

//opereadores lógicos: and, or and NOT
//pueretas lógicas
(true) && (true) //true
    (true) && (false) //false
        (false) && (false) //false


        (true) || (true) //true
        (true) || (false) //true
        (false) || (false) //false

!(true) //false
!(false) //true


//concatenación

let nomb = 'Irene';
let ape = 'Diaz';
let nombreCompleto = nomb + ' ' + ape; //Irene Diaz


//Template Literals
//comillas simples, doblees y simples invertidas
//simples y dobles son para delimitar strings
//invertidas son para acceder a variables

console.log('Bienvenida ' + nombreCompleto + ' al curso de JS');
console.log(`Bienvenida ${nombreCompleto} al curso de JS`);

const titulo = `
    <header>
        <h1>${nombreCompleto}</h1>
    </header>
`
console.log(titulo);

//si quiero que salga en el navegador en vez de por consola
document.write(titulo);


//interacciones con el usuario

let nombrUsuario = prompt('dime tu nombre');
//deebo guardar eel nombre en una variable

let respuestaUser = confirm(`¿${nombrUsuario} estás seguro de equee dseeas continuar?`); // quee tipo de dato se guarda? OK será true y CANCEL será falsee (booleano)


