class Student{
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    displayInfo(): void {
        console.log(`ID: ${this.id}, Age: ${this.age}, Email: ${this.email}`);
    }
    
}
let students: Student[] = [];
students.push(new Student(1, 20, "a@gmail.com"));
students.push(new Student(2, 22, "b@gmail.com"));
students.push(new Student(3, 21, "c@gmail.com"));
students.forEach(student => {
    student.displayInfo();
});