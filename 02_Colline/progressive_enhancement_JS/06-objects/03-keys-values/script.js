// 06-objects/03-keys-values/script.js - 6.3: keys & values


(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    document.getElementById("run").addEventListener("click", function (){
        //affiche les keys
        for(const [key] of Object.entries(person)) {
            console.log(key);
        }

        // affiche les values
        for(const [,value] of Object.entries(person)) {
            console.log(value);
          }
        
    })
})();
