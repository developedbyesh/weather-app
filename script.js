const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeather');
const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

const apiKey = 'd063e99269027b2ce186f4760550a9be';

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();
    console.log(data);
    displayWeatherData(data);
  } catch (error) {
    alert('Catch error ' + error.messge);
  }
}

function displayWeatherData(data) {
  cityName.textContent = data.name;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  description.textContent = `Description: ${data.weather[0].description}`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
  weatherInfo.style.display = 'block';
}

getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeatherData(city);
  } else {
    alert('Please enter a city name');
  }
});
