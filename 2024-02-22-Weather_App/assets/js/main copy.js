const city_name = document.querySelector("#inputCity");

// Outputs - Classes
const cityInfo = document.querySelector(".city-info");
const dateTime = document.querySelector(".date-time");
const cloudiness = document.querySelector(".cloudiness");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".windspeed");

// Output - Infos
let cityName = document.createElement("p");
let description = document.createElement("h4");
let weatherIcon = document.createElement("img");
let temperature = document.createElement("h2");
let date = document.createElement("p");
let time = document.createElement("p");
let cloudsPercentage = document.createElement("p");
let clouds = document.createElement("p");
let humidPercentage = document.createElement("p");
let humid = document.createElement("p");
let windMS = document.createElement("p");
let wind = document.createElement("p");

const weatherData = () => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city_name.value}&appid=13b6943af84bbae5e56e1975752bc696
  `
  )
    .then((res) => res.json())
    .then((data) => {
      // Funktionsaufruf mit parameter für lat lon name
      console.log(data);
      data.forEach((item) => {
        let lat = item.lat;
        let lon = item.lon;
        let name = item.name;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=13b6943af84bbae5e56e1975752bc696`
        )
          .then((res) => res.json())
          .then((weatherData) => {
            console.log(weatherData);

            // ! ==== city-info ====
            // : City Name

            cityName.textContent = name;
            cityInfo.appendChild(cityName);

            // : Weather Description

            description.textContent = weatherData.weather[0].description;
            cityInfo.appendChild(description);

            // : Weather Icon
            let weatherStatus = weatherData.weather[0].main;

            weatherIcons(weatherStatus, cityInfo, weatherData.main.temp);

            // : Temperature
            temperature.textContent = Math.round(weatherData.main.temp);

            // ! ==== Date and Time ====

            // day night mit getHours und dann vergleichen mit sunset get hours
            fetch(
              `https://api-bdc.net/data/timezone-by-location?latitude=${lat}&longitude=${lon}&key=bdc_1d040483f7a745a39f885c41502d07c0`
            )
              .then((res) => res.json())
              .then((data) => {
                let iso = data.localTime;
                let localDate = new Date(iso);

                date.textContent = `${localDate.getDate()} ${localDate.toLocaleString(
                  "default",
                  { month: "long" }
                )} ${localDate.getFullYear()}`;

                time.textContent = localDate.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });

                dateTime.appendChild(date);
                dateTime.appendChild(time);

                // ! ==== Sunrise / Sunset und weather icons day night ====
                let getHoursLocal;
                let getHoursSunrise;
                let getHoursSunset;
                let sunrise =
                  (weatherData.sys.sunrise + weatherData.timezone) * 1000; // -1
                let sunriseLocal = new Date(sunrise);

                let sunset =
                  (weatherData.sys.sunset + weatherData.timezone) * 1000;
                let sunsetLocal = new Date(sunset);
                // Sunset and sunrise hours
                getHoursSunset = sunsetLocal.getHours() - 1;
                getHoursSunrise = sunriseLocal.getHours() - 1;
                getHoursLocal = localDate.getHours();

                switch (weatherStatus) {
                  case "Clear":
                    if (getHoursLocal >= getHoursSunset) {
                      weatherIcon.setAttribute("src", "./assets/img/Moon.svg");
                      cityInfo.appendChild(weatherIcon);
                    } else {
                      weatherData.main.temp < 30
                        ? weatherIcon.setAttribute(
                            "src",
                            "./assets/img/Sunny.svg"
                          )
                        : weatherIcon.setAttribute(
                            "src",
                            "./assets/img/Sun-overheating.svg"
                          );
                      cityInfo.appendChild(weatherIcon);
                    }
                    break;
                  case "Clouds":
                    if (getHoursLocal >= getHoursSunset) {
                      weatherIcon.setAttribute(
                        "src",
                        "./assets/img/moon-with-cloud.svg"
                      );
                      cityInfo.appendChild(weatherIcon);
                    } else {
                      weatherIcon.setAttribute(
                        "src",
                        "./assets/img/sun-with-cloud.svg"
                      );
                      cityInfo.appendChild(weatherIcon);
                    }
                    break;
                }

                cityInfo.appendChild(temperature);
              });

            // ! ==== Info - Box ====

            // : Cloudiness
            cloudsPercentage.textContent = weatherData.clouds.all + "%";
            clouds.textContent = "Cloudiness";
            cloudiness.appendChild(cloudsPercentage);
            cloudiness.appendChild(clouds);

            // : Humidity

            humidPercentage.textContent = weatherData.main.humidity + "%";
            humid.textContent = "Humidity";
            humidity.appendChild(humidPercentage);
            humidity.appendChild(humid);

            // : Windspeed

            windMS.textContent = weatherData.wind.speed + " m/s";
            wind.textContent = "Wind Speed";
            windSpeed.appendChild(windMS);
            windSpeed.appendChild(wind);

            // ! ==== INSERT FORECAST ====
            fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=13b6943af84bbae5e56e1975752bc696
              `
            )
              .then((res) => res.json())
              .then((castData) => {
                console.log(castData);
              })
              .catch((err) => console.log("problem mit forecast", err));
          })
          .catch((error) => console.log("Current Weather API Error", error));
      });
    })
    .catch((error) => console.log("Geocoding API Error", error));
};

// ! Function For Icons
const weatherIcons = (weatherStatus, location, temp) => {
  switch (weatherStatus) {
    case "Rain":
      weatherIcon.setAttribute("src", "./assets/img/rain.svg");
      location.appendChild(weatherIcon);
      break;
    case "Drizzle":
      weatherIcon.setAttribute("src", "./assets/img/drizzkle.svg");
      location.appendChild(weatherIcon);
      break;
    case "Snow":
      weatherIcon.setAttribute("src", "./assets/img/snow.svg");
      location.appendChild(weatherIcon);
      break;
    case "Clear":
      temp < 30
        ? weatherIcon.setAttribute("src", "./assets/img/Sunny.svg")
        : weatherIcon.setAttribute("src", "./assets/img/Sun-overheating.svg");
      location.appendChild(weatherIcon);
      break;
    case "Clouds":
      weatherIcon.setAttribute("src", "./assets/img/sun-with-cloud.svg");
      location.appendChild(weatherIcon);
      break;
    case "Thunderstorm":
      weatherIcon.setAttribute("src", "./assets/img/thunder.svg");
      location.appendChild(weatherIcon);
      break;

    default:
      weatherIcon.setAttribute("src", "./assets/img/mist.svg");
      location.appendChild(weatherIcon);
  }
};

navigator.geolocation.getCurrentPosition((position) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  console.log(lat, lon);
});
