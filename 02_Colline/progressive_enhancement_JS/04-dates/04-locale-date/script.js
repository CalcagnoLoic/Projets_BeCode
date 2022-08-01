
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {
    let today = new Date();

    let time = today.getHours() + "h" + today.getMinutes() + "min" + today.getSeconds();

    let date = (today.toLocaleString('en-EN', {weekday:'long'})) + " " + today.getDay() + " " + (today.toLocaleString('en-EN', {month:'long'})) + " " + today.getFullYear() + ",";

    let dateTime = date + " " + time

    document.getElementById("target").innerHTML = dateTime
})();
