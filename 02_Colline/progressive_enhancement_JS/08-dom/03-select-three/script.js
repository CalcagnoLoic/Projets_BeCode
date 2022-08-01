// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {
    let myTarget = document.getElementsByClassName("target");

    for (let x = 0; x  < myTarget.length; x ++) {
        myTarget[x].innerHTML = "onwned";
    }
})();
