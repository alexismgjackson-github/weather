import WeatherCard from "../Weather/WeatherCard.jsx"; // Imports the WeatherCard component
import "./Main.css"; // Imports styles specific to the Main component

// Main component to handle city input and display list of weather cards
export default function Main(props) {
  return (
    <>
      <main>
        {/* Section for city search form */}
        <section className="city-input-container">
          <form
            className="city-input-form"
            id="city-input-form"
            onSubmit={props.fetchCityWeather} // Function to fetch weather on form submit
          >
            {/* Feedback message below the input field */}
            <span className="input-message">{props.inputMessage}</span>

            {/* City input field */}
            <input
              type="text"
              className="city-input"
              placeholder="Type in a city here..."
              aria-label="Type in a city here to get it's realtime weather"
              onChange={props.handleInputChange} // Handle typing input
              value={props.city} // Controlled input value
              required
            />

            {/* Search button to submit the form */}
            <button
              className="city-input-btn"
              aria-label="Get the city's realtime weather"
            >
              Search
            </button>
          </form>
        </section>

        {/* Section to display weather data for searched cities */}
        <section className="weather-list-container">
          {/* Displays number of cities currently in the list */}
          <span className="weather-list-length">
            <p className="length">
              {props.weatherData.length} total cities found
            </p>
          </span>

          {/* Render a WeatherCard component for each city's weather data */}
          <ul className="weather-list">
            {props.weatherData.map((weather) => (
              <WeatherCard
                key={weather.id} // Unique key for each WeatherCard
                weather={weather} // Passes the weather data to the card
                deleteWeather={props.deleteWeather} // Function to remove a city
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
