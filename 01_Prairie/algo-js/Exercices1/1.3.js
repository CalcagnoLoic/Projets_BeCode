const readlineSync = require("readline-sync");

let name = readlineSync.question('Veuillez entrer votre nom svp : ');
let firstname = readlineSync.question('Veuillez entrer votre prenom svp : ');

console.log("Hello " + name + " " + firstname);