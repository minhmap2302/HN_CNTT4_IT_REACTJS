function findElement(arr, value) {
    return arr.find(item => item === value);
}
let numbers = [1, 2, 3, 4, 5];
let result1 = findElement(numbers, 3);
console.log(result1);
let strings = ["apple", "banana", "cherry"];
let result2 = findElement(strings, "banana");
console.log(result2);
let notFound = findElement(numbers, 10);
console.log(notFound);
