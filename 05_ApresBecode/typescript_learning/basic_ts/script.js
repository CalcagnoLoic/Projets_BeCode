"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    class Student {
        constructor(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullname = firstName + ' ' + middleInitial + ' ' + lastName;
        }
    }
    return Student;
}());
var HelloWord = function (person) {
    return "Hello world, " + person.firstName + ' ' + person.lastName + "!";
};
var user = new Student("John", 'M.', 'Doe');
document.body.textContent = HelloWord(user);
