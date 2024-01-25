// !===console.log() ===
// mit console.log() können wir uns Sachen in der Konsole ausgeben lasse. Das werden wir viel zum testen nutzen
// Am ende jedes Befehls muss ein Semikolon stehen - Endet eine Anweisung
console.log(50);

// ! === Variablen ===
// - const - Varible die man nicht ändern kann
// - let - Variable die man ändern kann
// - var - Variable ähnlich zu let (Vor ECMA 6) Bitte nicht nutzen!

// ? CONST
// *Stell dir vor, du möchtest eine Variable deklarieren, um den Namen einer Person zu speichern. Wenn er einmal zugewiesen ist, soll er nicht mehr verändert werden können. In diesem Fall bitte const benutzen

const name = "Max";

// ? LET
// * Jetzt wollen wir einen Spielstand in einer Variablen let speichern und den Wert im Laufe des Spiels immer wieder anpassen. Wenn sich ein Wert dann im Programm ändert benutzen wir let

let score = 0;
score = 11;
console.log(score);

// ? Zuweiung und Aufrug
// :let = Mit let erstellen wir eine Variable
// :let num1 = hier initialisieren wir eine Variable und weisen direkt einen Namen zu
// Console.log kann man auch nen String geben um im Console zu wissen welcher wert ausgegeben wird
let num1 = 22;
console.log("num1:", num1);

let num2 = 13;
console.log("num2:", num2);

console.log(num1 + num2);

// # Konventionen
// Variablen immer selbsterklärende Namen geben
// Nicht zu Kurz und auch nicht zu Lang sein
// Variblen sollen niemals mit einer Zahl anfangen
// Variablen Namen immer mit camelCase nutzen, erstes Wort klein und zweites direkt dran und groß schreiben
// Variablen immer in englisch
// Namen nicht mit $ starten - braucht man für was anderes

// JS ist Case Sensitive, auf Groß- und Kleinschreibung achten
let a = 10;
let A = 20;
console.log(a, A);

// # === DatenTypen ===

// ? Numbers
// Numbers werden in der Konsole blau/lila angezeigt
console.log(20);
console.log(30 + 12);
// Gibt NaN aus - Not a Number
console.log("Tim" - "Max");
// Strings werden in Numbers konvertiert
console.log("49" - "33");
// konkateniert die beiden Strings
console.log("Tim" + "Max");

// ? Strings
// String = Textelemente. Zeichenkette
// Um einen String herum müssen wir immer " " machen
// wir können auch Zahlen als String ausgeben
console.log("Marzio");
console.log("100");

// ? Booleans
// Zustände sind true and false
console.log(true);
console.log(false);

// # === String Concatination ===

const firstName = "Marzio";
const lastName = "Costantini";
let address = "Tutzing";

// console.log(
//   "Ich bin " + firstName + "" + lastName + " und wohne in " + address
// );

let satz = "Ich bin " + firstName + " " + lastName + " und wohne in " + address;
console.log(satz);

// # === Arythmische Operationen ===
// *addieren
console.log(5 + 4);

// *subtrahieren
console.log(4 - 2);

// *multiplizieren
console.log(4 * 4);

// *dividieren
console.log(25 / 5);

// *modulo
// Restwert
console.log(7 % 2);

// *Increment
let zahl = 10;
console.log("zahl:", zahl);
zahl++; // +1
zahl++; // +1
zahl++; // +1
console.log(zahl);

// *Decrement

zahl = 10;
console.log("zahl:", zahl);
zahl--; // -1
zahl--; // -1
zahl--; // -1
console.log(zahl);

// # === Output ===
// Ein output ist console.log()
// console.log("kennen wir schon");

// ? document.write()
// Wir bekommen ein HTML element, welches immer am Ende des HTML tag geschrieben wird
document.write("Hallo Leute!");

// Mit der Ummantelung kann man eine h2 erzeugen
// man kann eine Klasse hinzufügen aber mit einfachen Anführungsstrichen, damit kein Konflikt mit String-Anführungsstrichen entsteht
document.write("<h2 class='test'> Kurs 1234 </h2>");

// ? window.alert()
// Popup-Fenster beim Laden der Seite mit einem Text
// window.alert("Hallöchen");

// # === Inputs ===

// ? window.prompt()
// Damit öffnet sich ein Popup, in dem der Nutzer etwas eingeben kann
// Zweiter String wird als Platzhalter im Input angezeigt
// window.prompt("Bitte gebe eine Zahl ein", "Platzhalter");

// let pizza = window.prompt("Bitte gebe eine Pizzasorte ein");
// console.log(pizza);

// wir haben nun alter in eine Variable geschrieben und der wert wird gespeichert bis die Seite neu geladen wird
// let alter = window.prompt("Wie alt bist du?");
// console.log("Der User ist " + alter + " Jahre alt.");

// document.write(alter);

// ? window.confirm()
// Abfrage auf "Ok" und "Abbrechen" -> Option, die man annehmen und ablehnen kann
// window.confirm("Stimmen Sie den Cookies zu?");
// Ausgabe ist ein boolean - true, false
let confirm = window.confirm("Stimmen Sie den Cookies zu?");
console.log(confirm);
