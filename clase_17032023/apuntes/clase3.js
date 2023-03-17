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

*/

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
    console.log(`La iteración para el atributo en posición ${itIn} dentro del objeto ${key} tiene el valor de ${person[key]}`);
    itIn++;
};
//usamos const porquee een este caso todos los elementos son keys en sí mismo. estoy recorriendo el objeto y Key va a tomar eel atributo en cada itereación. Y cada atributo del objeto es único (no puede aparecer dos veces 'nombre' para una misma persona)