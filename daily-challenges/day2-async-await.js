// ==========================================
// DAY 2: ASYNC AND AWAIT
// ==========================================

// Create a function that returns a Promise
function getWeather() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                city: "Nairobi",
                temperature: 24,
                condition: "Sunny"
            });
        }, 2000);
    });
}

// Use async/await to retrieve weather
async function displayWeather() {
    console.log("Getting weather information...");

    const weather = await getWeather();

    console.log("Weather information received!");
    console.log("City:", weather.city);
    console.log("Temperature:", weather.temperature + "°C");
    console.log("Condition:", weather.condition);
}

// Run the function
displayWeather();