const readlineSync = require("readline-Sync") ;

//Demander à l'utilisateur une information
let userName = readlineSync.question("Can you give me your name please?");
console.log("Hello " + userName);

//Variable
let age = 23;
let sisterage = age + 11;
age +=12 ; 
console.log(age);

//Variable string
let name = "Jean";
console.log("My name is "+ name);

//Accumuler les let
let htmlBadges = new Number(readlineSync.question("How many HTML badges do you have?"));
let cssBadges = new Number(readlineSync.question("How many CSS badges do you have?"));
let totalBadges = htmlBadges + cssBadges;
console.log('Woaw, you have ' + totalBadges + "!");

let x = 5;
let y = 10;
let results = x + y;
console.log("x+y = " + results)