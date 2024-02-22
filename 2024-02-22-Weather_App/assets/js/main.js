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

            // ! ==== Sunset / Sunrise ====
            // # ONLY MY TIMEZONE - API needed
            let testset = weatherData.sys.sunrise * 1000;
            let sunset = new Date(testset);
            console.log(sunset.toLocaleTimeString());

            // ! ==== city-info ====
            // : City Name

            cityName.textContent = name;
            cityInfo.appendChild(cityName);

            // : Weather Description

            description.textContent = weatherData.weather[0].description;
            cityInfo.appendChild(description);

            // : Weather Icon
            // # DAY NIGHT ICONS WITH TIME API PLS
            let weatherStatus = weatherData.weather[0].main;

            switch (weatherStatus) {
              case "Rain":
                weatherIcon.setAttribute("src", "./assets/img/rain.svg");
                cityInfo.appendChild(weatherIcon);
                break;
              case "Drizzle":
                weatherIcon.setAttribute("src", "./assets/img/drizzkle.svg");
                cityInfo.appendChild(weatherIcon);
                break;
              case "Snow":
                weatherIcon.setAttribute("src", "./assets/img/snow.svg");
                cityInfo.appendChild(weatherIcon);
                break;
              case "Clear":
                weatherData.main.temp < 20
                  ? weatherIcon.setAttribute("src", "./assets/img/Sunny.svg")
                  : weatherIcon.setAttribute(
                      "src",
                      "./assets/img/Sun-overheating.svg"
                    );
                cityInfo.appendChild(weatherIcon);
                break;
              case "Clouds":
                weatherIcon.setAttribute(
                  "src",
                  "./assets/img/sun-with-cloud.svg"
                );
                cityInfo.appendChild(weatherIcon);
                break;
              case "Thunderstorm":
                weatherIcon.setAttribute("src", "./assets/img/thunder.svg");
                cityInfo.appendChild(weatherIcon);
                break;

              default:
                weatherIcon.setAttribute("src", "./assets/img/mist.svg");
                cityInfo.appendChild(weatherIcon);
            }

            // : Temperature
            temperature.textContent = Math.round(weatherData.main.temp);
            cityInfo.appendChild(temperature);

            // ! ==== Date and Time ====
            // # LOCAL DATE TIME API INSERT
            // - currently just my local time and date - until new API FETCH
            let myDate = new Date();
            date.textContent = `${myDate.getDate()} ${myDate.toLocaleString(
              "default",
              { month: "long" }
            )} ${myDate.getFullYear()}`;

            setInterval(() => {
              let myTime = new Date();
              time.textContent = myTime.toLocaleTimeString();
              dateTime.appendChild(date);
              dateTime.appendChild(time);
            }, 1000);

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

            // # INSERT FORECAST
          })
          .catch((error) => console.log("Current Weather API Error", error));
      });
    })
    .catch((error) => console.log("Geocoding API Error", error));
};
