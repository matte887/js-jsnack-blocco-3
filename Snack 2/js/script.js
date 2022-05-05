// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

const sumArray = [];

let sum = 0;

while (sum < 50) {
    const userNumber = parseInt(prompt("Inserisci un numero"));
    sumArray.push(userNumber);
    sum += userNumber;
}

console.log(sumArray, sum);