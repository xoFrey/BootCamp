const loopMe = () => {
  const input = document.querySelector(".input").value;
  const output = document.querySelector(".output");
  output.innerHTML = "L";
  for (let i = 1; i <= input; i++) {
    output.innerHTML += "o";
  }
  output.innerHTML += "p";
};
