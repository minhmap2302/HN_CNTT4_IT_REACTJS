class Student {
    #id;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }
    getId() {
        return this.#id;
    }
    getName() {
        return this.#name;
    }
    toString() {
        return `ID: ${this.#id}, Name: ${this.#name}`;
    }
}

class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        if (this.students.length === 0) {
            console.log("No students in this class.");
        } else {
            this.students.forEach(s => console.log(s.toString()));
        }
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.find(s => s.getId() === id);
    }
    addStudentInClass(id, allStudents) {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        } else {
            console.log(`Student with ID ${id} not found in allStudents.`);
        }
    }
}

const allStudents = [
    new Student(1, "Alice"),
    new Student(2, "Bob"),
    new Student(3, "Charlie"),
    new Student(4, "David"),
    new Student(5, "Eva"),
    new Student(6, "Frank")
];

const classA = new Classroom();
const classB = new Classroom();

classA.addStudentInClass(1, allStudents);
classA.addStudentInClass(2, allStudents);
classA.addStudentInClass(3, allStudents);

classB.addStudentInClass(4, allStudents);
classB.addStudentInClass(5, allStudents);
classB.addStudentInClass(6, allStudents);

console.log("Class A:");
classA.showStudents();

console.log("\nClass B:");
classB.showStudents();

console.log("\nRemaining allStudents:");
allStudents.forEach(s => console.log(s.toString()));
