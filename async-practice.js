// LESSON 11: ASYNCHRONOUS JAVASCRIPT

// Exercise 1: Synchronous JavaScript

console.log("First: Start");

console.log("Second: Learning JavaScript");

console.log("Third: End");

// Exercise 2: Asynchronous JavaScript

console.log("First: Start");

setTimeout(() => {
  console.log("Second: This runs after 2 seconds");
}, 2000);

console.log("Third: End");

// Exercise 2: Asynchronous JavaScript

console.log("First: Start");

setTimeout(() => {
  console.log("Second: This runs after 2 seconds");
}, 2000);

console.log("Third: End");

// Exercise 3: Working with Promises

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved successfully!");
  }, 2000);
});

myPromise.then((message) => {
  console.log(message);
});

// Exercise 4: Handling Promise Rejection

const failedPromise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

failedPromise.catch((error) => {
  console.log(error);
});

// Exercise 5: Promise Chaining

Promise.resolve(10)
  .then((number) => {
    console.log("First value:", number);
    return number * 2;
  })
  .then((result) => {
    console.log("Second value:", result);
    return result + 5;
  })
  .then((finalResult) => {
    console.log("Final value:", finalResult);
  });

  // Exercise 6: Async and Await

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Taura");
    }, 2000);
  });
}

async function displayUser() {
  console.log("Getting user...");

  const user = await getUser();

  console.log("User name:", user);
}

displayUser();

// Exercise 7: Error Handling with Async/Await

async function getWeather() {
  try {
    const response = await Promise.reject("Weather service unavailable");

    console.log(response);
  } catch (error) {
    console.log("Error:", error);
  }
}

getWeather();

// Exercise 7: Error Handling with Async/Await

async function getWeather() {
  try {
    const response = await Promise.reject("Weather service unavailable");

    console.log(response);
  } catch (error) {
    console.log("Error:", error);
  }
}

getWeather();

// Exercise 8: Promise.all()

const task1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task 1 completed");
  }, 1000);
});

const task2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task 2 completed");
  }, 2000);
});

const task3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task 3 completed");
  }, 1500);
});

Promise.all([task1, task2, task3])
  .then((results) => {
    console.log("All tasks completed:");
    console.log(results);
  });