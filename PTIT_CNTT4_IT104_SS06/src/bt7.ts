class Student {
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    getId(): number { return this.id; }
    getName(): string { return this.name; }
    setName(newName: string): void { this.name = newName; }
    toString(): string { return `ID: ${this.id}, Name: ${this.name}`; }
}

class Classroom {
    private students: Student[] = [];
    showStudents(): void {
        if (this.students.length === 0) {
            console.log("No students in this class.");
        } else {
            this.students.forEach(s => console.log(s.toString()));
        }
    }
    addStudent(student: Student): void {
        this.students.push(student);
    }
    filterStudent(id: number): Student | undefined {
        return this.students.find(s => s.getId() === id);
    }
    addStudentInClass(id: number, allStudents: Student[]): void {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
    removeStudent(id: number, allStudents: Student[]): void {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            allStudents.push(this.students[index]);
            this.students.splice(index, 1);
            console.log(`Removed student ID ${id} from class`);
        }
    }
    editStudent(id: number, newName: string): void {
        const student = this.filterStudent(id);
        if (student) {
            student.setName(newName);
            console.log(`Edited student ID ${id} name to ${newName}`);
        }
    }
}

const allStudents: Student[] = [
    new Student(1, "Alice"),
    new Student(2, "Bob"),
    new Student(3, "Charlie"),
    new Student(4, "David"),
    new Student(5, "Eva"),
    new Student(6, "Frank")
];

const classA = new Classroom();
classA.addStudentInClass(1, allStudents);
classA.addStudentInClass(2, allStudents);
classA.addStudentInClass(3, allStudents);

console.log("Class A before changes:");
classA.showStudents();

classA.editStudent(2, "Bobby");
classA.removeStudent(3, allStudents);

console.log("\nClass A after changes:");
classA.showStudents();

console.log("\nRemaining allStudents:");
allStudents.forEach(s => console.log(s.toString()));
