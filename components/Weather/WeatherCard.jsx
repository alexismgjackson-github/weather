import { useState } from "react";
import getWeatherIcon from "/src/iconData.js";
import "./WeatherCard.css";

export default function WeatherCard(props) {
  const [temperature, setTemperature] = useState(props.weather.fahrenheit); // default temperature to weather data received (in fahrenheit)

  const [feelsLike, setFeelsLike] = useState(props.weather.feels_like); // default feelsLike to weather data received (in fahrenheit)

  const [conversion, setConversion] = useState("fahrenheit"); // default conversion state to fahrenheit

  const [unit, setUnit] = useState("F"); // default unit state to fahrenheit (or F)

  // convert temperature between fahrenheit and celsius

  const convertUnit = (value) => {
    if (conversion === "fahrenheit") {
      return value; // default to fahrenheit
    } else if (conversion === "celsius") {
      return ((value - 32) * 5) / 9; // convert fahrenheit to celsius
    }
    return value;
  };

  // toggle between fahrenheit and celsius mode

  const toggleUnitConversion = () => {
    const newUnitConversion =
      conversion === "fahrenheit" ? "celsius" : "fahrenheit"; // toggles between "fahrenheit" and "celsius"
    const newUnit = newUnitConversion === "fahrenheit" ? "F" : "C"; // toggles between "F" or "C"  temperature unit

    setConversion(newUnitConversion); // updates the conversion state
    setUnit(newUnit); // updates the unit state
  };

  const convertedCurrentTemperature = convertUnit(temperature); // converts current temperature when changing between fahrenheit and celsius

  const convertedFeelsLike = convertUnit(feelsLike); // converts feels like temperature when changing between fahrenheit and celsius

  return (
    <>
      <li className="weather-card">
        <div className="weather-header">
          <button
            className="temperature-conversion-toggle-btn"
            onClick={toggleUnitConversion}
          >
            {conversion === "fahrenheit" ? "Cels." : "Fahr."}
          </button>
          <span className="location-name">{props.weather.location}</span>
          <button
            className="remove-weather-btn"
            aria-label="Remove this city weather"
            onClick={() => props.deleteWeather(props.weather.id)} // remove a specific weather entry by filtering out the entry with the matching id
          >
            <img
              className="remove-icon"
              src="assets/icons/remove.svg"
              alt="Remove icon"
            />
          </button>
        </div>
        <div className="weather-primary">
          <div className="weather-primary-temperature-and-description">
            <span className="weather-temperature">
              {" "}
              {convertedCurrentTemperature.toFixed(1)}&deg;{unit}
              {/* displaying current temperature values in a user-friendly format */}
            </span>
          </div>
          <span className="weather-condition">
            <img
              src={getWeatherIcon(props.weather.text)} // gets the corresponding weather icon path based on the real-time weather
              alt="Current weather icon"
              className="weather-condition-icon"
            />
            <span className="weather-description">{props.weather.text}</span>
          </span>
        </div>
        <div className="weather-secondary">
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
              {/* displaying feels like temperature values in a user-friendly format */}
            </div>
          </div>
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
