//eejrecicios dee arrays

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