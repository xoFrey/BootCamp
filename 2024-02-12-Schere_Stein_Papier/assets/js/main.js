const game = (myChoice) => {
  const choices = ["Rock", "Paper", "Scissors"];
  const myScore = document.querySelector(".myScore");
  const cpuScore = document.querySelector(".cpuScore");
  const winLose = document.querySelector(".winLose");

  let cpuChoice = choices[Math.floor(Math.random() * 3)];

  if (cpuChoice === myChoice) {
    winLose.innerHTML = "DRAW";
  } else {
    switch (myChoice) {
      case "Rock":
        cpuChoice === "Paper"
          ? (winLose.innerHTML = "You LOSE")
          : (winLose.innerHTML = "You WIN");
        break;

      case "Paper":
        cpuChoice === "Scissors"
          ? (winLose.innerHTML = "You LOSE")
          : (winLose.innerHTML = "You WIN");
        break;

      case "Scissors":
        cpuChoice === "Rock"
          ? (winLose.innerHTML = "You LOSE")
          : (winLose.innerHTML = "You WIN");
        break;
    }
  }
  cpuScore.innerHTML = cpuChoice;
  myScore.innerHTML = myChoice;
};
