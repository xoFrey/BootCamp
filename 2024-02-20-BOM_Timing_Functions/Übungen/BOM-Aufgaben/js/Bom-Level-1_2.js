const button = document.querySelector("#btn");
const time = document.querySelector(".zeit");
let number = 100;

button.addEventListener("click", () => {
  const decrement = setInterval(() => {
    number--;
    time.textContent = number + "%";
    if (number <= 0) {
      clearInterval(decrement);
    }
  }, 100);
});
