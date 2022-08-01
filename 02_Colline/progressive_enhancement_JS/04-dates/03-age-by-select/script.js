
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {
    document.getElementById("run").addEventListener("click", function() {
        let minutes = 1000 * 60;
        let hours = minutes * 60;
        let days = hours * 24;
        let years = days * 365;

        let day_user = document.getElementById("dob-day").value;
        let month_user = document.getElementById("dob-month").value;
        let year_user = document.getElementById("dob-year").value;

        let birthday = day_user + month_user + year_user; 

        let dateNow = new Date();
        let YearsOld = Math.round((dateNow-birthday)/ years);   

        alert(YearsOld)
    })
})();
