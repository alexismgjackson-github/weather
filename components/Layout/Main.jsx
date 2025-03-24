import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import WeatherCard from "../Weather/WeatherCard.jsx";
import "./Main.css";

export default function Main() {
  const [city, setCity] = useState(""); // holds the name of the city that the user inputs to fetch weather data

  // holds an array of weather data for different cities
  // initializes with the data from localStorage (if it exists)
  // defaults to an empty array (if it does not exist)

  const [weatherData, setWeatherData] = useState(
    localStorage.getItem("weather")
      ? JSON.parse(localStorage.getItem("weather"))
      : []
  );

  const [loading, setLoading] = useState(true); // boolean to indicate whether the app is fetching weather data

  const [error, setError] = useState(null); // holds any error that occurs during the fetch operation

  const [inputMessage, setInputMessage] = useState(""); // holds a message for the form

  const apiKey = import.meta.env.VITE_FORECAST_API_KEY;

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  // fetches weather data from a weather API based on the user's input city

  const fetchCityWeather = (event) => {
    event.preventDefault();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setInputMessage("Please enter a valid city"); // if there is an error with fetching data, it displays this message
          setLoading(false);
        } else {
          console.log(data);
          setWeatherData((prevData) => [
            // updates the weatherData state with a new weather entry that is fetched
            {
              city: data.location.name,
              country: data.location.country,
              temperature: data.current.temp_f,
              text: data.current.condition.text,
              feels_like: data.current.feelslike_f,
              visibility: data.current.vis_miles,
              humidity: data.current.humidity,
              id: uuidv4(),
            },
            ...prevData,
          ]);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    setCity("");
    setInputMessage("");
  };

  // updates the city state with the current value of the input field

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  // functionality to delete a city's weather data from the displayed list

  const deleteWeather = (id) => {
    setWeatherData(weatherData.filter((weather) => weather.id !== id));
  };

  // makes the weather data persists in the browser even after page reload

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weatherData));
  }, [weatherData]);

  return (
    <>
      <main>
        <section className="city-input-container">
          <form
            className="city-input-form"
            id="city-input-form"
            onSubmit={fetchCityWeather}
          >
            <span className="input-message">{inputMessage}</span>
            <input
              type="text"
              className="city-input"
              placeholder="Type in a city..."
              aria-label="Type in a city to get the realtime weather"
              onChange={handleInputChange}
              value={city}
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
            <p className="length">{weatherData.length} total cities found</p>
          </span>
          <ul className="weather-list">
            {weatherData.map((weather) => (
              <WeatherCard
                key={weather.id}
                weather={weather}
                deleteWeather={deleteWeather}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
