/**
 * @function factorial(a)
 * Fonction permettant de retourner le factoriel d'un nombre par récursivité
 * @param {a} Integer - Le nombre à transformer en factoriel
 */

function factorial(a){
    if (a == 0){
        return 1
    } else {
        return a * factorial(a-1)
    }
}

console.log(factorial(5))