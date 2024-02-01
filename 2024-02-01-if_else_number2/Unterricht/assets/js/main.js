// # === Conditionals 2 ===

// ! Switch and ternary operators
// Wo ist der Untschied zwischen if/else, switch und ternary ?
// if/else -> flexibelste, komplexe Bedingungen sind möglich
// switch -> einfacher (syntax), übersichtlicher,  zum Vergleich von einem Wert
// ternary -> sehr kurze syntax, nur für einfache Bedingungen geeignet

// ? Grundsyntax Switch
// Bedingung im Switch kann numbers oder strings sein
switch ("burger") {
  // case wird mit der bedingung im switch verglichen
  case "Bedingung":
    // was gemacht werden soll, wenn die bedingung im case true ist
    console.log("case === Bedingung");
    // Um aus case auszusteigen
    break;
  case "Pizza":
    console.log("case === Pizza");
    break;
  // default: wie elsem, wenn keine Bedingungen von oben eintreffen
  default:
    console.log("Case stimmt nicht mit Bedingung im Switch überein!");
}

// Aufgabe: Muss ich heute Arbeiten?
// * If - Else Variante (umständlich)
let today = "Donnerstag";

if (
  today === "Montag" ||
  today === "Dienstag" ||
  today === "Mittwoch" ||
  today === "Donnerstag" ||
  today === "Freitag"
) {
  console.log("Heute musst du arbeiten");
} else if (today === "Samstag" || today === "Sonntag") {
  console.log("WOCHENENDE");
} else {
  console.log("Wochentag gibt es nicht");
}

// * Switch
// Man kann cases aneinander anreihen
// switch nutzt strict equal operator -> ===
// Wenn ein wert mit vielen Sachen verglichen werden muss
switch (today) {
  case "Montag":
  case "Dienstag":
  case "Mittwoch":
  case "Donnerstag":
  case "Freitag":
    console.log("Du musst arbeiten");
    break;
  case "Samstag":
  case "Sonntag":
    console.log("Du hast frei");
    break;
  default:
    console.log("Wochentag existiert nicht");
}

// * tenary

// wird als one-liner geschrieben und gibt einen wert zurück
// wird interessant bei reacht
// ? Grundsyntax ternary operator
// "Bedingung" ? "Ausführung wenn Bedingung true" : "Ausführung wenn Bedingung false";

let zahl = 7;

console.log(zahl % 2); // 1
console.log(zahl % 6); // 1
console.log(zahl % 4); // 3

if (zahl % 2 === 0) {
  console.log(zahl + " ist grade.");
} else {
  console.log(zahl + " ist ungerade");
}

const evenOrNot = zahl % 2 === 0 ? zahl + " ist grade" : zahl + " ist ungerade";
console.log("ternary " + zahl);

// Wochentage mit ternary
// Nicht mit ternary machen, zu clusterfuck - und braucht immer einen Return und false wert 
let today2 = "Montag";

const wochentag =
  today2 === "Montag"
    ? "Es ist Montag"
    : today2 === "Dienstag"
    ? "Es ist Dienstag"
    : today2 === "Mittwoch"
    ? "Es ist Mittwoch"
    : null;

console.log(wochentag);
// # === Scopes ===

// der global scope definiert sich dadurch dass es direkt im JS dokument definiert wird, ohne in irgendwelchen funktionen, methoden etc. definiert wird
const scopeLocation = "global scope";

function showMeScope() {
  const scopeLocation2 = "localFunction scope";
  console.log("Variable kann überall aufgerufen werden = " + scopeLocation);
}

showMeScope();

// console.log(scopeLocation2); // uncaught referenceError -> die Variable / Konstante wurde nicht gefunden

if (scopeLocation === "global scope") {
  const scopeLocation3 = "localBlock scope";
  console.log("Variable kann überall aufgerufen werden = " + scopeLocation);
}

// console.log(scopeLocation3); // uncaught referenceError -> die Variable / Konstante wurde nicht gefunden
