
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1 + texte2;
}
let afficherCar5 =  (texte) => {
    return texte[4];
}
let afficher9Car =  (texte) => {
    let str = texte.slice(0,9);
    return str
}
let majusculeString =  (texte) => {
    let texteUpper = texte.toUpperCase();
    return texteUpper
}
let minusculeString =  (texte) => {
    let texteLower = texte.toLowerCase();
    return texteLower;
}
let SupprEspaceString =  (texte) => {
    let str = texte.trim()
    return str
}
let IsString =  (texte) => {
    if (typeof texte === "string") {
        return true
    }
}
let AfficherExtensionString =  (texte) => {
    return texte.split(".").pop();
}
let NombreEspaceString =  (texte) => {
    return texte.match(/([\s]+)/g).length
}
let InverseString =  (texte) => {
    reverse = (e) => {
        return e.split("").reverse().join("");
    }
    return reverse(texte);
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return x ** y
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre)
}
let valeurAbsolueArray =  (array) => {
    let map = array.map(elem => Math.abs(elem))
    return map
}
let sufaceCercle =  (rayon) => {
    let R2 = rayon ** 2
    return Math.round(R2 * Math.PI)
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt((ab**2) + (ac**2))
}
let calculIMC =  (poids, taille) => {
    let imc = poids/(taille**2)
    return Math.round(imc*100)/100
}
