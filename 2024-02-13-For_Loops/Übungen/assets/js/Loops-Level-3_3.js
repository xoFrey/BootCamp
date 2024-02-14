const loopMe = () => {
  const input = document.querySelector(".input").value;
  const output = document.querySelector(".output");
  let myArray = [];
  if (input == 0) {
    output.innerHTML = `<p style="color:red"> Bitte Zahl über 0 eingeben! <p>`;
  } else {
    if (input % 2 === 0) {
      for (let i = 1; i <= input; i++) {
        myArray.push("o");
      }
    } else if (input % 2 != 0) {
      for (let j = 0; j < input; j++) {
        if (j % 2 == 0) {
          myArray.push("o");
        } else {
          myArray.push("O");
        }
      }
    }
    output.innerHTML = `L${myArray.join("")}p`;
  }
};
