// # === Date Object ===
// :01.01.1970 - Start der Zeit

// * Wenn wir keine Parameter mitgeben, bekommen wir die aktuelle Zeit + Datum vom PC zurück
let date1 = new Date();
console.log(date1);
console.log(typeof date1);

// * Wenn wir Parameter mitgeben,  wird ein Objekt erstellt mit den durchgereichten Zeichen
let date2 = new Date(1993, 3, 10, 16, 12, 13);
console.log(date2);

// * Wenn wir date1-date2 rechnen, bekommen wir die millisekunden raus, die zwischen den Zeiten liegen
let date3 = date1 - date2;
console.log(date3);

// * So bekommen wir die Tage raus
// 24 - weil 24h ein Tag hat
// 60min - sind eine Stunde
// 60sek - sekunden sind eine minute
// 1000ms - sind eine sek
let tage = date3 / (24 * 60 * 60 * 60 * 1000);
console.log(tage);

// * Die .toString() Methode wandelt unser Objekt in einen String
let date4 = date2.toString();
console.log(date4);
console.log(typeof date4);

console.log(date4.toLowerCase());

// * toUTCString() - gibt ein Datum in UTC Zeit zurück
// :UTC - The Universal Coordinated ist der Standard bei den Welt Uhren
// wandelt das Objekt in String um
let date5 = date2.toUTCString();
console.log(date5);
console.log(typeof date5);

// * toLocalDateString - gibt Datum in einer lokalisierten Darstellung zurück
// Datum
let date6 = new Date().toLocaleDateString();
console.log(date6);

// * toLocalString - gibt ein Datum mit Uhrzeit in Lokaler Darstellung zurück
// Datum und Uhrzeit
let date7 = new Date().toLocaleString();
console.log(date7);

// ! Einzelne Werte von Datum bekommen

// * getFullYear() - gibt uns nur das Jahr zurück
let date8 = new Date().getFullYear();
console.log(date8);

// * getMonth() - gibt uns nur den Monat zurück
// Monate starten bei index 0 -> Januar = 0
let date9 = new Date().getMonth();
console.log(date9); // Februar ist die 1

// * getDate() - gibt uns nur den Tag zurück
let date10 = new Date().getDate();
console.log(date10);

// * getHours() - gibt uns die Stunden zurück
let date11 = new Date().getHours();
console.log(date11);

// * getMinutes() - gibt uns die Minuten zurück
let date12 = new Date().getMinutes();
console.log(date12);

// * getSeconds() - gibt uns die Sekunden zurück
let date13 = new Date().getSeconds();
console.log(date13);

// ! Einzelne Werte vom Datum abändern
console.clear();
const myDate = new Date();

console.log(myDate);

// * setDate()
// So kann ich den Tag ändern
myDate.setDate(21);
console.log(myDate);

// * setMonth()
// So kann ich nur den Monat ändern
// Start bei 0!
myDate.setMonth(2);
console.log(myDate);

// * setFullYear()
// So können wir das ganze Jahr setzen
myDate.setFullYear(2000);
console.log(myDate);

// ! Wochentag rausbekommen

// *Name von Wochentag rausbekommen
// : "long" - Montag
// : "short" - Mo
// : "narrow" - M
let dateName = new Date();
let weekDay = dateName.toLocaleString("default", { weekday: "long" });
console.log(weekDay);

// ! Öffnungszeiten

const date = [
  {
    day: "Montag",
    time: "9:00 - 18:00",
  },
  {
    day: "Dienstag",
    time: "9:00 - 18:00",
  },
  {
    day: "Mittwoch",
    time: "9:00 - 18:00",
  },
  {
    day: "Donnerstag",
    time: "9:00 - 18:00",
  },
  {
    day: "Freitag",
    time: "9:00 - 18:00",
  },
  {
    day: "Samstag",
    time: "9:00 - 12:00",
  },
  {
    day: "Sonntag",
    time: "geschlossen",
  },
];

const outputData = document.querySelector(".openingTimes");
// let weekDay = dateName.toLocaleString("default", { weekday: "long" });
// console.log(weekDay);

// * klassen dynamisch setzen
// date.forEach((item) => {
//   outputData.innerHTML += `
//     <div class="${weekDay === item.day ? "green" : "grey"}">
//     <h1>${item.day}</h1>
//     <p>${item.time}</p>
//     </div>`;
// });

// *elemente dynamisch setzen
date.forEach((item) => {
  weekDay === item.day
    ? (outputData.innerHTML += `
    <div>
    <h1>${item.day}</h1>
    <p>${item.time}</p>
    </div>`)
    : " ";
});

// ! Eventtage checker

const dateOutput = document.querySelector(".output-date");
const inputDate = document.querySelector("#date");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  // Ziel Datum festlegen
  const zielDatum = new Date(inputDate.value);
  console.log(zielDatum);

  //   Aktuelles Datum
  const heute = new Date();

  //   Differenz berechnen
  //   Mit Math.ceil() - weil wir immer hoch runden wollen
  let diff = zielDatum - heute;
  diff = Math.ceil(diff / (24 * 60 * 60 * 1000));

  dateOutput.innerHTML += `Das Event am ${inputDate.value} ist noch ${diff} Tage entfernt `;
});
