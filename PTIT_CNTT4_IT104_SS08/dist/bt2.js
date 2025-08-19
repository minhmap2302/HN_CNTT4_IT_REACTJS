let isGreeting = true;
function printInfo(condition, trueMSG, falseMSG) {
    if (condition) {
        console.log(trueMSG);
    }
    else {
        console.log(falseMSG);
    }
}
printInfo(isGreeting, "Xin chao", "Tam biet");
