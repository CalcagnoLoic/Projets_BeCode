// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {
    //récupération de l'attribut
    let src = document.getElementById("source").getAttribute("data-image");

    //création d'un nouvel élémént
    let img = document.createElement("img")//createAttribute("newImg")
    let attr = document.createAttribute("newImg")
    img.appendChild(attr)

    //création d'un nouvel attribut
    

    //suppression de l'attribut
    document.getElementById("source").removeAttribute("data-image");

    console.log(src)
    //console.log(atrr)
    console.log(img)
})();
