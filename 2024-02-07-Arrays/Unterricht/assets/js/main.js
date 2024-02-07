// # === Arrays Basics ===
let gericht1 = "Kuchen";
let gericht2 = "Döner";
let gericht3 = "Pizza";

const lieblingsgericht = [
  "Kuchen",
  "Pizza",
  "Döner",
  2332,
  222,
  123,
  true,
  false,
];

// Mit Array können wir alle Gerichte in einen Datensatz specihern. Dabei spielt der Datentyp keine Rolle
// Array kann man wie normale Variablen mit let oder const starten (man benutzt eig immer const)
// immer mit [] angeben

console.log(lieblingsgericht);
// Mit index kann man ein einzelnes Element aus unserem Array ansprechen
console.log(lieblingsgericht[3]);

// tabllenansicht
console.table(lieblingsgericht);

// # === Array Methoden ===

// ? indexOf
// Hier suchen wir in einem Array an welche Stelle sich ein Wort / Zahl befindet
console.log(lieblingsgericht.indexOf("Döner"));
console.log(lieblingsgericht.indexOf("Hallo"));

// * 1 = true
// * -1 = false

// - hier überschreiben wir mut hilfe von Index ein Wert

console.table(lieblingsgericht);

lieblingsgericht[2] = "Pasta";
console.table(lieblingsgericht);

// ? .lenght
// länge von einem Array als Zahl

console.log(lieblingsgericht.length);

const names = ["Tobi", "Mia", "Even", "Thomas"];
console.table(names);
// - statische möglichkeit
names[0] = "Susi";
console.table(names);

// - Dynamische Möglichkeit
console.log(names.indexOf("Mia"));
names[names.indexOf("Mia")] = "Zied";
console.table(names);

// ? push()
// Push Methode fügt ein neues Element am Ende eines Arrays hinzu
let pushNames = names.push("Sebastian");
console.log(pushNames); // 5
console.table(names); // array mit sebastian

// ? pop()
// Pop Methode entfernt das letzte Element in einem Array und gibt den Wert des gelöschten Elementes zurück
let popNames = names.pop();
console.log(popNames); // "Sebastian"
console.table(names); // Array ohne Sebastian

// ? unshift()
// unshift Methode fügt ein neues Element am Anfang hinzu und gibt die neue Länge zurück
let unshiftNames = names.unshift("hello");
console.log(unshiftNames);
console.table(names);

// ? shift()
// Shift methode entfernt das erste Element in einem Array und gibt den Wert des Elementes wieder
let shiftNames = names.shift();
console.log(shiftNames);
console.table(names);

// ! Warum const in array
// einzelne werte kann man ändern

const meinArray = [1, 2, 4];
meinArray.push(54); // Das ist erlaubt
meinArray[1] = 40; // das ist erlaubt
console.log(meinArray);
console.table(meinArray);

// meinArray = [2, 4, 5]; // * Das hier ist nicht erlaubt weil man den ganzen Array ändert
