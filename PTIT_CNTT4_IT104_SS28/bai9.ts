type funcallbacks=<T>(arr:T[])=>void
const mymap=(array:number[],callback:funcallbacks)=>{
    const result = array.map((e) => e * 2);
    callback(result);
}
const callbackmap:funcallbacks=(e)=>{
    console.log(e);
}
const number: number[] = [1, 2, 2, 3, 4, 5, 6];

mymap(number, callbackmap)