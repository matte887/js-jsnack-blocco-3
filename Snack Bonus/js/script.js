// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numbers = [2, 4, 3, 6, 23, 55, 62, 36, 59];

let evenNumber = "";
let oddNumber = "";

numbers.forEach(thisNuber => {
    thisNuber % 2 ? evenNumber += `${thisNuber} ` : oddNumber += `${thisNuber} `;
});

document.getElementById("red").innerHTML = `I numeri dispari presenti nell'array sono: ${oddNumber}`;
document.getElementById("green").innerHTML = `I numeri pari presenti nell'array sono: ${evenNumber}`;