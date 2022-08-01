
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {
    document.getElementById("run").addEventListener("click", () => {
        for (let i = 1; i < 22 ; i++) {
            alert(Math.pow(i,2));
        }
    });
})();

(() => {
    document.getElementById("run").addEventListener("click", () => {
        for (let i = 1; i < 22 ; i++) {
            alert(i*i);
        }
    });
})();

