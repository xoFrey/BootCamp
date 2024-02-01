function airQuality() {
  const airValue = Number(document.querySelector("#airquality").value);
  const airValueNumber = document.querySelector(".number");
  airValueNumber.innerHTML = airValue;
  const bgColor = document.querySelector(".wrapper");
  const levelHealth = document.querySelector("div");

  if (airValue <= 50) {
    bgColor.style.backgroundColor = "green";

    levelHealth.innerHTML = "<h2> Level of health concern: Good</h2>";
    levelHealth.innerHTML +=
      "<h2> Level of health concern: Little or no Risk</h2>";
  } else if (airValue > 50 && airValue <= 100) {
    levelHealth.innerHTML = "<h2> Level of health concern: Moderate</h2>";
    levelHealth.innerHTML +=
      "<h2> Level of health concern: Acceptable quality</h2>";

    bgColor.style.backgroundColor = "orange";
  } else if (airValue > 100 && airValue <= 150) {
    levelHealth.innerHTML = "<h2> Level of health concern: Unhealthy</h2>";
    levelHealth.innerHTML +=
      "<h2> Level of health concern: Generable publics not likely affected</h2>";

    bgColor.style.backgroundColor = "red";
  } else {
    levelHealth.innerHTML = "<h2> Error: Can't measure air quality! </h2>";
  }
}
