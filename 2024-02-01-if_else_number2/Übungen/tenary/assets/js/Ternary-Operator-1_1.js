function ageCheck() {
  const inputAge = document.querySelector("#age").value;
  const status = document.querySelector(".status");

  const age =
    inputAge < 18
      ? (status.textContent = "under 18")
      : (status.textContent = "18 or above");
}
