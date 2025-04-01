import { useState, useEffect } from "react";
import getWeatherIcon from "/src/iconData.js";
import "./WeatherCard.css";

export default function WeatherCard(props) {
  const [temperature, setTemperature] = useState(props.weather.fahrenheit); // default temperature (in fahrenheit)
  const [feelsLike, setFeelsLike] = useState(props.weather.feels_like); // default feelsLike (in fahrenheit)
  const [unit, setUnit] = useState("F"); // default to fahrenheit

  // retrieve the current conversion from localStorage or default to 'fahrenheit'

  const storedTemperature = localStorage.getItem("temperature");
  const storedConversion = localStorage.getItem("conversion") || "fahrenheit";

  const [conversion, setConversion] = useState(storedConversion);

  // apply the conversion when the component mounts or the conversion changes

  useEffect(() => {
    if (storedTemperature) {
      setTemperature(parseFloat(storedTemperature)); // parse stored temperature to float
    }

    if (storedConversion) {
      setConversion(storedConversion); // set stored conversion unit
    }
  }, []); // only runs once when component mounts

  // sync changes to temperature and conversion with localStorage

  useEffect(() => {
    localStorage.setItem("temperature", temperature);
    localStorage.setItem("conversion", conversion);
  }, [temperature, conversion]);

  // function to convert temperature between fahrenheit and celsius

  const convertUnit = (value) => {
    if (conversion === "fahrenheit") {
      return value; // keep the temperature as fahrenheit
    } else if (conversion === "celsius") {
      return ((value - 32) * 5) / 9; // convert fahrenheit to celsius
    }
    return value;
  };

  // Toggle between fahrenheit and celsius mode
  const toggleConversion = () => {
    setConversion((prevConversion) =>
      prevConversion === "fahrenheit" ? "celsius" : "fahrenheit"
    );

    // Update unit when conversion changes

    setUnit((prevUnit) => (prevUnit === "F" ? "C" : "F"));
  };

  const convertedCurrentTemperature = convertUnit(temperature); // convert the current temperature when changing units
  const convertedFeelsLike = convertUnit(feelsLike); // convert the feels like temperature when changing units

  return (
    <>
      <li className="weather-card">
        <div className="weather-header">
          <button
            className="temperature-conversion-toggle-btn"
            onClick={toggleConversion}
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
              {convertedCurrentTemperature.toFixed(1)}&deg;{unit}{" "}
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
