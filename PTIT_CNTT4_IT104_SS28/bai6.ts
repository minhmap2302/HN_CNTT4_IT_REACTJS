type Callback = () => void;
function task1(callback:Callback) {
  setTimeout(() => {
    console.log("Task 1 hoàn thành sau 1 giây");
    if (callback) callback();
  }, 1000);
}

function task2(callback:Callback) {
  setTimeout(() => {
    console.log("Task 2 hoàn thành sau 1.5 giây");
    if (callback) callback();
  }, 1500);
}

function task3(callback:Callback) {
  setTimeout(() => {
    console.log("Task 3 hoàn thành sau 2 giây");
    if (callback) callback();
  }, 2000);
}
task1(() => {
  task2(() => {
    task3(() => {
      console.log("Tất cả task đã hoàn thành!");
    });
  });
});
