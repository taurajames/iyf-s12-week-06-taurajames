// ==========================================
// DAY 4: PROMISE.ALL()
// ==========================================

// Create three asynchronous tasks
const task1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Weather data received");
    }, 1000);
});

const task2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("City information received");
    }, 2000);
});

const task3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Humidity data received");
    }, 1500);
});

// Run all tasks together
async function runTasks() {
    try {
        console.log("Running all tasks...");

        const results = await Promise.all([
            task1,
            task2,
            task3
        ]);

        console.log("All tasks completed!");

        results.forEach((result) => {
            console.log(result);
        });

    } catch (error) {
        console.log("An error occurred:", error.message);
    }
}

// Run the function
runTasks();