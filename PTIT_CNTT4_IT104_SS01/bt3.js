// Tạo mảng sinh viên:
// Tạo một mảng các đối tượng sinh viên.
// Mỗi đối tượng gồm 2 thuộc tính: id và name.
// Ví dụ: const students =  [
// { id: 1, name: "Nguyễn A" }, 

// { id: 2, name: "Trần B" }

// ]

// In lời chào bằng Template String:
// Sử dụng hàm duyệt mảng cao cấp (ví dụ: forEach()).
// Duyệt qua từng sinh viên trong mảng.
// Với mỗi sinh viên, in ra một lời chào sử dụng Template String (``) có chứa cả id và name của sinh viên đó.
// Ví dụ: console.log(\Xin chào ${student.name}! Mã số: ${student.id}.`);`
const student = [

    { id: 1, name: "Nguyễn A" },
    { id: 2, name: "Trần B" },
    { id: 3, name: "Lê C" },
    { id: 4, name: "Phạm D" },
    { id: 5, name: "Ngô E" }
];
student.forEach((sinhVien) => {
    console.log(`Xin chào ${sinhVien.name}! Mã số: ${sinhVien.id}.`);
});