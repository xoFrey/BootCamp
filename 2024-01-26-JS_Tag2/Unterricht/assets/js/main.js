// ! === Comparison ===

// * = nutzen wir als Zuweisung
// * == vergleicht nur den Wert
// * === vergleicht den Wert und den Datentypen

console.log(2 == 2); // true
console.log(2 == "2"); // true
console.log(2 === "2"); // false
console.log(2 == 5); // false
console.log(3 == "three"); // false

// * != nicht gleicher Wert
// * !== nicht gleicher Wert und Datentyp

console.log(2 != 2); // False
console.log(2 !== 2); // False
console.log(2 !== 4); // true
console.log(4 !== "4"); // true

// * > größer als
// * < kleiner als
// * >= größer gleich
// * <= kleiner gleich

console.log(4 > 2);
console.log(3 < 1);
console.log(4 >= 6);
console.log(4 >= 4);

console.log("B" > "A"); // true
console.log(" B" > "a"); // true, da kleines a mehr macht hat

// ! === Elemente selektieren ===

// : getElementById()
// Damit sprechen wir die Elemente über die ID an
// ID aus dem HTML: main-headline

const mainHeadline = document.getElementById("main-headline");
console.log(mainHeadline);

// So hole ich mir andere Eigenschaften bzw einzelne Werte
console.log(mainHeadline.innerText);
console.log(mainHeadline.baseURI);

// : querySelector()
// Damit kann man alles ansprechen: IDs (#) , Klassen (.) oder einfache Elemente (h1)
// Immer in eine Variable abspeichern
const secondaryHeadline = document.querySelector("#secondary-headline");
const secondaryHeadline2 = document.querySelector(".test");
const secondaryHeadline3 = document.querySelector("h2");

console.log(secondaryHeadline);
console.log(secondaryHeadline2);
console.log(secondaryHeadline3);

// ! HTML ändern mit JS

// : .innerHTML
// Wir können innerHTML auch verwenden um den Inhalt zu überschreiben

mainHeadline.innerHTML = "ZACK - einfach mit JS geändert";

// = überschreibt den Wert
// += fügt etwas zum alten Text hinzu
secondaryHeadline.innerHTML = "Super";
secondaryHeadline.innerHTML += "Code";

// ! Stlye mit JS

// Mit .style können wir das Element stylen
mainHeadline.style.color = "pink";
mainHeadline.style.backgroundColor = "blue";
mainHeadline.style.textAlign = "center";

// ! In Elemente vom HTML reinschreiben
// gut wenn man zb Karten automatisch erstellen will mit einer Datenbank, dann muss man nicht die Infos manuell per HTML generieren-> Einfach klasse und Elemente erstellen in einer div-box zb

// in Elemente schreiben
const divContainer = document.querySelector(".div-container");
divContainer.innerHTML = "<h2 class='supi'> Hallo ich komme über JS rein </h2>";

// * Unterschied document.write() vs .innerHTML
// mit document.write() schreibe ich es immer am Ende
// mit .innerHTML können wir gezielt Elemente ansprechen und deren Inhalt verändern / überschreiben / hinzufügen

// ! === Funktionen ===
// Deklarierung einer Funktion:
// Wir erstellen eine Funktion und wir schreiben, was die Funktion machen soll
// mit dem Keyword "function" sagen wir JS, dass jetzt eine Funktion kommt
// sayHi() ist der Name der Funktion und ist frei definierbar - sollte Sinn ergeben
// camelCase
// () - Parameter Klammern müssen immer da sein

function sayHi() {
  console.log("Hallo, schön dass du da bist.");
}

// * Aufruf
// Funktion muss aufgerufen werden, damit sie ausgeführt wird
// später können wir Funktionen ausführen lassen, wenn wir zb auf einen Button oder wo anders klicken
sayHi();

// ! === Funktionen mit Paramentern ===
// Mit einem Parameter können wir unsere Funktion wiederverwendbarer machen
// Deklaration
// in den Klammern schreiben wir die parameter und reichen sie an die Funktion weiter
// "kursTeilnehmer" ist unser Platzhalter

function sagHallo(kursTeilnehmer) {
  console.log("Hallo " + kursTeilnehmer);
}

sagHallo("Tobi");
sagHallo("Thomas");
sagHallo(4);

// ? Mehrere Parameter

function addMe(num1, num2) {
  console.log(num1 + num2);
}

addMe(3, 4);
addMe("Super", "Code");
addMe(34340593458, 43453534);

// ? Funktion direkt ins HTML schreiben
// Version 1 - übersichtlicher

function multiplyMe(num1, num2, num3) {
  console.log(num1, num2, num3);
  let ergebnis = num1 * num2 * num3;
  console.log(ergebnis);

  divContainer.innerHTML += "<p> Ergebnis: " + ergebnis + "</p>";
}

multiplyMe(2, 55, 8);

// Version 2

function multiplyMe2(num1, num2, num3) {
  console.log(num1, num2, num3);
  divContainer.innerHTML += "<p> Ergebnis: " + num1 * num2 * num3 + "</p>";
}

multiplyMe(33, 45, 3);
