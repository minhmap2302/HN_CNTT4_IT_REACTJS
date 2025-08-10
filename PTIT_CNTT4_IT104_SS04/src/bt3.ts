interface Student {
    name: string;
    age: number;
    email: string;
}
function introduceStudent(student: Student): void {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}
let student: Student = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "a@.com"
};
introduceStudent(student);