function changeBackground() {
  const redColor = document.querySelector("#red").value;
  const greenColor = document.querySelector("#green").value;
  const blueColor = document.querySelector("#blue").value;

  const bodyColor = document.querySelector("body");
  bodyColor.style.backgroundColor =
    "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";
}
