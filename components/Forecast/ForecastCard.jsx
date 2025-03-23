import "./ForecastCard.css";

export default function ForecastCard(props) {
  const getWeatherIcon = (text) => {
    switch (text) {
      case "Sunny":
        return "/assets/icons/sunny.svg";
      case "Clear":
        return "/assets/icons/sunny.svg";
      case "Partly cloudy":
        return "/assets/icons/cloudy.svg";
      case "Cloudy":
        return "/assets/icons/cloudy.svg";
      case "Overcast":
        return "/assets/icons/cloudy.svg";
      case "Mist":
        return "/assets/icons/misty.svg";
      case "Patchy rain possible":
        return "/assets/icons/rainy.svg";
      case "Patchy snow possible":
        return "/assets/icons/snowy.svg";
      case "Patchy sleet possible":
        return "/assets/icons/sleet.svg";
      case "Patchy freezing drizzle possible":
        return "/assets/icons/rainy.svg";
      case "Thundery outbreaks possible":
        return "/assets/icons/storm.svg";
      case "Blowing snow":
        return "/assets/icons/snowy.svg";
      case "Blizzard":
        return "/assets/icons/snowy.svg";
      case "Fog":
        return "/assets/icons/foggy.svg";
      case "Freezing fog":
        return "/assets/icons/foggy.svg";
      case "Patchy light drizzle":
        return "/assets/icons/rainy.svg";
      case "Light drizzle":
        return "/assets/icons/rainy.svg";
      case "Freezing drizzle":
        return "/assets/icons/rainy.svg";
      case "Heavy freezing drizzle":
        return "/assets/icons/rainy.svg";
      case "Patchy light rain":
        return "/assets/icons/rainy.svg";
      case "Light rain":
        return "/assets/icons/rainy.svg";
      case "Moderate rain at times":
        return "/assets/icons/rainy.svg";
      case "Moderate rain":
        return "/assets/icons/rainy.svg";
      case "Heavy rain at times":
        return "/assets/icons/rainy.svg";
      case "Heavy rain":
        return "/assets/icons/rainy.svg";
      case "Light freezing rain":
        return "/assets/icons/rainy.svg";
      case "Moderate or heavy freezing rain":
        return "/assets/icons/rainy.svg";
      case "Light sleet":
        return "/assets/icons/rainy.svg";
      case "Moderate or heavy sleet":
        return "/assets/icons/sleet.svg";
      case "Patchy light snow":
        return "/assets/icons/snowy.svg";
      case "Light snow":
        return "/assets/icons/snowy.svg";
      case "Patchy moderate snow":
        return "/assets/icons/snowy.svg";
      case "Moderate snow":
        return "/assets/icons/snowy.svg";
      case "Patchy heavy snow":
        return "/assets/icons/snowy.svg";
      case "Heavy snow":
        return "/assets/icons/rainy.svg";
      case "Ice pellets":
        return "/assets/icons/pellets.svg";
      case "Light rain shower":
        return "/assets/icons/rain.svg";
      case "Moderate or heavy rain shower":
        return "/assets/icons/rainy.svg";
      case "Torrential rain shower":
        return "/assets/icons/storm.svg";
      case "Light sleet showers":
        return "/assets/icons/snowy.svg";
      case "Moderate or heavy sleet showers":
        return "/assets/icons/snowy.svg";
      case "Light snow showers":
        return "/assets/icons/snowy.svg";
      case "Moderate or heavy snow showers":
        return "/assets/icons/snowy.svg";
      case "Light showers of ice pellets":
        return "/assets/icons/pellets.svg";
      case "Moderate or heavy showers of ice pellets":
        return "/assets/icons/pellets.svg";
      case "Patchy light rain with thunder":
        return "/assets/icons/storm.svg";
      case "Moderate or heavy rain with thunder":
        return "/assets/icons/snowy.svg";
      case "Patchy light snow with thunder":
        return "/assets/icons/snowy.svg";
      case "Moderate or heavy snow with thunder":
        return "/assets/icons/snowy.svg";
      default:
        return null;
    }
  };

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
              src={getWeatherIcon(props.forecast.text)}
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
