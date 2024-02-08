const heroes = [
  "Superman",
  "Batman",
  undefined,
  ,
  "Wonderwoman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  ,
  null,
];

console.table(heroes);

// filter function
const myHeroes = heroes.filter((hero) => {
  return hero !== undefined && hero !== null;
});

console.table(myHeroes);
