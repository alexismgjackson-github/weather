export default function getWeatherIcon(text) {
  switch (text) {
    case "Sunny":
      return "./assets/icons/sunny.svg";
    case "Partly cloudy":
      return "./assets/icons/cloudy.svg";
    case "Cloudy":
      return "./assets/icons/cloudy.svg";
    case "Overcast":
      return "./assets/icons/cloudy.svg";
    case "Mist":
      return "./assets/icons/misty.svg";
    case "Patchy rain possible":
      return "./assets/icons/rainy.svg";
    case "Patchy snow possible":
      return "./assets/icons/snowy.svg";
    case "Patchy sleet possible":
      return "./assets/icons/sleet.svg";
    case "Patchy freezing drizzle possible":
      return "./assets/icons/rainy.svg";
    case "Thundery outbreaks possible":
      return "./assets/icons/storm.svg";
    case "Blowing snow":
      return "./assets/icons/snowy.svg";
    case "Blizzard":
      return "./assets/icons/snowy.svg";
    case "Fog":
      return "./assets/icons/foggy.svg";
    case "Freezing fog":
      return "./assets/icons/foggy.svg";
    case "Patchy light drizzle":
      return "./assets/icons/rainy.svg";
    case "Light drizzle":
      return "./assets/icons/rainy.svg";
    case "Freezing drizzle":
      return "./assets/icons/rainy.svg";
    case "Heavy freezing drizzle":
      return "./assets/icons/rainy.svg";
    case "Patchy light rain":
      return "./assets/icons/rainy.svg";
    case "Light rain":
      return "./assets/icons/rainy.svg";
    case "Moderate rain at times":
      return "./assets/icons/rainy.svg";
    case "Moderate rain":
      return "./assets/icons/rainy.svg";
    case "Heavy rain at times":
      return "./assets/icons/rainy.svg";
    case "Heavy rain":
      return "./assets/icons/rainy.svg";
    case "Light freezing rain":
      return "./assets/icons/rainy.svg";
    case "Moderate or heavy freezing rain":
      return "./assets/icons/rainy.svg";
    case "Light sleet":
      return "./assets/icons/rainy.svg";
    case "Moderate or heavy sleet":
      return "./assets/icons/sleet.svg";
    case "Patchy light snow":
      return "./assets/icons/snowy.svg";
    case "Light snow":
      return "./assets/icons/snowy.svg";
    case "Patchy moderate snow":
      return "./assets/icons/snowy.svg";
    case "Moderate snow":
      return "./assets/icons/snowy.svg";
    case "Patchy heavy snow":
      return "./assets/icons/snowy.svg";
    case "Heavy snow":
      return "./assets/icons/rainy.svg";
    case "Ice pellets":
      return "./assets/icons/pellets.svg";
    case "Light rain shower":
      return "./assets/icons/rain.svg";
    case "Moderate or heavy rain shower":
      return "./assets/icons/rainy.svg";
    case "Torrential rain shower":
      return "./assets/icons/storm.svg";
    case "Light sleet showers":
      return "./assets/icons/snowy.svg";
    case "Moderate or heavy sleet showers":
      return "./assets/icons/snowy.svg";
    case "Light snow showers":
      return "./assets/icons/snowy.svg";
    case "Moderate or heavy snow showers":
      return "./assets/icons/snowy.svg";
    case "Light showers of ice pellets":
      return "./assets/icons/pellets.svg";
    case "Moderate or heavy showers of ice pellets":
      return "./assets/icons/pellets.svg";
    case "Patchy light rain with thunder":
      return "./assets/icons/storm.svg";
    case "Moderate or heavy rain with thunder":
      return "./assets/icons/snowy.svg";
    case "Moderate or heavy sleet showers":
      return "./assets/icons/sleet.svg";
    case "Patchy light snow with thunder":
      return "./assets/icons/snowy.svg";
    case "Moderate or heavy snow with thunder":
      return "./assets/icons/snowy.svg";
    default:
      return null;
  }
}
