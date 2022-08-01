
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {
    let x = new Date();
    let hour = x.getHours()
    //alert(hour); //renvoie bien l'heure 
    if (x >= 18) {
        document.getElementById("target").innerHTML="Hello"
    } else {
        document.getElementById("target").innerHTML="Good evening"
    }
})();
