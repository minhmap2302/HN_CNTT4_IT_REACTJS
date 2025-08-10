// 1. Mục tiêu
// Củng cố kiến thức về:
// Spread Operator (...) trong việc gộp mảng.
// Phương thức sort() và cách tùy chỉnh sắp xếp mảng số.
// Tư duy viết hàm tái sử dụng, xử lý dữ liệu có thứ tự.
// Rèn luyện kỹ năng xử lý mảng và giữ đúng tính chất sắp xếp trong quá trình hợp nhất.
// 2. Mô tả
// Khởi tạo hai mảng đã được sắp xếp theo thứ tự tăng dần
// Hãy hợp nhất hai mảng thành một mảng sao cho trong quá trình này thứ tự sắp xếp tăng dần vẫn được giữ nguyên.
 

// Input

// Output

// [1, 2, 3, 5, 9], [4, 6, 7, 8]

// [1, 2, 3, 4, 5, 6, 7, 8, 9]


const mergeSortedArrays = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2];
    mergedArray.sort((a, b) => a - b);
    
    return mergedArray;
}       

const array1 = [1, 2, 3, 5, 9];
const array2 = [4, 6, 7, 8];
const result = mergeSortedArrays(array1, array2);
console.log(result); 