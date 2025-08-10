// Rest parameter (...args) để nhận số lượng tham số không xác định.
// Array methods như reduce() để tính tổng các phần tử trong mảng.
// Sử dụng arrow function để viết hàm ngắn gọn và dễ đọc.
// 2. Mô tả
// Xây dựng hàm có tham số là các mảng, số lượng tham số là không xác định. 
// Hàm có tác dụng tính tổng các phần tử trong các mảng được truyền vào và lưu tổng đó vào một mảng mới.
// Kết quả trả về là mảng chứa tổng của các mảng là đối số truyền vào.
const sumArrays = (...arrays) => {
    
    return arrays.map(array => {
        return array.reduce((sum, num) => sum + num, 0);
    });
};

console.log(sumArrays([1, 2, 3], [4, 5], [6])); 

