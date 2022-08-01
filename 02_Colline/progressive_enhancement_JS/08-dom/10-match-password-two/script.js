// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    document.getElementById("run").addEventListener("click", function(){
        let password1 = document.getElementById("pass-one").value;
        let password2 = document.getElementById("pass-two").value;

        class error {
            sayError() {
                return alert("Mauvais mot de passe!!");
            }
        }

        let messError = new error();

        match = () => {
            if (password1 === password2) {
                alert("Mot de passe correct");
            } else {
                alert(messError.sayError());
            }  
        } 
        match()
    })

})();
