// Xây dựng hàm có 3 tham số là 2 mảng và vị trí để chèn
// Khi gọi hàm thì tiến hành chèn mảng số 2 vào vị trí của mảng số 1. 
// Nếu vị trí không hợp lệ thì thông báo lên màn hình.
function insertArray(arr1, arr2, position) {
    if (position < 0 || position > arr1.length) {
        console.log("Vị trí không hợp lệ");
        return;
    }
    const newArray = [...arr1.slice(0, position), ...arr2, ...arr1.slice(position)];
    console.log(newArray);
}

insertArray([1, 2, 3], [4, 5], 1);