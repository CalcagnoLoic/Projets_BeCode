let CreationTableauLangages =  () => {
    return ["Html", "CSS", "Java", "PHP"];
}

let CreationTableauNombres =  () => {
    return [0,1,2,3,4,5];
}

let RemplacementElement =  (langages) => {
    langages[2] = "Javascript";
    return langages;
}

let AjoutElementLangages =  (langages) => {
    langages.push("Ruby", "Python");
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2, -1);
    return nombres;
}

let SuppressionPremierElement =  (langages) => {
    let newLangages = langages.shift();
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    let newLangages = langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let reseau = reseaux_sociaux_chaine.split(",");
    return reseau;
}

let ConversionTableauChaine =  (langages) => {
    return langages.toString();
}

let TriTableau =  (reseaux_sociaux) => {
    return reseaux_sociaux.sort();
}

let InversionTableau =  (langages) =>{
    return langages.reverse();
}