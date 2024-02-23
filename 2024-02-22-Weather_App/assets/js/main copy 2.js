const city_name = document.querySelector("#inputCity");

// Outputs - Classes
const cityInfo = document.querySelector(".city-info");
const dateTime = document.querySelector(".date-time");
const cloudiness = document.querySelector(".cloudiness");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".windspeed");
const forecast = document.querySelector(".forecast-grid");

// Forecast - divs
const dayOne = document.querySelector(".d-one");
const dayTwo = document.querySelector(".d-two");
const dayThree = document.querySelector(".d-three");
const dayFour = document.querySelector(".d-four");
const dayFive = document.querySelector(".d-five");

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

// Forecast p
let weekdayOne = document.createElement("p");
let weekIconOne = document.createElement("img");
weekIconOne.setAttribute("class", "forecastIcon");
let weekTempOne = document.createElement("p");

let weekdayTwo = document.createElement("p");
let weekIconTwo = document.createElement("img");
weekIconTwo.setAttribute("class", "forecastIcon");
let weekTempTwo = document.createElement("p");

let weekdayThree = document.createElement("p");
let weekIconThree = document.createElement("img");
weekIconThree.setAttribute("class", "forecastIcon");
let weekTempThree = document.createElement("p");

let weekdayFour = document.createElement("p");
let weekIconFour = document.createElement("img");
weekIconFour.setAttribute("class", "forecastIcon");
let weekTempFour = document.createElement("p");

let weekdayFive = document.createElement("p");
let weekIconFive = document.createElement("img");
weekIconFive.setAttribute("class", "forecastIcon");
let weekTempFive = document.createElement("p");

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

        // button eventListener -> currentweather(.....)
        // button home eventlistener -> mylocation()
        currentWeather(lat, lon, name);
      });
    })
    .catch((error) => console.log("Geocoding API Error", error));
};

// ! Function For Icons
const weatherIcons = (weatherStatus, iconPosition, location, temp) => {
  switch (weatherStatus) {
    case "Rain":
      iconPosition.setAttribute("src", "./assets/img/rain.svg");
      location.appendChild(iconPosition);
      break;
    case "Drizzle":
      iconPosition.setAttribute("src", "./assets/img/drizzkle.svg");
      location.appendChild(iconPosition);
      break;
    case "Snow":
      iconPosition.setAttribute("src", "./assets/img/snow.svg");
      location.appendChild(iconPosition);
      break;
    case "Clear":
      temp < 30
        ? iconPosition.setAttribute("src", "./assets/img/Sunny.svg")
        : iconPosition.setAttribute("src", "./assets/img/Sun-overheating.svg");
      location.appendChild(iconPosition);
      break;
    case "Clouds":
      iconPosition.setAttribute("src", "./assets/img/sun-with-cloud.svg");
      location.appendChild(iconPosition);
      break;
    case "Thunderstorm":
      iconPosition.setAttribute("src", "./assets/img/thunder.svg");
      location.appendChild(iconPosition);
      break;

    default:
      iconPosition.setAttribute("src", "./assets/img/mist.svg");
      location.appendChild(iconPosition);
  }
};

