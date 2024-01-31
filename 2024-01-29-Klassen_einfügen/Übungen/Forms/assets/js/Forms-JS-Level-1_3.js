function getValue(event) {
  event.preventDefault();

  const ageOne = document.querySelector("#age-1").value;
  const ageTwo = document.querySelector("#age-2").value;
  const diff = document.querySelector(".diff");
  diff.innerHTML += " " + ageOne - ageTwo;
}
