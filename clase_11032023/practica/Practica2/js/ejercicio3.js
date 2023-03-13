"use strict";

let numAleatorio = Math.floor(Math.random() * (20 - 1));

let par = numAleatorio % 2 == 0 ? true : false;

console.log(`el numero ${numAleatorio} es par? ${par}`);
