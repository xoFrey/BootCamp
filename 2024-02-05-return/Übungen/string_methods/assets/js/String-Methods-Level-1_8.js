const text = "Sam is going to school";
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

one.textContent = text.toUpperCase();
two.textContent = text.toLowerCase();
three.textContent =
  text.slice(0, 3).toUpperCase() +
  text.slice(3, text.indexOf("school")) +
  text.slice(text.indexOf("school")).toUpperCase();

four.textContent =
  text.slice(0, 3).toLowerCase() +
  text.slice(3, text.indexOf("school")).toUpperCase() +
  text.slice(text.indexOf("school"));

five.textContent =
  text.slice(0, 4) +
  text.slice(4, 5).toUpperCase() +
  text.slice(5, 7) +
  text.slice(7, 8).toUpperCase() +
  text.slice(8, 13) +
  text.slice(13, 14).toUpperCase() +
  text.slice(14, 16) +
  text.slice(16, 17).toUpperCase() +
  text.slice(17);
