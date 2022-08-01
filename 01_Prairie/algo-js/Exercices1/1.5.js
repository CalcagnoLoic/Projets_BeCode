const readlineSync = require("readline-sync");

let firstNumber = readlineSync.question("Dites moi un nombre avec une partie decimale : ");
let secundNumber = readlineSync.question("Dites moi un nombre avec une partie decimale : ");

console.log(Math.trunc(firstNumber * secundNumber));
