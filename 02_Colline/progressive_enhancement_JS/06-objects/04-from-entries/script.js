// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    document.getElementById("run").addEventListener("click", () => {

        let items = keys.map((id, index) => {
            return {
                id : id,
                key: keys[index],
                value: values[index],
            }
        
        });
        console.log(items);
    })
})();
