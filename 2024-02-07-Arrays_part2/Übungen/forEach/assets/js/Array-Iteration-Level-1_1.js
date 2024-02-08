const drinks = document.querySelector(".drinks");
let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

getraenke.sort();
console.log(getraenke);

getraenke.forEach((drink) => (drinks.innerHTML += `<p>${drink}</p>`));
