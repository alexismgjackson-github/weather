import { useState } from "react";
import ForecastCard from "../../components/Forecast/ForecastCard.jsx";
import "./Main.css";

export default function Main() {
  const [city, setCity] = useState("");
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputMessage, setInputMessage] = useState("");
  const apiKey = import.meta.env.VITE_FORECAST_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const fetchCityForecast = (event) => {
    event.preventDefault();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setInputMessage("Please enter a valid city");
          setLoading(false);
        } else {
          console.log(data);
          setForecastData((prevData) => [
            {
              city: data.location.name,
              temperature: data.current.temp_f,
              text: data.current.condition.text,
              feels_like: data.current.feelslike_f,
              visibility: data.current.vis_miles,
              humidity: data.current.humidity,
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

  return (
    <>
      <main>
        <section className="city-input-container">
          <form
            className="city-input-form"
            id="city-input-form"
            onSubmit={fetchCityForecast}
          >
            <span className="input-message">{inputMessage}</span>
            <input
              type="text"
              className="city-input"
              placeholder="Type in a city..."
              aria-label="Type in a city to get the weather forecast"
              onChange={handleInputChange}
              value={city}
              required
            />
            <button
              className="city-input-btn"
              aria-label="Search the city's weather forecast"
            >
              Search
            </button>
          </form>
        </section>
        <section className="forecast-list-container">
          <span className="forecast-list-length">
            <p className="length">{forecastData.length} total cities found</p>
          </span>
          <ul className="forecast-list">
            {forecastData.map((forecast, index) => (
              <ForecastCard key={index} forecast={forecast} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
