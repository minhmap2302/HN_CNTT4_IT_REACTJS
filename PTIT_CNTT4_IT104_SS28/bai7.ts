type foreachcallback=<T>(i:number,value:T,array:T[])=>void;
const myforeach=<T>(array:T[],callback:foreachcallback)=>{
    array.forEach((e,i)=>{
        callback(i,e,array);
    })
}
const mycallback:foreachcallback=(i,e,arr)=>{
     console.log(`vi tri:${i}|phan tu:${e}|mang:${arr}`);
}
myforeach([1,2,3,4,5,6,7],mycallback);