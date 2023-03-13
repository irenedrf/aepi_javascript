"use strict";

let primero = prompt("Dime el primer numero");
let segundo = prompt("Dime el segundo numero");
let tercero = prompt("Dime el tercer numero");

if (primero > segundo && primero > tercero && segundo > tercero) {
    alert(primero + segundo);
}
