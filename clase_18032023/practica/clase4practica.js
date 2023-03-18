//ejercicios clase 4 partee 1
/*
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
*/

//continuar aquí con ejercicios de parte 1 del 5 hasta el final


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
