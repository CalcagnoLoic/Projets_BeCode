// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        let cat1 = new Cat("Skitty", "9 years");
        console.log(cat1);

        let cat2 = new Cat("Pixel", "6 years");
        console.log(cat2);
    })
})();
