// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    let field = document.getElementById("pass-one");
    let count = document.getElementById("counter");
    const limit = 10;

    field.addEventListener("input",() => {

        let textLength = field.value.length; // je stocke dans ma variable la longueur de la chaine de caractère

        count.textContent = textLength + "/" + limit; //inscrit le nombre de caractère
    }); 
})();
