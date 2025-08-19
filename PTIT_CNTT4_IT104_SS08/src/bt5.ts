function findFirstEven<T extends number>(arr: T[]): T | undefined {
    return arr.find(item => item % 2 === 0);
}

console.log(findFirstEven([1, 3, 4, 7, 8]));
console.log(findFirstEven([1, 3, 5]));   
