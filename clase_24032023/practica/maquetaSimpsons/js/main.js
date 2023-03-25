// completar las variables para que el programa funcione

window.addEventListener('load', function () {

    //capturar HTML 
    let titulo = document.querySelector('#titulo');

    //  let saludo = ;

    //   let span = ;

    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */


    //ASIGNACION DE EVENTOS

    //1 y 2
    let nombre = '';
    let span = document.querySelector('article span');

    titulo.addEventListener('click', function () {

        nombre = prompt('Hola, ¿cómo te llamas?').toUpperCase();
        let saludo = document.querySelector('#saludo');

        if (nombre) {

            //3
            //this.style.textTransform = "uppercase";
            //nombre.style.textTransform = "uppercase";

            console.log(nombre);

            //personalizado
            saludo.innerText = 'Bienvenid@ ' + nombre;


        } else {

            //meensajee geenérico
            saludo.innerText = 'Bienvenid@';
        }



        //4
        console.log(titulo)
        titulo.style.display = 'none';


        span.style.display = 'block';


    });

    //5
    let bienvenida = document.querySelector('.bienvenida');
    let personajes = document.querySelector('.personajes');

    span.addEventListener('click', () => {
        bienvenida.style.display = 'none';
        personajes.style.display = 'flex';
    });


    //6
    let bart = document.querySelector('#bart');
    let lisa = document.querySelector('#lisa');

    bart.addEventListener('click', () => {
        bart.style.backgroundColor = 'yellow';
    })

    lisa.addEventListener('click', () => {
        bart.style.backgroundColor = 'yellow';
    })



    /* Asignarle evento a la variable boton */
    //  let boton = ;


}) 