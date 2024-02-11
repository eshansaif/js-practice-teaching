console.log("welcome Promise");

const promise1 = new Promise((resolve, reject) => {
  let completedPromise = false;
  if (completedPromise) {
    resolve("completed promise 1");
  } else {
    reject(new Error("not completed promise 1"));
  }
});

// const promise2 = new Promise((resolve, reject) => {

// })

// console.log(promise1);
promise1
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
  });

console.log("Goodbye Promise");