// ! User Information
const myWeatherData = (lat, lon) => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=13b6943af84bbae5e56e1975752bc696
    `
  )
    .then((res) => res.json())
    .then((myData) => {
      currentWeather(lat, lon, myData[0].name);
    });
};
const myPosition = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let myPositionLat = position.coords.latitude;
    let myPositionLon = position.coords.longitude;
    myWeatherData(myPositionLat, myPositionLon);
  });
};
myPosition();

// ! Funktionsaufruf suche
const currentWeather = (lat, lon, name) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=13b6943af84bbae5e56e1975752bc696`
  )
    .then((res) => res.json())
    .then((weatherData) => {
      // ! ==== city-info ====
      // : City Name

      cityName.textContent = name;
      cityInfo.appendChild(cityName);

      // : Weather Description

      description.textContent = weatherData.weather[0].description;
      cityInfo.appendChild(description);

      // : Weather Icon
      let weatherStatus = weatherData.weather[0].main;

      weatherIcons(weatherStatus, weatherIcon, cityInfo, weatherData.main.temp);

      // : Temperature
      temperature.textContent = Math.round(weatherData.main.temp);

      // ! ==== Date and Time ====

      // day night mit getHours und dann vergleichen mit sunset get hours
      fetch(
        `https://api-bdc.net/data/timezone-by-location?latitude=${lat}&longitude=${lon}&key=bdc_1d040483f7a745a39f885c41502d07c0`
      )
        .then((res) => res.json())
        .then((data) => {
          // # In eine Funktion auslagern mit parametern
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
          let sunrise = (weatherData.sys.sunrise + weatherData.timezone) * 1000; // -1
          let sunriseLocal = new Date(sunrise);

          let sunset = (weatherData.sys.sunset + weatherData.timezone) * 1000;
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
                  ? weatherIcon.setAttribute("src", "./assets/img/Sunny.svg")
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
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=13b6943af84bbae5e56e1975752bc696
        `
      )
        .then((res) => res.json())
        .then((castData) => {
          console.log(castData.list);

          // : Weekdays
          let one = castData.list[7].dt * 1000;
          let firstDay = new Date(one);

          weekdayOne.textContent = firstDay.toLocaleString("default", {
            weekday: "short",
          });
          dayOne.appendChild(weekdayOne);

          let two = castData.list[15].dt * 1000;
          let secondDay = new Date(two);

          weekdayTwo.textContent = secondDay.toLocaleString("default", {
            weekday: "short",
          });

          dayTwo.appendChild(weekdayTwo);

          let three = castData.list[23].dt * 1000;
          let thirdDay = new Date(three);

          weekdayThree.textContent = thirdDay.toLocaleString("default", {
            weekday: "short",
          });

          dayThree.appendChild(weekdayThree);

          let four = castData.list[31].dt * 1000;
          let fourthDay = new Date(four);

          weekdayFour.textContent = fourthDay.toLocaleString("default", {
            weekday: "short",
          });

          dayFour.appendChild(weekdayFour);

          let five = castData.list[39].dt * 1000;
          let fifthDay = new Date(five);

          weekdayFive.textContent = fifthDay.toLocaleString("default", {
            weekday: "short",
          });

          dayFive.appendChild(weekdayFive);

          // # INSERT ICON
          weatherIcons(
            castData.list[7].weather[0].main,
            weekIconOne,
            dayOne,
            castData.list[7].main.temp
          );
          weatherIcons(
            castData.list[15].weather[0].main,
            weekIconTwo,
            dayTwo,
            castData.list[15].main.temp
          );
          weatherIcons(
            castData.list[23].weather[0].main,
            weekIconThree,
            dayThree,
            castData.list[23].main.temp
          );
          weatherIcons(
            castData.list[31].weather[0].main,
            weekIconFour,
            dayFour,
            castData.list[31].main.temp
          );
          weatherIcons(
            castData.list[39].weather[0].main,
            weekIconFive,
            dayFive,
            castData.list[39].main.temp
          );

          // : Temperatur
          weekTempOne.textContent =
            Math.round(castData.list[7].main.temp) + "°";

          dayOne.appendChild(weekTempOne);

          weekTempTwo.textContent =
            Math.round(castData.list[15].main.temp) + "°";

          dayTwo.appendChild(weekTempTwo);

          weekTempThree.textContent =
            Math.round(castData.list[23].main.temp) + "°";

          dayThree.appendChild(weekTempThree);

          weekTempFour.textContent =
            Math.round(castData.list[31].main.temp) + "°";

          dayFour.appendChild(weekTempFour);

          weekTempFive.textContent =
            Math.round(castData.list[39].main.temp) + "°";

          dayFive.appendChild(weekTempFive);

          // --------------------------------------------------
          console.log(Math.round(castData.list[2].main.temp));
        })
        .catch((err) => console.log("problem mit forecast", err));
    })
    .catch((error) => console.log("Current Weather API Error", error));
};
