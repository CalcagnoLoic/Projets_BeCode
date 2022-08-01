const readlineSync = require("readline-sync");

let firstNumber = readlineSync.question("Donne moi un nombre stp : ");
let secundNumber = readlineSync.question("Donne moi un autre nombre stp : ");

console.log(firstNumber % secundNumber);
