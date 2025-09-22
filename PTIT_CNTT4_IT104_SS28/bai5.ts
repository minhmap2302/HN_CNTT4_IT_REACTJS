type checkcallback=(dk:boolean)=>void
const checkCondition=(dk:boolean,callback:checkcallback)=>{
    setTimeout(()=>{
           callback(dk);
    },1000)
}
const callbacks=(dk:boolean)=>{
    if(dk==true){
        console.log(true);
    }else{
        console.log(false);
    }
}
checkCondition(true,callbacks);