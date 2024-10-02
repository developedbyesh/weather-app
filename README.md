# Weather App

A simple web application that fetches and displays real-time weather data for any city using the OpenWeatherMap API.

## Features

- Allows users to input the name of a city.
- Fetches real-time weather information from the OpenWeatherMap API.
- Displays:
  - City name
  - Current temperature (in Celsius)
  - Weather description (e.g., cloudy, clear, rainy)
  - Humidity level
  - Wind speed
- User-friendly interface with dynamic data display.

## Technologies Used

- **HTML**: For structuring the app's user interface.
- **CSS**: For styling and layout.
- **JavaScript**: For fetching weather data from the API and updating the DOM with the weather information.
- **OpenWeatherMap API**: Provides the real-time weather data.

## How It Works

1. The user enters the name of a city in the input field.
2. Upon clicking the "Get Weather" button, the app fetches weather data for the specified city from the OpenWeatherMap API.
3. If the city is found, the app displays the following weather details:
   - Temperature in Celsius.
   - Weather condition (e.g., clear, cloudy).
   - Humidity percentage.
   - Wind speed (in meters per second).
4. If the city is not found, an error message is displayed.

## Project Structure

- **index.html**: Contains the structure of the app including the input field, button, and weather info section.
- **style.css**: Provides the design and layout for the app.
- **script.js**: Handles the logic for fetching weather data from the API and dynamically displaying it.

## Installation

To run the Weather App locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/developedbyesh/weather-app.git
   ```
