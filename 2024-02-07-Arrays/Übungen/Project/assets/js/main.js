const kcalCalculator = (event) => {
  event.preventDefault();
  // ? Inputs:
  const height = document.querySelector("#height").value;
  const age = document.querySelector("#age").value;
  const weight = document.querySelector("#weight").value;
  const gender = document.querySelector("input[type='radio']:checked").value;
  const activity = document.querySelector("#activity").value;
  const error = document.querySelector(".error");

  const grundKcal = document.querySelector(".grund-kcal");
  const grundKj = document.querySelector(".grund-kj");
  const gesamtKcal = document.querySelector(".gesamt-kcal");
  const gesamtKj = document.querySelector(".gesamt-kj");

  if (height.length > 0 && age.length > 0 && weight.length > 0) {
    if (gender == "male") {
      const grundumsatz = 66.47 + 13.7 * weight + 5 * height - 6.8 * age;
      grundKcal.textContent = Math.round(grundumsatz);
      const grundumsatzKj = (grundKj.textContent = Math.round(
        grundumsatz * 4.186
      ));
      gesamtKcal.textContent = Math.round(grundumsatz * activity);
      gesamtKj.textContent = Math.round(grundumsatzKj * activity);
    } else {
      const grundumsatz = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;

      grundKcal.textContent = Math.round(grundumsatz);
      const grundumsatzKj = (grundKj.textContent = Math.round(
        grundumsatz * 4.186
      ));
      gesamtKcal.textContent = Math.round(grundumsatz * activity);
      gesamtKj.textContent = Math.round(grundumsatzKj * activity);
    }
  } else {
    error.innerHTML = "Bitte geben Sie einen Wert ein!";
  }
};
