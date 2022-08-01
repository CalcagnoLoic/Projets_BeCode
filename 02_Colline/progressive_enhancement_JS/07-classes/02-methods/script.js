//07-classes/02-methods/script.js - 7.2: methods


(() => {
    class Person {
        constructor(firstame, lastname) {
            this.firstame = firstame,
            this.lastname = lastname
        }
        sayHello(firstame, lastname) {
            return "Hello, " + firstame + " " + lastname + "!"
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let hey = new Person();
        console.log(hey.sayHello("Loïc", "Calcagno"));
    })

    //document
})();
