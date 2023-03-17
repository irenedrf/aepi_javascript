//práctica clase 3 parte 1
/*
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
*/

//continuar con eejercicios dle 6 en adelantee


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