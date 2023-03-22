//ejercicios clase 4 partee 1

//1

//a
const rectangulo = (altura, ancho) => { return altura * ancho };
console.log(rectangulo(4, 6));

//b
const triangulo = (base, altura) => { return (base * altura) / 2 };
console.log(triangulo(5, 8));

//c
const largoDelArray = (array) => { return array.length };
console.log(largoDelArray(['a', 'e', 'i', 'o', 'u']));


//d
const cantidadDeLetras = (palabra) => { return palabra.length };
console.log(cantidadDeLetras('Patata'));

//e
const dolarHoy = (precioEuros, valorConversion) => { return precioEuros * valorConversion };
console.log(dolarHoy(35, 1.06));


const dolarHoy2 = (euro) => { return euro * 1.2 };
console.log(dolarHoy(60));



//f
const precioFinal = (precioSinIva, iva = 0.21) => { return precioSinIva + (precioSinIva * iva) };
console.log(precioFinal(100));
//si quiero calcular con un IVA diferente, como el del 4%
console.log(precioFinal(100, 0.04));

//g
const mitad = (numero) => { return numero / 2 };
console.log(mitad(16));

//h
const diaSegunNumero = (arrayDias, numero) => { return arrayDias[numero] };
let dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
console.log(diaSegunNumero(dias, 2));



//2
const calculadoraBasica = (num1, num2, operacion) => {
    if (operacion == '+') {
        return num1 + num2;
    } else if (operacion == '-') {
        return num1 - num2;
    } else if (operacion == '*') {
        return num1 * num2;
    } else if (operacion == '/') {
        return num1 / num2;
    } else {
        return;
    }


};
console.log(calculadoraBasica(2, 7, '+'));
console.log(calculadoraBasica(2, 7, '-'));
console.log(calculadoraBasica(2, 7, '*'));
console.log(calculadoraBasica(2, 7, '/'));


//3
const sumar = (num1, num2) => { return num1 + num2 };
const restar = (num1, num2) => { return num1 - num2 };
const multiplicar = (num1, num2) => { return num1 * num2 };
const dividir = (num1, num2) => { return num1 - num2 };

let pruebaSuma = sumar(2, 3);
console.log(pruebaSuma);

//solucion del compañero con callback: pasamos la constante y los numereos
let calculadora = (operacion, n1, n2) => operacion(n1, n2);
console.log(calculadora(sumar, 4, 3)); //devuelvee 6


//4
const letraDni = (dni) => {

    let resto = Math.floor(dni % 23);
    // console.log('R es ' + resto);
    let arrayLetrasDniOrdenadas = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    for (i = 0; i <= arrayLetrasDniOrdenadas.length; i++) {
        //   console.log('letra ' + i);
        if (i == resto) {
            console.log('letra encontrada ' + arrayLetrasDniOrdenadas[i])
            return arrayLetrasDniOrdenadas[i];
        } else {
            console.log('Letra no encontrada aún. Iterar de nuevo')
        }
    }

}

console.log('tu letra es: ' + letraDni(72894210));


//5
//solucion con funciones d js: splice conviert en array, reverse lee da la vueelta y join lo vuelve a convertir a string
const invertirTexto = (texto) => {
    return texto.split('').reverse().join('');
}
console.log(invertirTexto('Dabale arroz a la zorra el abad'));




//6
const numEntero = (numeroMin = 1, numeroMax = 100) => {

    let numRandom = 0;

    do {
        numRandom = Math.floor(Math.random() * 10);

    } while (numRandom < numeroMin || numRandom > numeroMax)


    return numRandom;
};

console.log(numEntero(3, 9));


//7

const cienNumeros = (num1 = 1, num2 = 1000) => {
    let arrayNumeros = [];
    for (i = 0; i < 100; i++) {
        let numRandom = Math.floor(Math.random() * (1000 - 1));
        arrayNumeros.push(numRandom);
    }


    let arraySinDuplicados = [];
    arrayNumeros.forEach(numero => {
        if (!arraySinDuplicados.includes(numero)) {
            arraySinDuplicados.push(numero);
        }
    })


    if (arraySinDuplicados.length < 100) {
        let numerosQueFaltan = 100 - arraySinDuplicados.length;
        for (i = 0; i < numerosQueFaltan; i++) {
            let numRandom = Math.floor(Math.random() * (1000 - 1));
            arraySinDuplicados.push(numRandom);
        }
    }

    return arraySinDuplicados;

}
alert(cienNumeros(1, 1000));



//8

const signoDelNumero = numero => {
    if (numero == 0) {
        alert('El número es neutro');
    }
    else if (numero >= 1) {
        alert('El número es positivo');
    } else if (numero <= -1) {
        alert('El número es negativo');
    }

};

signoDelNumero(2);



//9

const esPrimo = numero => {
    if (numero == 1) {
        console.log('1 no se considera primo')
    } else if (numero == 2) {
        console.log('el 2 es el primer número primo')
    } else {

        let resto = 0;
        for (i = 2; i < numero; i++) {
            // console.log('vuelta' + i);
            resto = numero % i;
            //  console.log(resto);
            if (resto == 0) {
                console.log('El número no es primo');
                return numero;
            }
        }
        console.log('El número es primo')
    }


};

