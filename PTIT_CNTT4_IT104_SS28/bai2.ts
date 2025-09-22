type callbackv2=(T:number)=>void
const delayedCallback=(ms:number,callback:callbackv2)=>{
    setTimeout(()=>{
        callback(ms);
    },ms)
}
const handle=(t:number)=>{
    console.log(t);
}
delayedCallback(10,handle);