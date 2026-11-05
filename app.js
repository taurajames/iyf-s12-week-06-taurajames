// ==========================================
// STEP 1: SELECT HTML ELEMENTS
// ==========================================

const searchForm = document.querySelector("#search-form");
const cityInput = document.querySelector("#city-input");

const loading = document.querySelector("#loading");
const errorMessage = document.querySelector("#error-message");

const weatherDisplay = document.querySelector("#weather-display");
const cityName = document.querySelector("#city-name");
const weatherIcon = document.querySelector("#weather-icon");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");

const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const pressure = document.querySelector("#pressure");

const searchHistory = document.querySelector("#search-history");

// ==========================================
// STEP 2: SET UP WEATHER API
// ==========================================

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const UNITS = "metric";

// ==========================================
// STEP 3: FETCH WEATHER DATA
// ==========================================

async function getWeather(city) {
    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=${UNITS}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("City not found. Please check the city name.");
    }

    const data = await response.json();

    return data;
}

// ==========================================
// STEP 4: DISPLAY WEATHER DATA
// ==========================================

function displayWeather(data) {
    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;

    description.textContent = data.weather[0].description;

    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} m/s`;
    pressure.textContent = `${data.main.pressure} hPa`;

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = data.weather[0].description;

    weatherDisplay.hidden = false;
}

// ==========================================
// STEP 5: HANDLE WEATHER SEARCH
// ==========================================

searchForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {
        errorMessage.textContent = "Please enter a city name.";
        errorMessage.hidden = false;
        return;
    }

    loading.hidden = false;
    errorMessage.hidden = true;
    weatherDisplay.hidden = true;

    try {
        const weatherData = await getWeather(city);

        displayWeather(weatherData);
        saveToHistory(city);
displayHistory();

    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.hidden = false;

    } finally {
        loading.hidden = true;
    }
});

// ==========================================
// STEP 6: SAVE RECENT SEARCHES
// ==========================================

let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];

function saveToHistory(city) {
    recentSearches = recentSearches.filter(
        item => item.toLowerCase() !== city.toLowerCase()
    );

    recentSearches.unshift(city);

    recentSearches = recentSearches.slice(0, 5);

    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
}

// ==========================================
// STEP 7: DISPLAY SEARCH HISTORY
// ==========================================

function displayHistory() {
    searchHistory.innerHTML = "";

    recentSearches.forEach(function(city) {
        const listItem = document.createElement("li");

        const button = document.createElement("button");
        button.textContent = city;
        button.classList.add("history-button");

        button.addEventListener("click", function() {
            cityInput.value = city;
            searchForm.requestSubmit();
        });

        listItem.appendChild(button);
        searchHistory.appendChild(listItem);
    });
}
displayHistory();