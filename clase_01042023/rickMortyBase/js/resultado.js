const searchResults = document.querySelector('.search-results');
//console.log(searchResults);

//buscamos el id en el url
const queryString = location.search;

//console.log(queryString);

//nos obtiene el par valor+ dato ?buscador=Rick
//lo convertimos en objeto
const queryStringToObject = new URLSearchParams(queryString);

//tenemos que separar el valor para solo obtener Rick
const resultado = queryStringToObject.get('buscador');
//console.log(resultado);


//creamos un request específico y le pasamos a la api call directamente eel nombre
const requestSpecificCharacter = `https://rickandmortyapi.com/api/character/?name=${resultado}`;

fetch(requestSpecificCharacter)
    .then(result => result.json())
    .then(data => {
        //console.log(data);
        //reecibimos un array de reesultados. iteramos en el array e imprimimos un article por cada reesultado
        data.results.forEach(result => {
            searchResults.innerHTML += `<article>
        <img src=${result.image}>
        <p>Name: ${result.name} </p>
        <p>Status:${result.status} </p>
        </article>`
        });


    })
    .catch(error => { console.log(error) })