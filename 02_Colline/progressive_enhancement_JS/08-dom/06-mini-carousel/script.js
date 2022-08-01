// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let x = document.getElementsByTagName("img");

    document.getElementById("next").addEventListener("click", () => {
        document.getElementsByTagName("img").setAttribute("source", gallery);
        while (x < gallery.length) {
            x++ ;
            x = 0 ;
        }
    })

    console.log(x)
})();
