const city_name = document.querySelector("#inputCity");

// Outputs
const cityInfo = document.querySelector(".city-info");

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

            let cityName = document.createElement("p");

            cityName.textContent = name;
            cityInfo.appendChild(cityName);
          })
          .catch((error) => console.log("Current Weather API Error", error));
      });
    })
    .catch((error) => console.log("Geocoding API Error", error));
};
