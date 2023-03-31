"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const endPointGetAllCharacters = "https://rickandmortyapi.com/api/character";

  fetch(endPointGetAllCharacters)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //   console.log(data.results);

      const characterList = document.querySelector(".characterList");
      let characters = "";

      data.results.forEach(function (character) {
        // agregamos al HTML cada personaje y luego le agregamos el evento click
        characters += `
                    <article>
                        <img src=${character.image} alt='' />
                        <p>Name: ${character.name} </p>
                        <p>Status: ${character.status} </p>
                        <a href=""> Agregar a favoritos </a> 
                    </article>
                `;


      });

      characterList.innerHTML = characters;

      const allTagsA = document.querySelectorAll("a"); //array


      allTagsA.forEach(function (tagA) {
        tagA.addEventListener("click", function (event) {
          event.preventDefault();
          console.log(event.explicitOriginalTarget.parentElement.children[1].innerText)
          let nombrePersonaje = event.explicitOriginalTarget.parentElement.children[1].innerText;



          console.log(event);
          // guardar cada personaje en el localstorage
          localStorage.setItem("character", character)

          // localStorage.setItem("character", JSON.stringify(character))
        });
      })

    })
    .catch(function (error) {
      console.log(error);
    });
});
