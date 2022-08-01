const readlineSync = require("readline-sync");

let age = readlineSync.question("Quel est votre âge? : ");

if (age>18) {
    console.log("Vous êtes un adulte") 
    } 
    else {console.log("Vous n'êtes pas adulte!")
}