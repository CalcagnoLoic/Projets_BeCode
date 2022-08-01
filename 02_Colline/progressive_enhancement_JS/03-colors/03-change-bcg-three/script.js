
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)

/**
 * @function randomColor() 
 * retourne 3 paramètres de couleur afin de générer un code rgb aléatoire
*/
(() => {
    document.getElementById("run").addEventListener("click", () => {
        function randomColor(){
            let r = Math.round(Math.random()*256);
            let g = Math.round(Math.random()*256);
            let b = Math.round(Math.random()*256);
            let color = "rgb(" + r + ", " + g + ", " + b + ")";
            document.body.style.background = color;
        }
        randomColor();
        })
})();
