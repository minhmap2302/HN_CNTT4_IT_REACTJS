let sum = [1, 2, 3, 4, 5, 6];
let total = 0;
for (let num of sum) {
    num%2==0?total+=num:console.log(`Odd number: ${num}`);
    
}
console.log(`Total of even numbers: ${total}`);
