import "./Main.css";

export default function Main() {
  return (
    <>
      <main>
        <section className="city-input-container">
          <form className="city-input-form">
            <input
              type="text"
              className="city-input"
              placeholder="Type in a city..."
              aria-label="Type in a city to get the weather forecast"
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
            <p className="length">4 total cities found</p>
          </span>
          <ul className="forecast-list">
            <li className="forecast-card">
              <div className="forecast-header">
                <span className="city-name">Orlando</span>
                <span className="city-time">10:44 am</span>
              </div>
              <div className="forecast-primary">
                <div className="forecast-primary-temperature-and-description">
                  <span className="forecast-temperature">72F</span>
                  <span className="forecast-description">Sunny</span>
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
                <div className="air-quality-container">
                  <div className="air-quality">
                    <img
                      src="/assets/icons/air-quality.svg"
                      alt="Air quality icon"
                      className="air-quality-icon secondary-icon"
                    />
                  </div>
                  <span className="air-quality-text">Air quality</span>
                  <div className="air-quality-temperature">20 Good</div>
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
                  <div className="feels-like-temperature">74F</div>
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
                  <div className="humidity-percentage">55%</div>
                </div>
              </div>
            </li>
            <li className="forecast-card">
              <div className="forecast-header">
                <span className="city-name">New York</span>
                <span className="city-time">10:44 am</span>
              </div>
              <div className="forecast-primary">
                <div className="forecast-primary-temperature-and-description">
                  <span className="forecast-temperature">47F</span>
                  <span className="forecast-description">Cloudy</span>
                </div>
                <span className="forecast-condition">
                  <img
                    src="/assets/icons/cloudy.svg"
                    alt="Current weather icon"
                    className="forecast-condition-icon"
                  />
                </span>
              </div>
              <div className="forecast-secondary">
                <div className="air-quality-container">
                  <div className="air-quality">
                    <img
                      src="/assets/icons/air-quality.svg"
                      alt="Air quality icon"
                      className="air-quality-icon secondary-icon"
                    />
                  </div>
                  <span className="air-quality-text">Air quality</span>
                  <div className="air-quality-temperature">30 Good</div>
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
                  <div className="feels-like-temperature">39F</div>
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
                  <div className="humidity-percentage">84%</div>
                </div>
              </div>
            </li>
            <li className="forecast-card">
              <div className="forecast-header">
                <span className="city-name">Seattle</span>
                <span className="city-time">7:44 am</span>
              </div>
              <div className="forecast-primary">
                <div className="forecast-primary-temperature-and-description">
                  <span className="forecast-temperature">42F</span>
                  <span className="forecast-description">Rainy</span>
                </div>
                <span className="forecast-condition">
                  <img
                    src="/assets/icons/rainy.svg"
                    alt="Current weather icon"
                    className="forecast-condition-icon"
                  />
                </span>
              </div>
              <div className="forecast-secondary">
                <div className="air-quality-container">
                  <div className="air-quality">
                    <img
                      src="/assets/icons/air-quality.svg"
                      alt="Air quality icon"
                      className="air-quality-icon secondary-icon"
                    />
                  </div>
                  <span className="air-quality-text">Air quality</span>
                  <div className="air-quality-temperature">39 Good</div>
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
                  <div className="feels-like-temperature">31F</div>
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
                  <div className="humidity-percentage">87%</div>
                </div>
              </div>
            </li>
            <li className="forecast-card">
              <div className="forecast-header">
                <span className="city-name">Tokyo</span>
                <span className="city-time">11:44 am</span>
              </div>
              <div className="forecast-primary">
                <div className="forecast-primary-temperature-and-description">
                  <span className="forecast-temperature">42F</span>
                  <span className="forecast-description">Mostly Clear</span>
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
                <div className="air-quality-container">
                  <div className="air-quality">
                    <img
                      src="/assets/icons/air-quality.svg"
                      alt="Air quality icon"
                      className="air-quality-icon secondary-icon"
                    />
                  </div>
                  <span className="air-quality-text">Air quality</span>
                  <div className="air-quality-temperature">43 Good</div>
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
                  <div className="feels-like-temperature">41F</div>
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
                  <div className="humidity-percentage">81%</div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
