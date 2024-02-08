// # === Weitere Array Methoden ===
console.log("%c === Array Methoden 2 === ", "color:white; background:red");

let carName = ["Audi", "Mercedes", "Seat", "Ford", "Porsche"];

// ! splice()
// Damit kann man gezielt sachen löschen und ersetzen
// Erster Parameter: Wo soll hinzugefügt werden
// Zweiter Parametr: Wieviele Elemente sollen gelöscht / überschrieben werden?
// Dritter Parameter: Neues Element (optional)

// * Ab Index 2 zwei neue Werte hinzufügen
carName.splice(2, 0, "VW", "Fiat");
console.table(carName);

// * VW löschen
// 2 - Ab wo soll gelöscht werden
// 1 - Wieviele Elemente sollen gelöscht werden?
carName.splice(2, 1);
console.table(carName);

// *Seat und Ford löschen
carName.splice(3, 2);
console.table(carName);

// *Audi überschreiben
// 0 -> ab wo, 1-> wieviel, "Audiliiii" -> was da hinzugefügt werden soll
carName.splice(carName.indexOf("Audi"), 1, "Audiliiii");
console.table(carName);

// ! slice()
// Mit .slice() können wir einen Teil eines Arrays ausscneiden und geben ein neues Array zurück
// Erster Parameter: Start
// Zweiter Parameter: End (option)

// 0 - start index
// 3 - Wieviele Elemente AB Index Start
let newCars = carName.slice(0, 3);
console.table(newCars);

// - WICHTIG: slice() veränder das Ursprungselement nicht!!!
carName.slice(3); // * Macht nichts, man MUSS es in einer neuen Variablen speichern
console.table(carName);
// Kein Endwert - Geht bis ans Ende
let otherCarNames = carName.slice(2);
console.table(otherCarNames);
console.table(carName);

// ! sort()
console.log("%c === Sort === ", "color:white; background:red");

// Man kann mit sort() können wir sortieren

// ? Nummern sortieren
const numbers = [3, 2, 5, 6, 8, 5, 1, 0, 9];
console.log(numbers);
numbers.sort();
console.log(numbers);

// ? Strings sortieren
const strings = ["B", "A", "U", "P", "L", "N"];
console.log(strings);
strings.sort();
console.log(strings);

// ? Hohe Nummern sortieren - mehr als zweistellige Zahlen
// sort sortiert nur immer die erste Zahl
const numbers2 = [10, 1200, 340, 2, 3, 68440];
console.log(numbers2);
numbers2.sort();
console.log(numbers2);

// * Mit einer Callback-Funktion bekommen wir das hin
// Verschiedene Schreibweisen
// alte
numbers2.sort(function (a, b) {
  return a - b;
});
// neue
numbers2.sort((a, b) => {
  return a - b;
});
// Kurzschreibweise!
// bei einzeiligen Befehlen benötige ich kein return mehr, macht er automatisch

numbers2.sort((a, b) => a - b);

console.log(numbers2);
// * Wir rufen in der Methode eine Funktion auf, die die Werte miteinander vergleicht, bei negativem/gleichen Wert wird nicht getauscht, beim positiven wird getauscht.

// ? Umgekehrte sortierung:

numbers2.sort((a, b) => b - a);
console.log(numbers2);

// ! reverse Methode
const reverseNum = [1, 2, 3, 4, 5];
reverseNum.reverse();
console.log(reverseNum);

// ! filter()
let filmTitel = [
  "Inception",
  "The Shawshank Redemption",
  "Pulp Fiction",
  "The Dark Knight",
  "Forrest Gump",
  "The Matrix",
  "The Godfather",
  "Schindler's List",
  "Fight Club",
  "The Lord of the Rings: The Fellowship of the Ring",
  "The Silence of the Lambs",
  "Star Wars: Episode IV - A New Hope",
  "The Avengers",
  "Titanic",
  "The Lion King",
  "Jurassic Park",
  "Gladiator",
  "The Departed",
  "Casablanca",
  "The Wizard of Oz",
  "Gone with the Wind",
  "The Shining",
  "Avatar",
  "Eternal Sunshine of the Spotless Mind",
  "Inglourious Basterds",
  "The Grand Budapest Hotel",
  "The Revenant",
  "The Social Network",
  "Interstellar",
];

console.table(filmTitel);

// * Alle Titel die länger als 20 Zeichen sind und speichern die in einer Variablen mit longMovies
// Filter braucht eine Callbackfunction - ohne geht nicht
// filter ist ein loop und man braucht einen parameter in der callbackfunction
const longMovies = filmTitel.filter((filmLength) => {
  return filmLength.length > 30;
});

console.table(longMovies);

// *Nach Suchwort filtern - Case Sensitive
let suchwort = "the";
let nameFilter = filmTitel.filter((einzelneFilme) =>
  einzelneFilme.includes(suchwort)
);

console.table(nameFilter);

// * Suchwort Filtern nicht Case-Sensitive

let nameFilter2 = filmTitel.filter((einzelneFilme) =>
  einzelneFilme.toLowerCase().includes(suchwort.toLowerCase())
);

console.table(nameFilter2);

// # === LOOPS ===

const names = ["Lisa", "Tobi", "Izel", "Mia", "Even", "Stefan", "Adrian"];
