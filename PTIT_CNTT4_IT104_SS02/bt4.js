function checkElement(arr, element) {
    for (let num of arr) {
        if (num === element) {
            return true;
        }
    }
    return false;
}
console.log(checkElement([1, 2, 3, 4, 5], 3)); 
console.log(checkElement([1, 2, 3, 4, 5], 6)); 
