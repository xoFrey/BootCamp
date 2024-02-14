const selectMe = document.querySelector("#select-me");
const output = document.querySelector("p");

selectMe.addEventListener("change", (event) => {
  const selectValue = event.target.value;
  output.innerHTML = selectValue;
});
