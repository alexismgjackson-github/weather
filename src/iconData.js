// Function that returns the appropriate weather icon path based on weather description text
const getWeatherIcon = (text) => {
  switch (text) {
    // Clear or sunny weather
    case "Sunny":
      return "/assets/icons/sunny.svg";
    case "Clear":
      return "/assets/icons/sunny.svg";

    // Partly to fully cloudy conditions
    case "Partly cloudy":
    case "Partly Cloudy":
    case "Cloudy":
    case "Overcast":
      return "/assets/icons/cloudy.svg";

    // Mist or fog
    case "Mist":
      return "/assets/icons/misty.svg";

    // Light to moderate rain conditions
    case "Patchy rain possible":
    case "Patchy freezing drizzle possible":
    case "Patchy light drizzle":
    case "Light drizzle":
    case "Freezing drizzle":
    case "Heavy freezing drizzle":
    case "Patchy light rain":
    case "Patchy rain nearby":
    case "Light rain":
    case "Moderate rain at times":
    case "Moderate rain":
    case "Heavy rain at times":
    case "Heavy rain":
    case "Light freezing rain":
    case "Moderate or heavy freezing rain":
    case "Light rain shower":
    case "Moderate or heavy rain shower":
      return "/assets/icons/rainy.svg";

    // Thunderstorm-related conditions
    case "Thundery outbreaks possible":
    case "Torrential rain shower":
    case "Patchy light rain with thunder":
      return "/assets/icons/storm.svg";

    // Snow and snow-related weather
    case "Patchy snow possible":
    case "Blowing snow":
    case "Blizzard":
    case "Patchy light snow":
    case "Light snow":
    case "Patchy moderate snow":
    case "Moderate snow":
    case "Patchy heavy snow":
    case "Light snow showers":
    case "Moderate or heavy snow showers":
    case "Patchy light snow with thunder":
    case "Moderate or heavy snow with thunder":
      return "/assets/icons/snowy.svg";

    // One snow label maps to rainy icon (possibly intentional or needs review)
    case "Heavy snow":
      return "/assets/icons/rainy.svg";

    // Sleet and related conditions
    case "Patchy sleet possible":
    case "Light sleet":
      return "/assets/icons/rainy.svg";
    case "Moderate or heavy sleet":
      return "/assets/icons/sleet.svg";
    case "Light sleet showers":
    case "Moderate or heavy sleet showers":
      return "/assets/icons/snowy.svg";

    // Foggy conditions
    case "Fog":
    case "Freezing fog":
      return "/assets/icons/foggy.svg";

    // Ice pellets (hail-like)
    case "Ice pellets":
    case "Light showers of ice pellets":
    case "Moderate or heavy showers of ice pellets":
      return "/assets/icons/pellets.svg";

    // Thunderstorms with rain or snow
    case "Moderate or heavy rain with thunder":
      return "/assets/icons/snowy.svg";

    // Default case for unrecognized weather descriptions
    default:
      return null;
  }
};

export default getWeatherIcon;
