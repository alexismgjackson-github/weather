import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import WeatherCard from "../Weather/WeatherCard.jsx";
import "./Main.css";

export default function Main() {
  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState(
    localStorage.getItem("weather")
      ? JSON.parse(localStorage.getItem("weather"))
      : []
  );

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [inputMessage, setInputMessage] = useState("");

  const apiKey = import.meta.env.VITE_FORECAST_API_KEY;

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const fetchCityWeather = (event) => {
    event.preventDefault();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setInputMessage("Please enter a valid city");
          setLoading(false);
        } else {
          console.log(data);
          setWeatherData((prevData) => [
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

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const deleteWeather = (id) => {
    setWeatherData(weatherData.filter((weather) => weather.id !== id));
  };

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
