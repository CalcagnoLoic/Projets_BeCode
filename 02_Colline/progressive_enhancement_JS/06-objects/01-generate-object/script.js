// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    document.getElementById("run").addEventListener("click", function() {
        let object = {
            lastname: "Calcagno",
            firstname: "Loïc",
            age: 29,
            city: "La Hestre",
            country: "Belgique"
        }
        console.log(object);
    })
})();
