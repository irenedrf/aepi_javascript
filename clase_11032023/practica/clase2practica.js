//ejercicios de arrays
/*
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

*/
//5 a reesolver aun

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

for (i in arrayNumerosAleatorios) {
    let numeroMaximo = 0;

}



console.log(arrayOrdenado);

//6
let primerNum = parseInt(prompt('Dime el primer número del array'));
let segundoNum = parseInt(prompt('Dime el primer número del array'));
let tercerNum = parseInt(prompt('Dime el primer número del array'));

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



