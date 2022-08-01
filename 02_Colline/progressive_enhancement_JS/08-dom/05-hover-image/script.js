// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    let img = document.querySelector("img");
    let kiss = img.getAttribute("data-hover");
    let kissBack = img.getAttribute("src")

    img.addEventListener("mouseover", () => {
        img.src = kiss;
    })

    img.addEventListener("mouseleave", () => {
        img.src = kissBack;
    })

})();
