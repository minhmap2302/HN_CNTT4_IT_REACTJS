let num=1;
type arrcallback=(x:number)=>void;
const displaynumber=(ms:number,callback:arrcallback)=>{
    setInterval(() => {
    callback(num);
    num++;
  }, ms);
}
const callback=(x:number)=>{
    console.log(x);
}
displaynumber(1000,callback);