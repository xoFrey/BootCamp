const button = document.querySelector("#button");
const colorPicker = document.querySelector("#farbeAuswahlen");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const index = colorPicker.selectedIndex;
  colorPicker.remove(index);
});
