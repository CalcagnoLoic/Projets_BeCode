/**
 * @function askTvSerie()
 * Fonction permettant de demander à un utilisateur différentes données en lien avec une série télévisée
 * @param {/}
 * @return {promise} - Un objet comportant les réponses de l'utilisateur
 */

var readlineSync = require("readline-sync")
var fs = require("fs")

function askTvSerie() {
    let name = readlineSync.question("What is your favorite serie? ")
    let prod = readlineSync.question("What is the production's year of this serie? ")
    let cast = readlineSync.question("What are cast members? ")

    let serieTV = {
        "name" : name ,
        "year_of_production" : prod,
        "cast_members" : cast
    }
    return serieTV
}

var json = JSON.stringify(askTvSerie())
fs.writeFileSync("5.1.json", json) 

