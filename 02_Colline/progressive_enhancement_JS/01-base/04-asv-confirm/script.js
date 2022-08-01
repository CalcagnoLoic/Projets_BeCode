
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE
    function info() {
        let age = prompt("Age", "What is your age?");
        let gender = prompt("Gender", "What is your gender?");
        let town = prompt("City", "Where do you live?");
        let x = confirm("You have " + age + ". You are a " + gender + " and you live in " + town);
        
        if (x == true) {
            alert ("ok");
        } else {
            let age = prompt("Age", "What is your age?");
            let gender = prompt("Gender", "What is your gender?");
            let town = prompt("City", "Where do you live?");
            confirm("You have " + age + ". You are a " + gender + " and you live in " + town);
        } 
    }
    //Sors de la boucle après un passage 
    // TODO : améliorer le code pour n passages
    info()
})();
