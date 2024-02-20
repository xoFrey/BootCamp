// # === Window Object ===
// * Das Window Object representiert das geöffnete Fenster im Browser
// * Mit JS können wir auf das Browserfenster zugreifen wie zb Höhe/ Breite / URL etc
console.dir(window);

// ! Width and Height

// * innerHeight und innerWidth
// Werte in pixel
// Devtools / Browserzeile nicht includiert
// die weiße fläche die angezeigt wird - heißt dass scrollleiste, devtools und so abgezogen werden
console.log("innerHeight " + window.innerHeight);
console.log("innerWidth " + window.innerWidth);

// * outerHeight und outerWidth
// Browserzeile und Devtools werden mit eingerechnet

console.log("outerHeight " + window.outerHeight);
console.log("outerWidth " + window.outerWidth);

// ! Location

// * location
// Die Url Adresse der aktuellen Seite
console.log(window.location);

// * location.host
//  so bekommen wir die domain zurück
console.log(window.location.host);

// * location.pathname
// So bekommen wir den Pfad zurück
// > "/" ist immer Startseite
// https://www.super-code.de/ => /
// https://www.super-code.de/microcamps => /microcamps
console.log(window.location.pathname);

// ! Screen
// Das Screen Object befindet sich im Window Object. Es gibt uns Informationen über den Bildschirm / Monitor, auf dem das Browserfenster geöffnet ist

console.log(window.screen);

// *screen.height und screen.width
// Höhe und Breite in px -> gesamte höhe/breite mit taskleiste

console.log("screen height", window.screen.height);
console.log("screen width", window.screen.width);

// * screen.availHeight und .availWidth - oder window.screen.availHeight
// Window kann weggelassen werden - beide möglichkeiten gehen
console.log("screen available height", window.screen.availHeight);
console.log("screen available width", screen.availWidth);

// ! Window Methoden

// * window.alert()
// Es öffnet sich ein Popup, in dem ein Text steht
// window.alert("Hi");

// * window.prompt()
// Es öffnetg sich ein popup indem wir ein text eingeben können
// window.prompt("Hallo")

// *window.promt() value auslesen
// let promptAnswer = window.prompt("Zahl zwischen 1-10")
// console.log(promptAnswer)

// *window.open
// damit können wir eine andere Seite öffnen lassen
// default wird die Seite immer in einen neuen Tab geöffnet

// window.open("https://www.super-code.de/");

// - öffnet sich im selben tab
// Man kann nicht zurück gehen!
// window.open("https://www.super-code.de/", "_self");

// - öffnet sich auch im neuen tab
// window.open("https://www.super-code.de/", "_blank");

// * window.onload
// Wenn die Seite komplett geladen wurde, dann soll was passieren
window.onload = console.log("Seite wurde geladen");

// * window.scrollTo
// mit window.scrollTo können wir zu einem bestimmten punkt der Seite scrollen

// - Version 1 Eventlistener direkt anwenden - wenn man den btn nicht mehr braucht
// document.querySelector(".scroll").addEventListener("click", () => {
//   console.log("hi");
// });

// - Version 2 Eventlistener auf Variable anwenden
const scroll = document.querySelector(".scroll");
scroll.addEventListener("click", () => {
  // Wert in pixel (x-Achse, y-Achse)
  window.scrollTo(0, 1000);
});

// * window.location.reload()
// damit können wir die aktuelle Seite neu laden lassen
document.querySelector(".reload").addEventListener("click", () => {
  window.location.reload();
});

// * window.location.replace()
// Wir können auf eine andere URL weiterleiten

document.querySelector(".replace").addEventListener("click", () => {
  window.location.replace("https://www.super-code.de/");
});

// *history.back()
// So können wir uns einen zurück btn machen
document.querySelector(".back").addEventListener("click", () => {
  history.back();
});

// # Timeout und Intervalle JS
console.clear();

// *setTimeout(Funktion, ms)
// Führt eine Funktion erst nach bestimmten ms aus

// *setIntervall(Funktion, ms)
// Die funktion wird immer nach x- ms ausgeführt

// const consoleOutput = () => {
//   console.log("hier steht was in der Konsole");
// };

// const deleteConsole = () => {
//   console.clear();
//   console.log("Konsole wurde gelöscht");
// };

// ? setTimeout()

// Wert 1 = Funktionsnamen angeben
// Wert 2 = Nach wievielen ms soll Funktion ausgeführt werden

// setTimeout(consoleOutput, 1000);
// setTimeout(deleteConsole, 5000);

// ? setIntervall()

// setInterval(consoleOutput, 1000);
// setInterval(deleteConsole, 5000);

// ? clearIntervall()
// löscht den Intervall wieder
// man muss das intervall in einer variablen speichern

// const myInterval = setInterval(consoleOutput, 1000);

// document.querySelector(".interval").addEventListener("click", () => {
//   clearInterval(myInterval);
// });

// * So können wir eine setInterval auch in einer callbackfunction schreiben
// -neue schreibweise

// -alte schreibweise

// setInterval(function () {
//   console.log("alte schreibweise");
// }, 1000);

// ! Countdown

const goBtn = document.querySelector(".go");
const output = document.querySelector(".output");

goBtn.addEventListener("click", () => {
  let number = Number(document.querySelector("#number").value);

  output.innerHTML = number;
  let intervalTimer = setInterval(() => {
    if (number > 0) {
      number--;
      output.innerHTML = number;
    } else {
      clearInterval(intervalTimer);
      output.innerHTML = "Done";
    }
  }, 1000);
});
