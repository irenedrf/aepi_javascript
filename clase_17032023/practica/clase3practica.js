//práctica clase 3 parte 1

//1

//a
for (let i = 0; i < 5; i++) {
    console.log('Practicando con el bucle for');
};

//b
for (let i = 0; i < 10; i++) {
    console.log(`La variable i tiene valor de: ${i}`);
};

//c
for (let i = 0; i < 20; i += 2) {
    console.log(i);

};


//d
for (let i = 0; i < 250; i += 5) {
    console.log(i);
};


//e
for (let i = 100; i > 0; i--) {
    console.log(i);
};


//2
//a
let base = 6;
let resultados = [];

//b, c, d
for (let i = 0; i < 10; i++) {
    resultados.push(base * i);
    console.log(resultados[i]);
}

//e
base = 4;
let resultados2 = [];
for (let i = 0; i < 10; i++) {
    resultados2.push(base * i);
    console.log(resultados2[i]);
}

base = 2;
let resultados3 = [];
for (let i = 0; i < 10; i++) {
    resultados3.push(base * i);
    console.log(resultados3[i]);
}

//3
//a
let ganancias = [];

//b
ganancias = [-2, 56, 7, 14, -5, 7, -3, 76, -2, 5];

//c
let suma = 0;

for (let i = 0; i < ganancias.length; i++) {
    suma += ganancias[i];
}
console.log(suma);



//4
//a

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult[i]);
};

//b
for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(i + ' ' + healingIsDifficult[i]);
};


//5
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];
//a, b

for (let i of got) {
    console.log(`Hola ${i.nombre} ${i.apellido}, criatura viajera!`);
    console.log(`Soy ${i.nombre} ${i.apellido} de la ciudad ${i.ciudad}`);

};




//6 NO CONSEGUIDO
let myArray = [200, 40, 400, 40, 40];







//7
let dimeHastaDondeCuento = parseInt(prompt('Hasta qué número qiueres que cuente'));
let cadena = [];
for (i = 0; i <= dimeHastaDondeCuento; i++) {
    cadena.push(i);
}
console.log(cadena);
alert(cadena.join(','));

//8
let dimeDesdeDondeCuento = parseInt(prompt('Hasta qué número qiueres que cuente hacia atrás'));
let cadena2 = [];
for (i = dimeDesdeDondeCuento; i > 0; i--) {
    cadena2.push(dimeDesdeDondeCuento);
    dimeDesdeDondeCuento--;
}
console.log(cadena2);
alert(cadena2.join(','));



//9
let dimeUnNumero = parseInt(prompt('Dime un número y sumaré los enteros positivos hasta él'));

let suma1 = 0;
for (i = 0; i <= dimeUnNumero; i++) {
    suma += i;
}
alert(`Los enteros del 0 a ${dimeUnNumero} suman ${suma1}`);



//10
let numeroADividir = parseInt(prompt('Dime un número y te digo si al dividirlo por 3 da 2'));

let division = 0;
let arrayDivisibles = [];

for (i = 0; i < numeroADividir; i++) {
    if (i % 3 == 2) {
        arrayDivisibles.push(i);
    }
}
console.log(arrayDivisibles);


//ejercicios clase 3 parte 2

//1
function convertirTemperatura(temperatura, unidad) {
    if (unidad == "C") {
        return (9 / 5) * temperatura + 32;
    } else if (unidad == "F") {
        return ((temperatura - 32) * 5) / 9;
    }
    else {
        return "Unidad incorrrecta";
    }
}

let prueba = convertirTemperatura(10, "F");

console.log(prueba);

//2

function calculadora(numA, numB, operador) {
    switch (operador) {
        case '+':
            return numA + numB;
            break;
        case '-':
            return numA - numB;
            break;
        case '*':
            return numA * numB;
            break;
        case '/':
            return numA / numB;
            break;
        default:
            console.log('operación no admitida');
            break;
    }
}
console.log('Calculadora da ' + calculadora(4, 2, '+'));

//3
function contarVocales(cadena) {
    let cantidadVocales = 0;
    const vocales = 'aeiouAEIOU';

    for (let index = 0; index < cadena.length; index++) {
        if (vocales.includes(cadena[index])) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}
console.log(contarVocales('EsternoCleidoMastoIdeo'));


//4
function sumaPares(numeroPositivo) {
    let sum = 0;
    for (i = 2; i <= numeroPositivo; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumaPares(10));



//5
function factorial(numero) {
    let prod = 1;
    for (i = 1; i <= numero; i++) {
        console.log(i);
        prod *= i;

    }
    return prod;
}

console.log(factorial(5));



//6
function numeroEsPar(numero) {
    let esPar = false;
    if (numero % 2 == 0) {
        esPar = true;
    }

    mostrarResultado(esPar);
}

function mostrarResultado(resultado) {
    console.log(resultado);
}

numeroEsPar(21);

//7

function calcularPromedio(arrayCalificaciones) {
    let sumaTotal = 0;
    for (calificacion of arrayCalificaciones) {

        sumaTotal += calificacion;

    }
    let promedio = sumaTotal / arrayCalificaciones.length;

    mostrarPromedio(promedio);
}

function mostrarPromedio(promedio) {
    console.log('El promedio es ' + promedio);
}

let calificaciones = [1, 5, 8, 3, 5, 9, 6, 8, 10];

calcularPromedio(calificaciones);


//8

function concatenarYOrdenar(arrayUno, arrayDos) {
    let arrayUnico = [...arrayUno, ...arrayDos];
    let arrayOrdenado = arrayUnico.sort();
    mostrarResultadoArrays(arrayOrdenado);
}

function mostrarResultadoArrays(array) {
    console.log(array)
};

let unArray = [7, 9, 2];
let dosArray = [4, 1, 8, 3];
//concatenarYOrdenar(unArray, dosArray);



//9
function numeroMasGrande(arrayNumeros) {
    let ordenarArray = arrayNumeros.sort();
    console.log(ordenarArray);
    let numeroMayor = ordenarArray[ordenarArray.length - 1];
    console.log(numeroMayor);
    mostrarResultadoNumero(numeroMayor);
}

function mostrarResultadoNumero(numeroMayor) {
    console.log(numeroMayor)
};

numeroMasGrande(dosArray);



//10
function filtrarPalabras(arrayPalabras, longitudMinima) {
    let nuevoArray = [];
    for (palabra of arrayPalabras) {
        if (palabra.length >= longitudMinima) {
            nuevoArray.push(palabra);
        }
    }
    mostrarResultadoPalabras(nuevoArray);
}

function mostrarResultadoPalabras(arrayPajarosFiltrados) {
    console.log(arrayPajarosFiltrados);
};

let arrayPajaros = ['Pato', 'Avestruz', 'Gallo', 'Pollo', 'Gavilán', 'Águila'];

filtrarPalabras(arrayPajaros, 6);