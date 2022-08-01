// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

//(() => {
//    document.getElementById("run").addEventListener("click", () => {
//        const x = new Array(2, 4, 14, 10, 90, 23, 16);
//        x.sort((a, b) => a - b);
//        alert(x)
//    });
//})();

//le programme fonctionne correctement 
//TODO : faire un programme similaire avec méthode getElementByID

(() => {
    document.getElementById("run").addEventListener("click", () => {
       let x = document.getElementById("numbers").value;
       let arr = [x] ; 
       arr = x.split(",")
       let arr_sort = arr.sort((a, b) => a - b);
       alert(arr_sort)
   });
})();

