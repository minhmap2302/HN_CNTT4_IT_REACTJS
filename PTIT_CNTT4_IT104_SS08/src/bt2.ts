let isGreeting: boolean = true;
function printInfo<T>(condition:boolean, trueMSG: T, falseMSG: T): void {
    if (condition){
        console.log(trueMSG);
    } else {
        console.log(falseMSG);
    }
}
printInfo<string>(isGreeting,"Xin chao","Tam biet");