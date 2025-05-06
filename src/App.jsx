import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // UUID for uniquely identifying weather entries
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";

// Root component of the application
export default function App() {
  // State for user-inputted city
  const [city, setCity] = useState("");

  // Weather data from localStorage (if available), or an empty array
  const [weatherData, setWeatherData] = useState(
    localStorage.getItem("weather")
      ? JSON.parse(localStorage.getItem("weather"))
      : []
  );

  // Loading state to indicate if fetch is in progress
  const [loading, setLoading] = useState(true);

  // Error state to store fetch errors
  const [error, setError] = useState(null);

  // Message shown below the input box (e.g., validation error)
  const [inputMessage, setInputMessage] = useState("");

  // API key for weather API (stored in environment variable)
  const apiKey = import.meta.env.VITE_FORECAST_API_KEY;

  // Weather API URL for the given city
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  // Form submission handler to fetch weather data
  const fetchCityWeather = (event) => {
    event.preventDefault(); // Prevent default form submission

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          // Show error message if city is invalid
          setInputMessage("Please enter a valid city");
          setLoading(false);
        } else {
          // Add new weather data to the top of the array
          setWeatherData((prevData) => [
            {
              location: data.location.name,
              fahrenheit: data.current.temp_f,
              text: data.current.condition.text,
              feels_like: data.current.feelslike_f,
              visibility: data.current.vis_miles,
              humidity: data.current.humidity,
              id: uuidv4(), // Assign unique ID to each weather entry
            },
            ...prevData,
          ]);
          setLoading(false);
        }
      })
      .catch((error) => {
        // Handle fetch/network errors
        setError(error);
        setLoading(false);
      });

    // Reset input field and message after submission
    setCity("");
    setInputMessage("");
  };

  // Update city state as user types
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  // Remove a city's weather data by its ID
  const deleteWeather = (id) => {
    setWeatherData(weatherData.filter((weather) => weather.id !== id));
  };

  // Save weather data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weatherData));
  }, [weatherData]);

  // Render Header and Main components, passing necessary props
  return (
    <>
      <Header />
      <Main
        fetchCityWeather={fetchCityWeather}
        weatherData={weatherData}
        city={city}
        inputMessage={inputMessage}
        handleInputChange={handleInputChange}
        deleteWeather={deleteWeather}
      />
    </>
  );
}
