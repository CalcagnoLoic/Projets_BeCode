const readlineSync = require("readline-sync");

let name = readlineSync.question('Veuillez entrer votre nom svp : ');
let firstname = readlineSync.question('Veuillez entrer votre prenom svp : ');
let pays = readlineSync.question('Veuillez entrer votre pays svp : ');

console.log("Votre nom est " + name + " " + firstname + " et vous vivez en " + pays);