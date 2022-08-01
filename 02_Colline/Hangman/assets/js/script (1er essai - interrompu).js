//Création du tableau avec les mots contenus à l'intérieur
let tableauMots = ["exemple", "statue", "code", "sql", "python", "jquery", "javascript"];

//Création de la fonction de sélection d'un mot
/**
 * @function aleatoireMot()
 * Fonction permettant de sélection le mot au hasard
 */
aleatoireMot = () => {
    let alea = Math.round(Math.random()*tableauMots.length);
    return alea;
}

let nb = 0;
nb = aleatoireMot();

let chaine = tableauMots[nb]; console.log(chaine)
let longueur = chaine.length;

//Création de la fonction d'affichage des cases
/**
 * @function afficherCases()
 * Affiche le nombre de cases qui est égale au nombre de lettre dans le mot
 */
afficherCases = () => {
    for(let i = 1; i <= longueur;i++){
        document.getElementById('motDevine').innerHTML += '<div id="champ_devine'+i+'" class="champ_devine"><input type="text" id="devine'+i+'" class="champclassdev" disabled></div>';
    }
    
    for(let j = 1; j <= longueur;j++){
        document.getElementById('motCache').innerHTML += '<div id="champ_cache'+i+'" class="champ_cache"><input type="text" id="cache'+i+'" class="champclass" value="'+chaine[j-1]+'"></div>';
    }
}

afficherCases();

///////////////////////////////

let erreur = 0;
let faux = false;
let nbgagner = 0;


propose = (a) => {
    let lettre = 1;
    document.getElementById('lettre'+a).disabled = 'true';
    document.getElementById('lettre'+a).style.backgroundColor = 'black';
    document.getElementById('lettre'+a).style.color = 'grey';
    document.getElementById('inputtext_cache').value = a; 
    
    //Afficher les lettes dans les cases
    for(let k = 1; k <= longueur ; k++){         
        if(a == chaine[k-1]){
            document.getElementById('devine'+k).value = a;
            nbgagner++;
            document.getElementById('footer').innerHTML = "<span>Bonne proposition !</span>"
        }
    }

    //Vérification des fautes
    for(let l = 1; l <= longueur ; l++){ 
        if(a != chaine[l-1]){
            faux = true;
        } else if(a == chaine[l-1]){
            faux = false;break;
        }
    }
    
    //afficher le pendu à chaques fautes
    if(faux){ 
        document.getElementById('bonnechance').style.display = "none";
        erreur++;
        document.getElementById('footer').innerHTML = "<span>Mauvaise proposition!</span>"
        document.getElementById('pendu'+erreur).style.display = "block";
        var comptage = erreur -1;
        document.getElementById('pendu'+comptage).style.display = "none";
    }

    // Changement des couleurs du clavier quand le jeu est perdu
    let maClass = document.getElementsByClassName("btn"); 
    
    if(erreur >= 6 ){
        document.getElementById('footer').innerHTML = "<span>Vous avez perdu !</span>"
        for (let i = 0, count = maClass.length; i < count; i++) {
            var element = maClass[i];
            element.style.backgroundColor = '#434343';
            element.style.color = '#CACACA';
            element.disabled = 'true';
        }
        for(let j = 1; j <= longueur; j++){
        document.getElementById('champ_devine'+j ).style.display = "none"
        document.getElementById('motDevine').innerHTML += '<div id="champ_devine'+i+'" class="champ_devine"><input type="text" id="devine'+i+'" class="champclassdev" value="'+chaine[j-1]+'"></div>';
        }
        
        setTimeout('fin()',2000);
    }
    
    if(nbgagner == longueur){
        document.getElementById('footer').innerHTML = "<span>Vous avez gagné ! bravo !</span>";
        setTimeout('fin()',2000);
    }
}

fin = () => {
    document.getElementById('footer').innerHTML += "<input type='button' value='Une autre partie' id='bouton_recommencer' onclick='reload()'>";
}

reload = () => {
     window.location.reload(true);
 }

