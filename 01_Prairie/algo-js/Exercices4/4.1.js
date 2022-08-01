/**
 * @calcSurface
 * Fonction permettant de calculer la surface d'un rectangle en demandant à l'utilisateur de rentrer une longueur et une largeur
 * 
 * @param {/}
 * @return { Promise } Surface totale du rectangle
 * @example
 * 
 * calcSurface();
 * ////Entrer une longueur pour le rectangle : 45
 * ////Entrer une largeur pour le rectangle : 2
 * /// 90
 */

const readlineSync = require("readline-sync")

function calcSurface() {
    let lenght = new Number(readlineSync.question("Entrer une longueur pour le rectangle : "))
    let width = new Number(readlineSync.question("Entrer une largeur pour le rectangle : "))
    console.log(lenght*width)
}

calcSurface()



