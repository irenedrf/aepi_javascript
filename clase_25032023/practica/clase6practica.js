//clase 6
//eejercicios parte 1

//parte 3-conectándonos al primer eendpoint


/*
const randomRequest = 'https://api.giphy.com/v1/gifs/random?api_key=ANzjWpPE7cOCThA41gVyhwgTmaA51iYU&tag=&rating=g';

fetch(randomRequest)
    .then(response => response.json())
    .then(datos => {
        console.log(datos)
        console.log(datos.data.title)

        const seccion = document.querySelector("section");
        seccion.innerHTML = `<h1>${datos.data.title}</h1>`;

        seccion.innerHTML += `<img src=${datos.data.images.original.url}>`;


    })
    .catch(error => {
        console.log(error)
    })


*/


//parte 4-listando gifs

const trendingRequest = 'https://api.giphy.com/v1/gifs/trending?api_key=ANzjWpPE7cOCThA41gVyhwgTmaA51iYU&limit=25&rating=g'

fetch(trendingRequest)
    .then(response => response.json())
    .then(result => {
        console.log(result.data)
        const gifs = result.data;
        let listGifs = '';


        gifs.forEach(gif => {
            listGifs += `
            <article>
            <h2>${gif.title}</h2>
            <img src=${gif.images.original.url}>
            </article>`
        });

        document.querySelector('section').innerHTML = listGifs;
    })
    .catch(error => {
        console.log(error)
    })
