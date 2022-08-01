const readlineSync = require("readline-sync");

let n = readlineSync.question("Entrer un nombre : ");

for(let m = 1 ;  m < n; m++) {
    let resultat = m*m ;
    console.log(resultat)
}



