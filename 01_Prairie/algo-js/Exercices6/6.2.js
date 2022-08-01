class Rectangle {
    constructor (topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos ;
        this.topLeftYPos = topLeftYPos ;
        this.width = width ;
        this.length = length ;
    }
    collides(otherRectangle) {
        if (rectangle.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            rectangle.topLeftXPos + rectangle.width > otherRectangle.topLeftXPos &&
            rectangle.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.height &&
            rectangle.height + rectangle.topLeftYPos > otherRectangle.topLeftYPos) {
            return true
        } else {
            return false
        }
    } 
}

let rectangle = new Rectangle(25,10,15,13);
let otherRectangle = new Rectangle(25,10,13,16);

console.log(rectangle.collides(otherRectangle))