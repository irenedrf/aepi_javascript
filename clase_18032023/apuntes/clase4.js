//clase 4
//funciones anónimas, función flecha,qué es un callback, objetos literales y destructuring
//nuevas funcionalidades a partir de la versión EcmaScript 6

//función anónima es la qu no tienee ningún nombre asociado
//una función anónima no es accesible deespués de su creeación inicial, solo puede acceedersee a eella meediante una variable en la quee está almacenada como una función con valor. una función anónima puede tener varios parámetros-argumentos pero solo una expresión
//seee usan cuando tengo quee pasar un parámeetro een forma de función een vez de una variable. también puedo almacenar la función en una variable

let greet = function () {
    console.log('Welcome to JS course');
};


//funcion flecha
//forma abreviada de declarar una función anónima. no necesita la palabra cable
//variable=parametro que reecibe =>acción;
//las funciones anónimas see ejecutan direectamentee een cuanto la deeclaras. NO hay que llamarla o invocarla
let greetFlecha = (nombre, apellido) => console.log(`Welcome to ${nombre}, ${apellido}`);


//ejemplos de funciones flecha
const contarVocales = (cadena) => {
    let cantidadVocales = 0;
    const vocales = 'aeiouAEIOU';

    for (let index = 0; index < cadena.length; index++) {
        if (vocales.includes(cadena[index])) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}

console.log(contarVocales); //devuelvee la función que hemos guardado een la constantee
console.log(contarVocales('EsternoCleidoMastoIdeo')); //devuelve numero porque lee estamos pasando el parámetro de cadena de caractres


//funciones de parámeetros indeeefinidos
//aunque yo defina solo una función que admita unicamente 2 parametros, si een la llamada leee paso 5, solo voy a tomar dos
//cuando tengo que trabajar con un núm indeefiindo de parametros, puedo usar una funcion fleecha que admita un numreo infinito de parametros usando ...args

const sumAll = (...args) => {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
};

//funciones dee callback
//se puedeen pasar funciones como parámetros a otras funcionees

const mensajee = function () {
    console.log('Hola');
}

setTimeeOut(mensajee, 3000);



//objetos literales -tipo de dato Object
//son un tipo dee dato más. Contienen propiedades y métodos
//las propiedades son los atributos y los métodos permiten reealizar acciones lógicas en el objeto
//permiten una repreesentación de objetos de la vida real
//en otros lenguajes necesitamos una clase para crar estos objetos. een JS no es necesario y podemos inicializarlos directamente en el código

let objetoEjemplo = {
    campo: 'Valor',
    meGustaJs: true,
    numerosFavoritos: [1, 2, 3],
    metodo() {
        console.log('metodo del objeto');
    }
}

//se puede acceder a un atributo usando notación de punto o de corchete
objetoEjemplo.campo;
objetoEjemplo[meGustaJs];

//puedo cambiar atributos
objetoEjemplo.campo = 'Pepe';

//puedo añadir elementos al array de un objeto
objetoEjemplo.numerosFavoritos.push(35);

let tenista = {
    nombre: 'Roger',
    saludar() {
        return 'Hola, me llamo ' + this.nombre; //this nos devuelve el valor del objeto para este atributo, si el atributo cambia de valor, nos devueelve el valor actualizado
    }
}

tenista.nombre = 'Rafa';


//destructuring
//nos permite sacar los atributos del objeto a variables globales.


let persona = {
    nombre: 'Sara',
    pais: 'Nigeria',
    trabajo: 'Dev'
};

//let nombre=persona.nombre;
//let pais=persona.pais
//let trabajo=persona.trabajo;

//esto mismo podemos hacerlo con destructuring: nos permitee extraeer los atributos de un objeto y asignarlos a una nueva variable dee forma mucho más sencilla y rápida. Nace en ecmascro¡ipt 6
//sintaxis: nueva variable {atributo1 a sacar, atributo 2 a sacar...}=objeto a desestructurar
//tenemos que respetar el nombre del atributo en el objeto. No podemos llamar nombre1 al desestructurar, la variable global debe coincidir con el nombre qu tiene el atributo.

let { nombre, pais, trabajo } = persona;