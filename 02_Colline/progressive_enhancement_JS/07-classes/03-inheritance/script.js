// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        static greeting = "Hello" ;
        constructor(name) {
            super(),
            this.name = name
        }
        // je ne rappelle pas la méthode avec super car héritage venant d'animal 
    } 

    class Dog extends Animal{
        static greeting = "Hello" ;
        constructor(name) {
            super(),
            this.name = name
        }
        // je ne rappelle pas la méthode avec super car héritage venant d'animal 
    }
    
    document.getElementById("run").addEventListener("click", () => {
        let cat = new Cat("a cat")
        console.log(cat.sayHello())

        let dog = new Dog("a dog")
        console.log(dog.sayHello())

    })
})();
