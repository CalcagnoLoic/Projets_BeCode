const readlineSync = require("readline-sync");

let shoesSize = readlineSync.question("Quelle est votre pointure? : ");

let birthYear = readlineSync.question("Quelle est votre date de naissance? : ");

console.log(((((shoesSize*2)+5)*50)-birthYear)+1766);