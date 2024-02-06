let wert = window.prompt("Bitte gib eine Zahl von 1 bis 10 ein");

if (wert == Math.ceil(Math.random() * 10)) {
  console.log("Du hast gewonnen!");
} else {
  console.log("Du hast verloren!");
}
