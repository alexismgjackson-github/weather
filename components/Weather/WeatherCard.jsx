import getWeatherIcon from "/src/iconData.js";
import "./WeatherCard.css";

export default function ForecastCard(props) {
  return (
    <>
      <li className="weather-card">
        <div className="weather-header">
          <span className="location-name">
            {props.weather.city}, {props.weather.country}
          </span>
          <button
            className="remove-weather-btn"
            aria-label="Remove this city weather"
            onClick={() => props.deleteWeather(props.weather.id)}
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
              {props.weather.temperature}&deg;F
            </span>
          </div>
          <span className="weather-condition">
            <img
              src={getWeatherIcon(props.weather.text)}
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
              {props.weather.feels_like}&deg;F
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
