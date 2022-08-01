// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", function () {
        fruits.pop(); //supprime un élément à la fin
        fruits.shift(); //supprime un élément au début 
        fruits.push("kiwi"); //ajoute un élément à la fin
        fruits.unshift("banana")  //ajoute un élément au début 
        alert(fruits);
    })  
})();
