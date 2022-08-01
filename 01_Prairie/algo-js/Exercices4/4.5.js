/**
 * @function calcDistance 
 * Fonction permettant de calculer la distance entre deux points dans l'espace 
 * @param {Xa} Integer - Coordonnée A du point X
 * @param {Xb} Integer - Coordonnée B du point X
 * @param {Ya} Integer - Coordonnée A du point Y
 * @param {Yb} Integer - Coordonnée B du point Y
 * @return Résultat de la distance euclidienne
 */ 

function calcDistance(Xa, Xb, Ya, Yb) {
    let x = Xa**2 - Xb**2
    let x_sq = Math.sqrt(x)
    let y = Ya**2 - Yb**2
    let y_sq = Math.sqrt(y)
    let dist = x_sq + y_sq
    console.log(dist)
}

calcDistance(1,1,3,1)