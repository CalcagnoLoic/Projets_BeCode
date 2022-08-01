
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {
    for (let x = 1; x<101; x++) {
    if (x % 3 === 0) {
        console.log("fizz")
    } else if (x % 5 === 0) {
        console.log("buzz")
    } else if (x % 3 === 0 && x % 3 === 0) {
        console.log("fizzbuzz")
    } else {
       console.log(x)
    }
    }
})();
