function flatten<T>(arr: T[][]): T[] {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}

let nums = [[1, 2], [3, 4], [5, 6]];
console.log(flatten(nums)); 

let fruits = [['apple', 'banana'], ['cherry'], ['date', 'elderberry']];
console.log(flatten(fruits)); 
