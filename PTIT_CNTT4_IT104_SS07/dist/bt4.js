class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Student ID: ${this.id}`);
        console.log(`Student Name: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Teacher Name: ${this.name}`);
        console.log(`Subject: ${this.subject}`);
    }
}
let student = new Student("Nguyen Tien Minh", 1);
let teacher = new Teacher("Trinh Quoc Hai", "IT REACTJS");
student.displayInfo();
teacher.displayInfo();
