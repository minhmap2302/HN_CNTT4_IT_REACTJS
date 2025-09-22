type funcallback=<T>(arr:T[])=>void
const myfilter=<T>(array:T[],value:T,callback:funcallback)=>{
    callback(array.filter(e=>e==value));
}
const callbackfilter:funcallback=(e)=>{
    console.log(e);
}
const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];

myfilter(numbers, 2, callbackfilter)