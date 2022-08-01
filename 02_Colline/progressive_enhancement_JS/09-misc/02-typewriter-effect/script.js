// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    var i = 0;
    var txt = document.getElementById("target") ; 
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    }
    typeWriter
})();
