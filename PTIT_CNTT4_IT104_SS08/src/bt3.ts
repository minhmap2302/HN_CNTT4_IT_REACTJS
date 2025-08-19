function reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse();
}

console.log(reverseArray<number>([1,2,3,4,5,6]));
console.log(reverseArray<string>(["a","b","c","d"]));
console.log(reverseArray<boolean>([true, false, true])); 