esPrimo(22);



//10 casi conseguido
const formularioValido = (email, texto, password) => {
    let mailEsValido = verificarEmail(email);
    let textoEsValido = verificarTexto(texto);
    let passwordEsValida = verificarPassword(password);
    let formularioEsValido = false;

    if (mailEsValido && textoEsValido && passwordEsValida) {
        formularioEsValido = true;
    }
    return formularioEsValido;
}

function verificarEmail(email) {
    let emailValido = false;
    if (email.indexOf('@') > -1) {
        emailValido = true;
    }
    return emailValido;

};

function verificarTexto(texto) {
    let textoValido = false;
    if (texto.length <= 50) {
        textoValido = true;
    }
    return textoValido;
};

function verificarPassword(password) {
    let passwordValida = false;
    if (password.length >= 6) {
        let letraMinuscula = false;
        let letraMayuscula = false;
        let digito = false;
        let numeros = '1234567890';

        for (letra of password) {
            if (password.charCodeAt(letra) >= 65 && password.charCodeAt(letra) <= 90) {
                letraMayuscula = true;
            }
            if (password.charCodeAt(letra) >= 0141 && password.charCodeAt(letra) <= 0172) {
                letraMinuscula = true;
            }
            if (numeros.includes(letra)) {
                digito = true;
            }
        }
        if (letraMayuscula && letraMinuscula && digito) {
            passwordValida = true;
        }
        console.log(letraMayuscula);
        console.log(letraMinuscula);
        console.log(digito);
    }

    return passwordValida;
}

console.log(formularioValido('irene@mail.com', 'LoremLorem', 'AAiiAA8'));




//ejercicios clase 4 parte 2

//1, 2
let misMascotads = {
    nombre: 'mascota1',
    especie: 'especie1',
    edad: 1,
    comidaFavorita: 'comida1',
    color: 'negro',

    presentar() {
        return `Hola, mi mascota se llama ${this.nombre}, es un(a) ${this.especie} y tiene ${this.edad} años`;
    }

}

console.log(misMascotads);
console.log(misMascotads.presentar());

//3, 4
let misDatos = {
    nombre: 'nombre1',
    apellido: 'apellido1',
    dni: 1313433,
    comidaFavorita: 'patatas',
    edad: 18,

    saludar() {
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
    }

}

console.log(misDatos);
console.log(misDatos.saludar());



//5

let auto = {
    marca: 'Audi',
    modelo: 'B3',
    anio: 2014,
    color: 'negro',
    posicion: 0,
    avanzar(numero) { return this.posicion += numero },
    retroceder(numero) { return this.posicion -= numero }
};

auto.avanzar(5);
auto.retroceder(3);
auto.avanzar(10);
auto.retroceder(6);

console.log('posición del auto ' + auto.posicion);


//6

let nuevoAuto = {
    marca: 'Audi',
    modelo: 'B3',
    anio: 2014,
    color: 'negro',
    posicion: 0,
    moverse(numero) { return this.posicion += numero }

};
nuevoAuto.moverse(-4);
nuevoAuto.moverse(-3);
nuevoAuto.moverse(-2);
nuevoAuto.moverse(19);
console.log('posición del nuevo auto ' + nuevoAuto.posicion);



//7

let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder(poder) { this.energia -= 10; return alert(`Poder elegido de ${this.nombre}: ${this.poderes[poder]}. Energía restante: ${this.energia}`) }
};

let hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder(poder) { this.energia -= 10; return alert(`Poder elegido de ${this.nombre}: ${this.poderes[poder]}. Energía restante: ${this.energia}`) }
};

console.log(ironMan.getPoder(Math.floor(Math.random() * 2)));
console.log(hulk.getPoder(Math.floor(Math.random() * 2)));
console.log(ironMan.getPoder(Math.floor(Math.random() * 2)));
console.log(hulk.getPoder(Math.floor(Math.random() * 2)));
console.log(ironMan.getPoder(Math.floor(Math.random() * 2)));
console.log(hulk.getPoder(Math.floor(Math.random() * 2)));


//8

let objetoLiteral = {
    nombre: "Patata",
    precio: 1.59,
    stock: 35,
    vender(cantidad) {
        if (cantidad > this.stock) {
            return `Lo sentimos, tienes ${this.stock}, no puedes vender ${cantidad}`;
        } else {
            this.stock -= cantidad;
            if (this.stock > 0) {
                return `Has vendido ${cantidad}. Tienes aún ${this.stock} disponible para vender`;
            } else if (this.stock == 0) {
                return `Tienes ${this.stock} productos, hay que reponer de inmediato!`;
            }
        }
    },
    agregarStock(cantidad) {
        if (cantidad <= 0) {
            return `Lo sentimos, tienes que reponer al menos de 1 producto en adelante`;
        } else {
            this.stock += cantidad;

            return `Has repuesto ${cantidad}. Ahora tienes ${this.stock} disponible para vender`
        }
    }
};

alert(objetoLiteral.vender(5));
alert(objetoLiteral.vender(12));
alert(objetoLiteral.vender(18));
alert(objetoLiteral.vender(2));
alert(objetoLiteral.agregarStock(-55));
alert(objetoLiteral.agregarStock(100));