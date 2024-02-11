// Synchronise Programming
const task1 = (callbackFunc) => {
  console.log("Task1");
  callbackFunc();
};
const task2 = (callbackFunc) => {
  setTimeout(() => {
    console.log("Task2");
    callbackFunc();
  }, 2000);
};
const task3 = () => {
  console.log("Task3");
};
const task4 = () => {
  console.log("Task4");
};
const task5 = () => {
  console.log("Task5");
};

task1(() => {
  task2(() => {
    task3();
  });
});
// task3();
