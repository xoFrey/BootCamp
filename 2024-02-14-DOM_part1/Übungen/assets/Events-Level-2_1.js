const grey = document.querySelector("#grauTaste");
const white = document.querySelector("#weissTaste");
const blue = document.querySelector("#blauTaste");
const yellow = document.querySelector("#gelbTaste");
const body = document.querySelector("body");

const changeColor = (color) => {
  body.style.backgroundColor = color;
};

grey.addEventListener("click", () => {
  changeColor("grey");
});
white.addEventListener("click", () => {
  changeColor("white");
});
blue.addEventListener("click", () => {
  changeColor("blue");
});
yellow.addEventListener("click", () => {
  changeColor("yellow");
});
