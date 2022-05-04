// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const firstArray = [23, 52, 67];
const secondArray = [42, 63, 34, 65, 43, 45];
console.log("first array:", firstArray.length);
console.log("second array:", secondArray.length);

if (secondArray.length > firstArray.length) {
    while (firstArray.length < secondArray.length) {
        const rndNumber = getRndInteger(1, 99);
        firstArray.push(rndNumber);
    }
} else {
    while (firstArray.length > secondArray.length) {
        const rndNumber = getRndInteger(1, 99);
        secondArray.push(rndNumber);
    }
}

console.log("...first array:", firstArray);
console.log("...second array:", secondArray);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}