console.log("Start: Warten für 3 Sekunden");

setTimeout(() => {
  console.log("Erledigt. Du hast 3 Sekunden verschwendet");
}, 3000);

const test = document.querySelector(".test");
let number = 11;
const countdown = setInterval(() => {
  number--;
  console.log(number);

  if (number <= 0) {
    clearInterval(countdown);
    console.log("Endlich Feierabend");
  }
}, 1000);
