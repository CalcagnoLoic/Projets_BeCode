
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {
    document.getElementById("run").addEventListener('click', function() {
        function friday() {
            let annee = new Number(document.getElementById("target").value);                
            let compteur = 0;

            for (let mois=0; mois <= 11; mois++){
                let date = new Date(13 + mois + annee);
                if(date.getDay() == 5){compteur++;}
            }
            alert(compteur);                            
        }
        friday();
    })
})();