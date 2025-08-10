
checkEvenOrOdd = (num) => {
    if (typeof num !== 'number') {
        return 'Đối số nhập vào không phải là số';
    }
    return num % 2 === 0 ? 'Số chẵn' : 'Số lẻ';
}