//ejercicios de arrays

//1
let abuelos = ['Maria', 'Jose'];
let padres = [];
let hijos = ['Carmen', 'Antonio', 'Pedro', 'Soledad', 'Pío'];
let nietos = [];

padres.push('Alba');
padres.push('Alberto');

nietos.push('Inés');
nietos.push('Miriam');
nietos.push('Marcos');

console.log(abuelos.length);
console.log(padres.length);
console.log(hijos.length);
console.log(nietos.length);

console.log(abuelos[0]);
console.log(padres[0]);
console.log(hijos[0]);
console.log(nietos[0]);

let arbolGenealogico = [];
arbolGenealogico.push(abuelos);
arbolGenealogico.push(padres);
arbolGenealogico.push(hijos);
arbolGenealogico.push(nietos);

console.log(arbolGenealogico);


//2

let arrayPalabras = [];

let primeraPalabra = prompt('Dime una palabra');
let segundaPalabra = prompt('Dime una segunda palabra');
let terceraPalabra = prompt('Dime una tercera palabra');

arrayPalabras.push(primeraPalabra);
arrayPalabras.push(segundaPalabra);
arrayPalabras.push(terceraPalabra);

console.log('la primera palabra fue ' + arrayPalabras[0]);

//3

let arrayColores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let colorIntroducido = prompt('Dime un color y te lo busco en el array');

let queColor = arrayColores.find(color => color.includes(colorIntroducido));

let encontreElColor = queColor ? true : false;

console.log(encontreElColor);


//4

let arrayCinconumeros = [];

let numero1 = parseInt(prompt('numero1'));
let numero2 = parseInt(prompt('numero2'));
let numero3 = parseInt(prompt('numero3'));
let numero4 = parseInt(prompt('numero4'));
let numero5 = parseInt(prompt('numero5'));

arrayCinconumeros.push(numero1);
arrayCinconumeros.push(numero2);
arrayCinconumeros.push(numero3);
arrayCinconumeros.push(numero4);
arrayCinconumeros.push(numero5);

console.log(arrayCinconumeros);

let sumaNumeros = arrayCinconumeros[0] + arrayCinconumeros[1] + arrayCinconumeros[2] + arrayCinconumeros[3] + arrayCinconumeros[4];

console.log(sumaNumeros)


//5 NO CONSEGUIDO

let arrayNumerosAleatorios = [];

let primerNumero = parseInt(Math.random() * (100 - 0));
let segundoNumero = parseInt(Math.random() * (100 - 0));
let tercerNumero = parseInt(Math.random() * (100 - 0));
let cuartoNumero = parseInt(Math.random() * (100 - 0));
let quintoNumero = parseInt(Math.random() * (100 - 0));

arrayNumerosAleatorios.push(primerNumero);
arrayNumerosAleatorios.push(segundoNumero);
arrayNumerosAleatorios.push(tercerNumero);
arrayNumerosAleatorios.push(cuartoNumero);
arrayNumerosAleatorios.push(quintoNumero);

console.log(arrayNumerosAleatorios);

let arrayOrdenado = [];

let numeroMaximo = 0;
let segundaPosicion = 0;
let terceraPosicion = 0;
let cuartaPosicion = 0;
let quintaPosicion = 0;

for (i in arrayNumerosAleatorios) {

    if (arrayNumerosAleatorios[i] > numeroMaximo) {
        numeroMaximo = arrayNumerosAleatorios[i];
    }




    if (arrayNumerosAleatorios[i] < numeroMaximo && arrayNumerosAleatorios[i] > segundaPosicion) {
        segundaPosicion = arrayNumerosAleatorios[i];
    }




}
console.log(numeroMaximo);
console.log(segundaPosicion);
arrayOrdenado.push(numeroMaximo);
arrayOrdenado.push(segundaPosicion);



console.log(arrayOrdenado);


//6
let primerNum = parseInt(prompt('Dime el primer número del array'));
let segundoNum = parseInt(prompt('Dime el segundo número del array'));
let tercerNum = parseInt(prompt('Dime el tercer número del array'));


let arrayNums = [];
arrayNums.push(primerNum);
arrayNums.push(segundoNum);
arrayNums.push(tercerNum);

let arrayImpares = [];


