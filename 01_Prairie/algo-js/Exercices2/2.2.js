const readlineSync = require("readline-sync");

let min = readlineSync.question("Entre un nombre min : ");
let max = readlineSync.question("Entre un nombre max : ");
let current = readlineSync.question("Entre un nombre entre min et max : ");

if ((current < max) && (current > min)) {
    console.log(current);
}   else if (min > max) {
    console.log("min ne peut pas être supérieur à max"); 
}   else {
    console.log("La variable current doit être comprise entre min et max");
}
