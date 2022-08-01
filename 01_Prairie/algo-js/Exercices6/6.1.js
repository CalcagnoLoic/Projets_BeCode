class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xOffset = this.xPos;
        this.yOffset = this.yPos;
        console.log("la position x du cercle est " + this.xOffset + " et la position y est " + this.yOffset);
    }
    get surface() {
       return Math.pow(this.radius,2) * Math.PI;
    }
}

///////////////////////////////////////////////////Test de l'accessor get
////// Test avec un rayon de 5cm
let objet1 = new Circle(0, 0, 5)
console.log(objet1.surface) // Résultat ok 

////// Test avec un rayon de 15cm
let objet2 = new Circle(0, 0, 15)
console.log(objet2.surface) // Résultat ok 

////// Test avec un rayon de 0cm
let objet3 = new Circle(0, 0, 0)
console.log(objet3.surface) // Résultat ok 

////// Test avec un rayon de 3.14cm
let objet4 = new Circle(0, 0, 3.14)
console.log(objet4.surface) // Résultat ok 

////////////////////////////////////////////////////////

let obj1 = new Circle(8,10,15)
console.log(obj1.move())