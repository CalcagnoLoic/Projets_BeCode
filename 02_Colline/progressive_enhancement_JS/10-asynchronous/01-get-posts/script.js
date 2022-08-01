// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts(test = (callback, test) => {
            if (callback != null) {
                console.log("oui")
            } else {
                console.log(test)
            }
        })
    })
})();
