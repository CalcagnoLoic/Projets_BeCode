// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname,
            this.lastname = lastname
        }
        get Name(){
            return this.lastname;

            //return `${this.firstname} ${this.lastname}`;
            //méthode, pas un get!
        }
        
        set Name(value) {
            this.firstname = value;
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let ind = new Person("", "Calcagno");
        console.log(ind.Name)

        let ind2 = new Person("","Calcagno");
        ind2.Name = "Loïc"
        console.log(ind2.Name)
    })
})();
