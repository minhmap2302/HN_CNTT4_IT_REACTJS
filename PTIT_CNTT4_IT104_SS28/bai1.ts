function callback(a:number,b:number):number{
    return a+b;
}
const caculater=(a:number,b:number,callback:(x:number,y:number)=>number)=>{
        return callback(a,b);
}
console.log(caculater(5,4,callback));