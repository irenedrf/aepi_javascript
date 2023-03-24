//eejercicios clase 5 parte 1

//1

//a
alert('Bienvenidos a mi sitio');

//b
let respuesta = confirm('¿Está seguro de querer avanzar?');

//respuesta ? document.querySelector('h2').innerText = "Qué alegría que quieras continuar tu visita" : document.querySelector('h2').innerText = "Lamentamos que no quieras continuar tu visita";

if (respuesta) {
    document.querySelector('h2').innerText = "Qué alegría que quieras continuar tu visita";


    //c
    let dimeNombre = prompt('Dime tu nombre');

    //d
    document.querySelector('h1').innerText = `Bienvenido ${dimeNombre}`;

    //e
    let dimeAnios = parseInt(prompt('¿Cuántos años tienes'));

    if (dimeAnios > 17) {

        //f
        let teGustaProgramacion = confirm('¿Te gusta la programación?');
        //console.log(teGustaProgramacion);

        //f1 y f2
        let divImagen = document.querySelector('.background-img');

        //console.log(divImagen);


        if (teGustaProgramacion) {
            //divImagen.innerHTML += `<img src="img/programmer.jpeg">`;
            // divImagen.innerHTML += '<h1>Probando me gusta la programacion</h1>';


            divImagen.style.backgroundImage = "url(img/programmer.jpeg)";
            // console.log('Probando me gusta la programacion' + teGustaProgramacion);

        } else {
            divImagen.style.backgroundImage = "url(img/gatito.jpeg)";

        }


        //g
        let capturarAvatar = document.querySelector('.avatar');
        let imagen = prompt('Dime la ruta de la imagen');
        capturarAvatar.setAttribute('src', imagen);



        //h
        let nombre = prompt('Nombre de tu peli favorita');
        let director = prompt('Nombre de su director');
        let duracion = prompt('Cuánto dura?');
        let actor = prompt('Tu actor favorito de la peli');

        let peliculaFavorita = {
            _nombre: nombre,
            _director: director,
            _duracion: duracion,
            _actor: actor

        };

        //faltan ejercicios i y j




    } else {

        //e 1

        let container = document.querySelector('.container-general');
        container.style.display = 'none';

        //e 2

        let containerMostrar = document.querySelector('#accesoDenegado');
        containerMostrar.style.display = 'Block';
    }



} else {
    document.querySelector('h2').innerText = "Lamentamos que no quieras continuar tu visita";

}

