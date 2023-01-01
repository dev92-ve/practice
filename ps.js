let listOfDestinations = [
    "Madrid ",
    "Tucupita ",
    "Paris ",
    "Maturin "];

let waysToTravel = [
    "Avion",
    "Bote",
    "Tren",
    "Automóvil"
]
prompt("Elige un destino " + listOfDestinations)
let numberOfDestinations = listOfDestinations.length;

console.log("Los medios para viajar que ofrecemos según el destino son: " + waysToTravel);
console.log("Los destinos en nuestro paquete son: " + listOfDestinations);
console.log("Hay " + numberOfDestinations + " en total para elegir.");


