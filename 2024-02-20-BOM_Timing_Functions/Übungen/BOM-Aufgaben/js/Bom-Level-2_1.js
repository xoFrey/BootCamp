const message = document.querySelector(".message");
let count = document.querySelector("#count");
let number = Number(count.textContent);

const countdown = setInterval(() => {
  number--;
  count.innerHTML = number;

  if (number <= 0) {
    clearInterval(countdown);
    message.style.opacity = "0";
  }
}, 1000);

window.onload = countdown;
