// # === RETURN ===

console.log("%c === Return === ", "background: red; color:white ");

// ? Ein return benötigen wir um einen Wert außerhalb der Funktion verfügbar zu machen
// ? Ein return beendet die funktion

// ! BSP 1
function returnSomething() {
  return console.log("Hallo return");
  // Das werden wir nicht in der console sehen, da es nach dem return kommt
  console.log("Hallo nach dem return");
}

returnSomething();

// !BSP 2
function gehtNicht(a, b) {
  let outputGehtNicht = a + b;
  console.log(outputGehtNicht);
}
// *Fehler: Weil die variabkle in einer funkltion definiert wurde und nicht global
// console.log(outputGehtNicht);

gehtNicht(5, 6);
// undefined weil in der funktion nichts returned wird
console.log(gehtNicht(3, 5));

// !BSP 3
function add(a, b) {
  let outputGeht = a + b;
  return outputGeht;
}
// variable erstellen und die dann ausgeben
let returnOutput = add(4, 10);

// Geschweifte Klammern dass man den Namen des Console logs sieht
console.log({ returnOutput });

// !BSP 4
// - checken ob gerade oder ungerade

let num2 = 103;

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let resultEven = isEven(num2)
  ? `Die Zahl ${num2} ist gerade`
  : `Die Zahl ${num2} ist ungerade`;
console.log(resultEven);

// !BSP 5
// -checken ob eine Zahl positiv, negativ oder null ist

let nummer = 0;
function checkNumber(num) {
  if (num > 0) {
    return "positiv";
  } else if (num < 0) {
    return "negativ";
  } else {
    return "gleich Null";
  }
}

console.log(checkNumber(-3));
let result = `Die Zahl ${nummer} ist ${checkNumber(nummer)}.`;
console.log(result);

//# === Arrow Function ===
console.log("%c === Arrow Function ===", "background:red; color:white");
// Auch fat arrow function genannt
// ist mit ES6 gekommen

const bootcamp = "Vollzeitkurs";

// - Alte Schreibweise

function whichBootCamp() {
  console.log(`Wir sind im ${bootcamp}`);
}

whichBootCamp();

// - Neue Schreibweise
// Man kann diese Schreibweise nutzen für einzeilige Funktionen, bei mehr als einer Zeile mit Klammern nutzen

const whichBootCampNew = () => {
  console.log(`Wir sind im ${bootcamp}`);
};

whichBootCampNew();

// - Verkürzte Version der neuen Schreibweise
// Nur möglich bei EINER zeile Code
const shortVersion = () => console.log("Hallo");

shortVersion();

// # === Scope Wiederholung ===
console.log("%c === Scope ===", "background:red; color:white");

// - Globaler Scope
// Der Globale Scope ist quasi unsere komplette JS Datei
// Wenn etwas im globalen Scope definiert ist,  kann ich von überall aus drauf zugreifen

const bootcampNew = "Vollzeit";
console.log(bootcampNew);

const whichBootCamp2 = () => {
  console.log(`Wir sind im ${bootcampNew}`);
};

whichBootCamp2();

// - Localer Scope
// Der locale scope kann zb in einem Funktionskörper sein
// Wenn wir eine Variable in lokalen scope einer funktion definieren, könnenw ir nur in der funktion darauf zugreifen

const superBootcamp = () => {
  const superduperboot = "Vollzeit von Supercode :) ";
  console.log(superduperboot);
};

superBootcamp();
// console.log(superduperboot); // Geht nicht weil Variable lokal

// - globale Variable in Funktion zuweisen

let mix;
const mixfunc = (superNummer) => {
  if (superNummer % 2 === 0) {
    mix = "gerade :)";
  } else {
    mix = "ungerade :(";
  }
};

mixfunc(3);
console.log(mix);
