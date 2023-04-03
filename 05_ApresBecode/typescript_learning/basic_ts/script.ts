class Student {
    fullname: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullname = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

const HelloWord = (person: Person) => {
    return "Hello world, " + person.firstName + ' ' + person.lastName + "!"
}

let user = new Student("John", 'M.', 'Doe');

document.body.textContent = HelloWord(user);

export {}