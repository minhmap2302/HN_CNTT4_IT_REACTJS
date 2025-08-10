let string: string = "2";
let number: number = 2;
//@ts-ignore
console.log(string == number); // true, because '2' is coerced to a number
//@ts-ignore
console.log(string===number); // false, because types are different
