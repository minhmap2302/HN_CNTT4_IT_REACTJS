const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
const runtask = async () => {
  console.log("runtask1");
  await delay(1000);
  console.log("1done");
  console.log("runtask2");
  await delay(2000);
  console.log("2done");
  console.log("runtask3");
  await delay(1500);
  console.log("3done");
};
runtask();
function fecthdata() {
  return new Promise((resolve, reject) => {
    const isPromise = Math.random() * 1500;
    setTimeout(() => {
      const isSuccess = Math.random() < 0.5;
      if (isSuccess) {
        resolve({ data: "Success!" });
      } else {
        reject("Network Error!");
      }
    }, Math.ceil(Math.random()*1000));
  });
};
const handledata=async ()=>{
    const data=await fecthdata();
    try{
       console.log("Success:",data);
    }catch (error){
        console.log("error:",error);
    }
};
handledata();