const body = document.querySelector("body");
const button = document.querySelector("#button");
const colorPick = document.querySelector("#farbeAuswahlen");

button.addEventListener("click", (event) => {
  event.preventDefault();
  body.style.backgroundColor = `${colorPick.value}`;
});
