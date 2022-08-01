
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let num = new Number(document.getElementById("number").value);
        function factorial(num) {
              for (let x = num - 1; x >= 1; x--) {
                num *= x;
              }
              return num;
          }
        alert(factorial(num));
    });

})();