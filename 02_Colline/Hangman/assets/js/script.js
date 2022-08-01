// Création du dictionnaire
let dicoMot = [ "cercle", "bruit", "frais", "flaque", "biceps", "planeur", "poisson", "gladiateur", "travail", "famille", "falsifier", "massage", "plante", "dessiner", "spaghetti", "dispositifs", "affaire", "feuille", "aluminium", "batterie", "atrocite", "chenille", "stylo", "sauna", "feuilleter", "inattendu", "venise", "sandwich", "magazines", "sciage", "ornement", "trousse", "cuillère", "macaroni", "danemark", "passage", "tomate"
]

// Initialisation des variables
let reponse = '';
let erreurMax = 6;
let erreur = 0;
let arr = [];
let mot = null;

// Fonction permettant de choisir un mot aléatoire dans le dictionnaire
motAlea = () => {
  reponse = dicoMot[Math.round(Math.random() * dicoMot.length)];
}


// Fonction permettant de générer les touches du claviers virtuel
clavier = () => {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn"
        id='` + letter + `'
        onClick="jeu('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('clavier').innerHTML = buttonsHTML;
}

// Fonction adaptant le jeu dans le cas où la lettre choisie est correcte ou non
//Transfo avec .includes()??
jeu = (lettreJouee) => {
  arr.indexOf(lettreJouee) === -1 ? arr.push(lettreJouee) : null;
  document.getElementById(lettreJouee).setAttribute('disabled', true); //empâche de recliquer sur la lettre
  if (reponse.indexOf(lettreJouee) >= 0) {
    //ajout de la lettre + message si le joueur gagne
    tiretMot();
    jeuGagne();
  } else if (reponse.indexOf(lettreJouee) === -1) {
    erreur++;
    //enlève une vie, ajoute un élément au dessin et affiche un message si le joueur perd 
    erreurs();
    jeuPerdu();
    pendu();
  }
}

/////// INITIALISATION DU JEU APRES CHOIX ALEATOIRE DU MOT
// Fonction permettant d'afficher les tirets en fonction du nombre de lettre dans le mot choisi
tiretMot = () => {
  mot = reponse.split('').map(letter => (arr.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('messageInfo').innerHTML = mot;
}

document.getElementById('erreurMax').innerHTML = erreurMax;

motAlea();
clavier();
tiretMot();

//////CODE DANS LE CAS OU ON GAGNE
// Fonction générant un message dans le cas où on gagne
jeuGagne = () => {
  if (mot === reponse) {
    alert("Toutes mes félicitations ")
  }
}

//////CODE DANS LE CAS OU ON PERD
// Fonction permettant de changer l'image du pendu si on se trompe
pendu = () => {
  document.getElementById('pendu').src = './assets/img/' + erreur + '.jpg';
}

// Fonction mettant à jour le nombre d'erreur
erreurs = () => {
  document.getElementById('erreur').innerHTML = erreur;
}

// Fonction générant un message dans le cas où on perd
jeuPerdu = () => {
  if (erreur === erreurMax) {
    alert("Dommage, c'est perdu!")
    document.getElementById('messageInfo').innerHTML = 'La réponse était : ' + reponse;
  }
}

///// CAS OU LE JOUEUR VEUT REJOUER
// Fonction permettant de recommencer le jeu 
reset = () => {
  erreur = 0;
  arr = [];
  document.getElementById('pendu').src = './images/0.jpg';

  motAlea();
  tiretMot();
  erreurs();
  clavier();
}