const readlineSync = require("readline-sync");

let a = readlineSync.question("Quel est votre animal préféré? : ");
let b = readlineSync.question("Quel est votre plat préféré? : ");
let c = readlineSync.question("Combien y a-t-il entre votre domicile et lieu de travail?");

console.log("C'est l'histoire d'un " + a + " qui parcoura des kilomètres. Quand soudain... " + b + ". Une drôle d'histoire quand même! mais qui était loin d'être finie. " + c + ". Voici une belle conclusion!")