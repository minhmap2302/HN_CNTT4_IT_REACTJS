// ; Khai báo hai biến bằng từ khóa const:
// ; Một biến là số nguyên (ví dụ: const a = 5)
// ; Một biến là mảng bất kỳ (ví dụ: const arr = [1, 2, 3])
// ; Thử thay đổi giá trị của biến số nguyên đã khai báo ở trên.
// ; Thêm một phần tử mới vào trong mảng đã khai báo.
// ; Chạy chương trình, quan sát kết quả ở console và giải thích hiện tượng xảy ra (vì sao cái này lỗi, cái kia không lỗi?).
const a=5;
const b=[1,2,3];
// a = 10; // Lỗi: Không thể gán giá trị mới cho biến a đã khai báo bằng const
b.push(4); // Không lỗi: Có thể thay đổi nội dung của mảng b đã khai báo bằng const
console.log(b); // In ra mảng b sau khi thêm phần tử mới
console.log(a); // In ra giá trị của a
; // Kết luận: Biến được khai báo bằng const không thể gán lại giá