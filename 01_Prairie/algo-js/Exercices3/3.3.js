////// Avec push()
let arr = [1,2,3,4,5];
arr.push(1,2,3,4,5)
console.log(arr);

////// En ES6
let y = [1,4,5];
let y_clone = [...y];
y_concat = y.concat(y_clone);
console.log(y_concat);

////// Avec concat()
let a = ["Pomme", "Poire"];
let arr1 = [1,2,3];
let arr_g = a.concat(arr1);
console.log(arr_g);