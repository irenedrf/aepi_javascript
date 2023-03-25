//clase 6
//eejercicios parte 1

//parte 3-conectándonos al primer eendpoint



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


/*


    //parte 4-listando gifs

    const trendingRequest ='https://api.giphy.com/v1/gifs/trending?api_key=ANzjWpPE7cOCThA41gVyhwgTmaA51iYU&limit=25&rating=g'
    
    fetch(trendingRequest)
    .then(response => response.json())
    .then(datos => {
        console.log(datos)
        console.log(datos.data.title)


        document.createElement("h1").innerText = datos.data.title;
        //const newTitle = document.createElement("h1");
        //const newTitle = document.querySelector('h1');

        // newTitle.innerText = datos.data.title;
    })
    .catch(error => {
        console.log(error)
    })
*/