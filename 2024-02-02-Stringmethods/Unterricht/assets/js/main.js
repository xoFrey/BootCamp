// # ==== Zeichenketten - Strings ====

// 3 Möglichkeiten Strings in JS zu deklarieren

const text1 = "double quote";
const text2 = "single quote";
const text3 = `backticks or template literals`; // hier gibt es ein paar coole features

console.log(typeof text1, typeof text2, typeof text3);

// ! String Methoden

// String-Methoden sind von JS für uns vorgefertigte Funktionen, die wir auf Strings anwenden können, um Strings zu manipulieren, analysieren und formatieren zu können

// ? string.length -> gibt die Anzahl der Zeichen meines Strings als Number zurück
// Leerzeichen werden mitgezählt

console.log(text1.length);

// ? string.indexOf("etwas") -> gibt uns den Index (Position) einer Zeichenkette innerhalb des Strings zurück

const firstName = "Michael Alexander";
// fängt bei 0 an zu zählen, zeigt die Number an, an der die Stelle x erscheint
console.log(firstName.indexOf("x"));
// wenn gefunden, gibt position des ersten Buchstaben zurück
console.log(firstName.indexOf("der"));
console.log(firstName.indexOf("ael"));
// indexOf ist case Senstive -> -1 bei nicht gefundenen Strings
console.log(firstName.indexOf("H"));
// indexOf gibt nur die erste Position zurück, die restlichen ignoriert er
console.log(firstName.indexOf("a"));
// letzte gefundene Zeichen im String
console.log(firstName.lastIndexOf("a"));

// - Beispiel mit indexOf

const userInput = "izel@super.de";
const userDB = "steffen@super.de hakan@super.de adrian@super.de";

if (userDB.indexOf(userInput) >= 0) {
  console.log("User wurde gefunden");
} else {
  console.log("User nicht vorhanden");
}

// ? string.slice() -> gibt Zwichen zwischen start- und endIndex zurück, oder wenn nur startIndex dann bis End
// string.slice()
// string.slice(startIndex)
// string.slice(startIndext, endIndex(opt.))
// Wenn gar kein text, kompletter text wird zurück gegeben

// * startIndex ist inklusive
// * endIndex ist exklusive

const testText = "Bruce Wayne";
console.log(testText.slice()); // hier kompletter string
console.log(testText.slice(2)); // vom Index 2
console.log(testText.slice(2, 4)); // schließt 4 nicht mehr mit ein

// ? Kombination aus slice und indexOf
// start = 0
// end = testText.indexOf(" ") -> die Stelle wo Leerzeichen ist, auch ne Zahl
console.log(testText.slice(0, testText.indexOf(" ")));

// Es gibt noch mehr Methoden um strings zu teilen:
// Substring -> OK
// Substr -> deprecated -> Bitte nicht mehr nutzen!!

// * Slice kann auch negative Zahlen nutzen
// zählt rückwärts vom string
console.log(testText.slice(-1));

// ? string.concat() -> offizielle Methode um strings miteinander zu verketten
// const vorname = "Mia";
// const nachname = "die Laufwütige";
// console.log(vorname.concat(" ", nachname));

// ! template literals

// super für mehrzeilige Strings
// super um variablen und knstanten in einen String implementieren
// * nur mit backticks möglich -ES6 standard

function greeting(vorname, nachname) {
  const greeting = `Hallo ${vorname} ${nachname}, willkommen zurück auf deinem Dashboard`;
  console.log(greeting);
}

greeting("Zied", "Hackerman");
greeting("Tobi", "UwU-Girl");
greeting("Izel", "in the Dark");
