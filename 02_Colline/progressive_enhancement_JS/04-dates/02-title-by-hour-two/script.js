
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let x = new Date();
    let hour = x.getHours()
    let min = x.getMinutes()
    let time = hour + "h " + min + "min"
    //alert(time) renvoie bien l'heure 
    if (hour < 17 && min >= 30) {
        document.getElementById("target").innerHTML="Hello"
    } else {
        document.getElementById("target").innerHTML="Good evening"
    }

})();
