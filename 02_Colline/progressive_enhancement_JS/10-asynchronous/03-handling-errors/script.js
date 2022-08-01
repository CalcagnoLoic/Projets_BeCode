// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPersons(persons = (callback, persons) => {
            if (callback != null) {
                console.log("erreur")
            } else {
                console.log(persons)
            }
        })
    })
})();
