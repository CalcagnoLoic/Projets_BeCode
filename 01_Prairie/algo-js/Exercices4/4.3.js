/**
 * @function multiRand(n)
 * Fonction permettant de retourner un array composé de n items où l'utilisateur choisit ce nombre n
 * @param {n} Integer - Nombre d'items dans l'array
 * @return {promise} Array composé d'n items 
 * 
 * @function rand10()
 * Création d'un nombre aléatoire à chaque exécution du programme
 * @param {/}
 * @return {promise} Nombre aléatoire
 */

const readlineSync = require("readline-sync")

let n = new Number(readlineSync.question("Entrer un nombre entier : "))

function multiRand(n){ 
        function rand10() {
        return(Math.round(Math.random()*10))
    }
    let arr = []
    for(let i = 0; i < n ; i++) {
        arr[i] = rand10()
    }
    return arr
}

console.log(multiRand(n))