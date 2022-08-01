/**
 * @function rand10()
 * Création d'un nombre aléatoire à chaque exécution du programme
 * @param {/}
 * @return {promise} Nombre aléatoire
 * 
 * @function min(arr)
 * Permet d'avoir la valeur minimale d'un array
 * @param {arr} array
 * @return {promise} La valeur minimale
 * 
 * @function max(arr)
 * Permet d'avoir la valeur maximale d'un array
 * @param {arr} array
 * @return {promise} La valeur maximale
 * 
 * @function average(arr)
 * Permet d'avoir la moyenne d'un array
 * @param {arr} array
 * @return {promise} La moyenne
 * 
 * @function multiRand(n)
 * Permet d'afficher un array possédant n item
 * @param {n} Integer - nombre d'items
 * @return {promise} L'array avec sa valeur minimale, maximale et la moyenne
 */

const readlineSync = require("readline-sync")

function rand10() {
    return(Math.round(Math.random()*10))
}

function max(arr){
    return Math.max(...arr)
} 

function min(arr){
    return Math.min(...arr)
}

function average(arr) {
    let sum = 0; 
    let n = arr.length; 
    for(let i = 0; i < n ; i++){
            sum += arr[i];
        }
    return (sum/n)
    }

function multiRand(n){ 
    let arr = []
    for(let i = 0; i < n ; i++) {
        arr[i] = rand10()
    }

    let arr_min = min(arr)
    let arr_max = max(arr)
    let arr_avg = average(arr)

    console.log(arr, arr_min, arr_max, arr_avg)
}

let n = new Number(readlineSync.question("Entrer un nombre entier : "))

multiRand(n)