for (num in arrayNums) {

    if (arrayNums[num] % 2 != 0) {
        arrayImpares.push(arrayNums[num]);
    }
}
console.log(arrayImpares);


//7
let primeraPal = prompt('Dime la primera palabra del array');
let segundaPal = prompt('Dime la segunda palabra del array');
let terceraPal = prompt('Dime la tercrea palabra del array');

let arrayPals = [primeraPal, segundaPal, terceraPal];
console.log(arrayPals);

let arrayPalsConA = arrayPals.filter(pal => pal.includes('a'));
console.log(arrayPalsConA);


//8
let arrayCincoNumsUno = [1, 2, 3, 4, 5];
let arrayCincoNumsDos = [6, 7, 8, 9, 10];
let arrayCombinado = [...arrayCincoNumsUno, ...arrayCincoNumsDos]
console.log(arrayCombinado);

//9 NO CONSEGUIDO
let palabraUsuarioUno = prompt('Dime una palabra y la ordenaré alfabéticamente');
let palabraUsuarioDos = prompt('Dime otra palabra y la ordenaré alfabéticamente');
let palabraUsuarioTres = prompt('Dime otra palabra y la ordenaré alfabéticamente');
let palabraUsuarioCuatro = prompt('Dime otra palabra y la ordenaré alfabéticamente');

let arrayPalabrasDesordenadas = [palabraUsuarioUno, palabraUsuarioDos, palabraUsuarioTres, palabraUsuarioCuatro];

console.log(arrayPalabrasDesordenadas);

for (i in arrayPalabrasDesordenadas) {
    let charCode = arrayPalabrasDesordenadas[i];

}




//ejercicios de JavaScript básico que faltan: del 5 al 10


//5

let n1 = parseInt(prompt('número1 comparacion'));
let n2 = parseInt(prompt('número2 comparacion'));
let n3 = parseInt(prompt('número3 comparacion'));


if (n1 > n2) {
    if (n2 > n3) {
        console.log(n1 + n2);
    } else if (n2 < n3) {
        console.log(n1 + n3);
    }

} else {
    if (n1 < n3) {
        console.log(n2 + n3);
    } else {
        console.log(n2 + n1);
    }
}



//6
let n1promedio = parseInt(prompt('número1 promedio'));
let n2promedio = parseInt(prompt('número2 promedio'));
let n3promedio = parseInt(prompt('número3 promedio'));

let promedioNumeros = (n1promedio + n2promedio + n3promedio) / 3;

let resultado = promedioNumeros > 5 ? true : false;
console.log(resultado);



//7

let aNacimiento = parseInt(prompt('Dime año de nacimiento y digo tu edad'));

let añoActual = 2023;

let edadCalculada = añoActual - aNacimiento;
alert('tienes ' + edadCalculada + ' años');


//8
let edadUsu = parseInt(prompt('Dime edad'));
let generoUsu = confirm('eres mujer?');

if (edadUsu >= 18) {
    if (generoUsu == true) {
        let descuentoAplicado = 15;
        alert('Felicidades, tienes un descuento del ' + descuentoAplicado + '%');
    } else {
        let descuentoAplicado = 10;
        alert('Felicidades, tienes un descuento del ' + descuentoAplicado + '%');
    }
} else {
    alert('Qué pena, no te corrsponde descuento');
}

//9
let edadUsu2 = parseInt(prompt('Dime edad'));
let nombreUsu = prompt('Dime nombre');

if (edadUsu2 >= 18) {

    alert('Eres mayor de edad');
} else {

    alert('No eres mayor de edad');
}

if (nombreUsu.length > 5) {
    alert('Tu nombree tiene más de 5 letras');
} else {
    alert('Tu nombre tiene menos de 5 letras');
}


//10

let nota = parseInt(prompt('Dime una nota del 0 al 10'));

console.log(nota);

if (nota >= 0 && nota <= 10) {
    if (nota >= 0 && nota <= 2) {
        alert('Insuficiente');
    } else if (nota >= 3 && nota <= 6) {
        alert('Suficiente');
    } else if (nota >= 7 && nota <= 9) {
        alert('Bien');
    } else {
        alert('Excelente');
    }



} else {
    alert('Fuera de rango')
}
