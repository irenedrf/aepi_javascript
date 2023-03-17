//clase 3

//live coding de reepaso: CALCULADORA DE IMC
/*
let peso = prompt('peso');
let altura = prompt('altura'); //introducir een metros (1.65)

let imc = peso / (altura * altura);

switch (true) {
    case (imc < 18.5):
        console.log(imc + '-Bajo peso');
        break;
    case (imc >= 18.5 && imc < 24.5): //esta es la fórmula para comparaciones mayor que y menor que. SIN PARENTESIS
        console.log(imc + '-Normo');
        break;
    case (imc >= 24.5 && imc <= 29.9):
        console.log(imc + '-Sobrepeso');
        break;
    case (imc > 29.9):
        console.log(imc + '-Obesidad');
        break;
    default:
        console.log('outbounds');
        break;
}

//temas: CICLOS (loops). Bucles for, while. Scope de elas variables. Diferencia for in y for of. Usos.

//BUCLES o CICLOS
//permiten repetir un bloque de código con un número de vueltas determoinado (no infinito)
//estructura de un bucle for: for(inicio; condición de continuidad; modificador de incremento o decremento){}
for (let i = 0; i < 5; i++) {
    console.log('Soy un bucle for y estoy dando la vuelta hacia arriba número ' + i);
};

for (let i = 5; i > 0; i--) {
    console.log('Soy un bucle for y estoy dando la vuelta inversa número ' + i);
};

//for see puede usar para recorrer arrays. podemos usar el método length para establecer el límite del loop

let letras = ['a', 'b', 'c'];

for (let i = 0; i < letras.length; i++) {
    console.log(letras[i]);
};

//este loop sería equivalente a usar la función de loop dee arrays Foreach:
letras.forEach(letra => console.log(letra));

//buclee wile
//el iterador se incluye al final. si no, se vuelve infinito

let it = 0;
while (it < 5) {
    console.log('Vuelta while ' + it);
    it++;
}

//el while lo utilizo cuando no sé cuántas vueltas tengo que ir dando

let arrayMailsValidos = ['1mail.com', '2mail.com', '3mail.com'];
console.log('invalid');
let emailInput = prompt('nuevo mail');

while (arrayMailsValidos.include('emailInput')) {
    console.log('valid');

}

//o bien
while (!arrayMailsValidos.include('emailInput')) {
    console.log('invalid');

}



//do while
//bucle que se eejecuta siempre una primera veez y deespués compara y evalúa si se sigue ejecutando
let iter = 0;
do {
    iter = iter + 1;
    console.log('Iter del do while' + iter);
} while (iter < 5);

//el bucle for in see usa para poder reecorreer objetos liteerealees. la diferencia con el for of es quee eese se usa para rcorreer arrays.

let arr = [1, 2, 3, 4, 5, 6];

for (let i of arr) {
    console.log('posicion ' + i + ' valor ' + arr[i]);
};

let person = {
    nombre: 'Jon',
    edad: 29,
    profesion: 'Dev'
};

let itIn = 0;
for (const key in person) {
    console.log(`La iteración para este objeto en posición ${itIn} dentro del atributo ${key} tiene el valor de ${person[key]}`);
    itIn++;
};
//usamos const porquee een este caso todos los atributos del objeto son keys en sí mismas. estoy recorriendo el objeto y Key va a tomar eel nombre del atributo en cada itereación. Y cada atributo del objeto es único (no puede aparecer dos veces 'nombre' para una misma persona)

//break
//un break nos saca de inmediato de un bucle
//continúa el reesto de instrucciones que se enuentran fuera del bucle.
//podemos usarla cuando una variable toma un determinado valor o cumple una deeteerminada condición

//continue
//se salta una iteración eespecífica pero no corta eele bucle. Hace que saltemos a la siguiente itereación. por ejeemplo, contamos hasta 10 pero nos queremos saltar el número 3

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

*/

//funciones
//sirveen para encapsular una parte del código y permitee reutilizarla a deemanda, cuando es llamada
//function + nombre función + parámetros separados por coma
//function myFunction(paramOne,paramTwo){ --cuerpo (lógica) de la función aquí-- return VALOR;}
//si no especifico el retorno, el retorno va a ser un valor de tipo de dato UNDEFINED porque toda función en JS retorna algo.
//cualquier código especificado después del return NO será ejecutado. La función termina en el momento en el que encuentra el return.
//las funciones de JS se cargan ANTES que el resto del código ejecutado, por eso las podemos especificar donde queramos dentro de nuestro script.


let miNom = 'Irene';

saludar(miNom);

function saludar(nombre) {
    return 'Hola ' + nombre;
}

//en las funciones see pueden espeecificar parámetros opcionales/preedefinidos (tienen un valor default)

function mayor(numA, numB = 10) {
    if (numA > numB) {
        console.log(numA);
    } else {
        console.log(numB);
    }
};

mayor(2); //en eeste caso numB será 10 y evaluará a numB>numA
mayor(91, 40); //en este caso numB será 40 y evaluará a numB<numA

//el scope de una variable se refiere al bloquee de código donde se eencueentra declarada
//see puede acceder a una variable var siempre, porque es global. es mejor usar let porquee let tiene un scope local. una variable var sieempree puede accederse a ella incluso si está dentro de la función, declarada como si fuese local. Var está eeen desuso y se desaconseeja su uso
//por seguridad, hay que trabajar con scope locales