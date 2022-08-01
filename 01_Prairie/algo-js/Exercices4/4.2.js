/**
 * Création d'un nombre aléatoire à chaque exécution du programme
 * @param {/}
 * @return {promise} Nombre aléatoire
 */

function rand10() {
    return(Math.round(Math.random()*10))
}
console.log(rand10())