// Sử dụng vòng lặp for với biến đếm i được khai báo bằng từ khóa let.
// Cho biến i chạy từ 0 đến 5, mỗi lần lặp in giá trị i ra console.
// Sau vòng lặp, tiếp tục in giá trị của i ra ngoài vòng lặp và quan sát kết quả.
// Ghi lại kết luận ngắn gọn về phạm vi hoạt động của let khi dùng trong vòng lặp.
for (let i = 0; i < 6; i++){
    console.log(i);   
}
// Kết quả in ra sẽ là 0, 1, 2, 3, 4, 5
console.log(i); // Lỗi: i không được định nghĩa ở phạm vi này vì let chỉ có phạm vi trong vòng lặp
// Kết luận: Biến được khai báo bằng let trong vòng lặp chỉ có phạm vi hoạt động trong vòng lặp đó. 
// Khi vòng lặp kết thúc, biến i không còn tồn tại và không thể truy cập được bên ngoài