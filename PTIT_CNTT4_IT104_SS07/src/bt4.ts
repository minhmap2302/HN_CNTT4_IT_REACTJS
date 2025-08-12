abstract class Person {
    public name: string;
    constructor(name: string){
        this.name = name;
    }

    public displayInfo(): void{
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person{
    public id: number;

    constructor(name: string, id: number){
        super(name);
        this.id = id;
    }

    public displayInfo(): void {
        console.log(`Student ID: ${this.id}`);
        console.log(`Student Name: ${this.name}`);
    }
}

class Teacher extends Person {
    public subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    public displayInfo(): void {
        console.log(`Teacher Name: ${this.name}`);
        console.log(`Subject: ${this.subject}`);
    }
}

let student = new Student("Nguyen Tien Minh",1);
let teacher = new Teacher("Trinh Quoc Hai", "IT REACTJS");
student.displayInfo();
teacher.displayInfo();