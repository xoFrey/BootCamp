const woerter = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];
console.log(woerter);
const words = woerter.filter((wordLength) => wordLength.length <= 6);
console.log(words);
