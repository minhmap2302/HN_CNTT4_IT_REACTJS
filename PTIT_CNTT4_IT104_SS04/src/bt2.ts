let number: number[] = [7, 9, 10, 6, 8, 6, 5, 6, 7, 8, 9, 10];
let result:number=number.reduce((sum,num)=>sum+=num,0)/number.length;
console.log(result);