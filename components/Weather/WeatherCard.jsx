import { useState } from "react";
import getWeatherIcon from "/src/iconData.js"; // Utility function to get weather icon based on condition
import "./WeatherCard.css"; // Styles for the weather card

// Functional component to render weather information for a single location
export default function WeatherCard(props) {
  // Store temperature in Fahrenheit (default)
  const [temperature, setTemperature] = useState(props.weather.fahrenheit);

  // Store "feels like" temperature
  const [feelsLike, setFeelsLike] = useState(props.weather.feels_like);

  // Tracks current temperature unit ("fahrenheit" or "celsius")
  const [conversion, setConversion] = useState("fahrenheit");

  // Display unit symbol ("F" or "C")
  const [unit, setUnit] = useState("F");

  // Converts temperature value based on selected unit
  const convertUnit = (value) => {
    if (conversion === "fahrenheit") {
      return value; // No conversion needed
    } else if (conversion === "celsius") {
      return ((value - 32) * 5) / 9; // Convert to Celsius
    }
    return value;
  };

  // Toggle temperature unit between Fahrenheit and Celsius
  const toggleUnitConversion = () => {
    const newUnitConversion =
      conversion === "fahrenheit" ? "celsius" : "fahrenheit";
    const newUnit = newUnitConversion === "fahrenheit" ? "F" : "C";

    setConversion(newUnitConversion); // Update conversion state
    setUnit(newUnit); // Update unit symbol
  };

  // Convert temperatures using current unit preference
  const convertedCurrentTemperature = convertUnit(temperature);
  const convertedFeelsLike = convertUnit(feelsLike);

  return (
    <>
      <li className="weather-card">
        {/* Header section: unit toggle, location name, and remove button */}
        <div className="weather-header">
          <button
            className="temperature-conversion-toggle-btn"
            onClick={toggleUnitConversion}
          >
            {conversion === "fahrenheit" ? "Cel." : "Fah."} {/* Toggle label */}
          </button>
          <span className="location-name">{props.weather.location}</span>
          <button
            className="remove-weather-btn"
            aria-label="Remove this city weather"
            onClick={() => props.deleteWeather(props.weather.id)} // Call parent delete function
          >
            <img
              className="remove-icon"
              src="assets/icons/remove.svg"
              alt="Remove icon"
            />
          </button>
        </div>

        {/* Main temperature and condition display */}
        <div className="weather-primary">
          <div className="weather-primary-temperature-and-description">
            <span className="weather-temperature">
              {" "}
              {convertedCurrentTemperature.toFixed(1)}&deg;{unit}
            </span>
          </div>

          {/* Weather icon and description */}
          <span className="weather-condition">
            <img
              src={getWeatherIcon(props.weather.text)} // Get icon based on weather text
              alt="Current weather icon"
              className="weather-condition-icon"
            />
            <span className="weather-description">{props.weather.text}</span>
          </span>
        </div>

        {/* Secondary weather metrics: feels like, humidity, visibility */}
        <div className="weather-secondary">
          {/* Feels like temperature */}
          <div className="feels-like-container">
            <div className="feels-like">
              <img
                src="/assets/icons/feels-like.svg"
                alt="Feels like icon"
                className="feels-like-icon secondary-icon"
              />
            </div>
            <span className="feels-like-text">Feels like</span>
            <div className="feels-like-temperature">
              {" "}
              {convertedFeelsLike.toFixed(1)}&deg;{unit}
            </div>
          </div>

          {/* Humidity */}
          <div className="humidity-container">
            <div className="humidity">
              <img
                src="/assets/icons/humidity.svg"
                alt="Humidity icon"
                className="humidity-icon secondary-icon"
              />
            </div>
            <span className="humidity-text">Humidity</span>
            <div className="humidity-percentage">
              {" "}
              {props.weather.humidity}&#37;
            </div>
          </div>

          {/* Visibility */}
          <div className="visibility-container">
            <div className="visibility">
              <img
                src="/assets/icons/visibility.svg"
                alt="Visbility icon"
                className="visibility-icon secondary-icon"
              />
            </div>
            <span className="visibility-text">Visibility</span>
            <div className="visibility-mileage">
              {props.weather.visibility} mi
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
