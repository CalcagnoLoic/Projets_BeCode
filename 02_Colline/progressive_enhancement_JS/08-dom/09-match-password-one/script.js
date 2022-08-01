// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    document.getElementById("run").addEventListener("click", function(){
        let password1 = document.getElementById("pass-one").value;
        let password2 = document.getElementById("pass-two").value;

        match = () => {
            let box = document.getElementById("pass-two");
            if (password1 === password2) {
                alert("Mot de passe correct");
                box.style.borderColor = "green";
            } else {
                box.style.borderColor = "red";
            }  
        } 
        match()
    })

})();
