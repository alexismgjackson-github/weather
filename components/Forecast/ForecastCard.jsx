import "./ForecastCard.css";

export default function ForecastCard(props) {
  return (
    <>
      <li className="forecast-card">
        <div className="forecast-header">
          <span className="city-name">{props.forecast.city}</span>
          <button
            className="remove-forecast-btn"
            aria-label="Remove this city forecast"
          >
            <img
              className="remove-icon"
              src="assets/icons/remove.svg"
              alt="Remove icon"
            />
          </button>
        </div>
        <div className="forecast-primary">
          <div className="forecast-primary-temperature-and-description">
            <span className="forecast-temperature">
              {props.forecast.temperature}&deg;F
            </span>
            <span className="forecast-description">{props.forecast.text}</span>
          </div>
          <span className="forecast-condition">
            <img
              src="/assets/icons/sunny.svg"
              alt="Current weather icon"
              className="forecast-condition-icon"
            />
          </span>
        </div>
        <div className="forecast-secondary">
          <div className="visibility-container">
            <div className="visibility">
              <img
                src="/assets/icons/visibility.svg"
                alt="Visbility icon"
                className="visibility-icon secondary-icon"
              />
            </div>
            <span className="visibility-text">Visibility</span>
            <div className="visibility-temperature">
              {props.forecast.visibility} mi
            </div>
          </div>
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
              {props.forecast.feels_like}&deg;F
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
              {props.forecast.humidity}&#37;
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
