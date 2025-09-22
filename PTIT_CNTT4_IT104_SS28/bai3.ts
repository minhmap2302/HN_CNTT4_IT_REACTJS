type callbackv3=<T>(index:number,value:T)=>void;
const processArray=<T>(arr:T[],callback:callbackv3)=>{
    arr.forEach((e,i)=>
        callback(i,e)
    )
}
const handlelog=<T>(i:number,e:T)=>{
    setTimeout(()=>{
        console.log(`phan tu thu ${i}:${e}`);
        
    },1000);
}
processArray([1,2,3,4,5],handlelog)