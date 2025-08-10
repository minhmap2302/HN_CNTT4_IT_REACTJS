function checkEndString(string, end) {
    string = string.trim();
 
    return string.endsWith(end);
}
console.log(checkEndString("Hello World", "World")); // true
console.log(checkEndString("Hello World", "world")); // false
console.log(checkEndString("Hello World", "Hello")); // false
console.log(checkEndString("Hello World", " ")); // false