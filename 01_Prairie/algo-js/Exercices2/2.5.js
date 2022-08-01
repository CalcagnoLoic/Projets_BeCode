const readlineSync = require("readline-sync");

let num = new Number(readlineSync.question("Entrer un nombre : "));

while (num != 42){
    console.log("Pas bon ça")
    let num = new Number(readlineSync.question("Entrer un nombre : "));

    if(num == 42) {
        console.log("Bonne réponse!")
        break;
    }
}