function adult() {
  const userAge = document.querySelector("#age").value;
  if (userAge >= 18) {
    const status = document.querySelector(".status");

    status.innerHTML = "Ja du darfst Shisha rauchen!";
  } else {
    const status = document.querySelector(".status");

    status.innerHTML = "Nein du darfst Shisha nicht rauchen!";
  }
}
