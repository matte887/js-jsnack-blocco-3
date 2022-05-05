const firstArray = [23, 52, 67];
const secondArray = [42, 63, 34, 65, 43, 45];

let shortArray;

if (firstArray.length > secondArray.length) {
    shortArray = secondArray;
} else {
    shortArray = firstArray;
}

while (firstArray.length !== secondArray.length) {
    shortArray.push(getRndInteger(1, 100));
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(firstArray);
console.log(secondArray);