import WeatherCard from "../Weather/WeatherCard.jsx";
import "./Main.css";

export default function Main(props) {
  return (
    <>
      <main>
        <section className="city-input-container">
          <form
            className="city-input-form"
            id="city-input-form"
            onSubmit={props.fetchCityWeather}
          >
            <span className="input-message">{props.inputMessage}</span>
            <input
              type="text"
              className="city-input"
              placeholder="Type in a city here..."
              aria-label="Type in a city here to get it's realtime weather"
              onChange={props.handleInputChange}
              value={props.city}
              required
            />
            <button
              className="city-input-btn"
              aria-label="Get the city's realtime weather"
            >
              Search
            </button>
          </form>
        </section>
        <section className="weather-list-container">
          <span className="weather-list-length">
            <p className="length">
              {props.weatherData.length} total cities found
            </p>
          </span>
          <ul className="weather-list">
            {props.weatherData.map((weather) => (
              <WeatherCard
                key={weather.id}
                weather={weather}
                deleteWeather={props.deleteWeather}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
