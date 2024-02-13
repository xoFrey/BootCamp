// # === For Loop ===

// * Klassischer For-Loop
// for(statement 1; statement 2; statement 3)
// i ist frei wählbar, es wird aber meistens i = index benutzt
// for ist nicht array gebunden, wie map und forEach
for (let i = 1; i <= 10; i++) {
  console.log("hallo " + i);
}

// ! ACHTUNG vor Infinity Loops

// for (let i = 5; i >= 4; i++) {
//   console.log(i);

// }

// # === Runterzählen ===

for (let i = 50; i >= 0; i--) {
  console.log(i);
}

// # === Schleife in einer Schleife "nestet Loops" ===
// In diesem Beispiel haben wir eine äußere Schleife, die von 1 bis 3 läuft udn eine innere Schleife die von 1 bis 5 läuft. Bei dem Durchlauf der äußeren Schleife wird die innere Schleife vollständig durchlaufen (5 mal)

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`Äußere Schleife: ${i}`, "Innere Schleife ", j);
  }
  console.log("Äußere Schleife fertig: ", i);
}

// # === For Loops mit Arrays ===
let countries = ["france", "spain", "italy", "germany"];

console.log(countries);
console.log(countries.length);

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i].toUpperCase());
}

// * Sowas geht übrigens NICHT
// let big for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i].toUpperCase());
// }

// ! Checken ob eine Zahl gerade oder ungerade ist

let zahlen = [
  23, 34, 5, 2, 45, 6, 7, 45, 6, 34, 66, 456, 456456, 6, 2, 444, 35,
];
let geradeZahlen = [];
let ungeradeZahlen = [];

for (let i = 0; i < zahlen.length; i++) {
  if (zahlen[i] % 2 === 0) {
    geradeZahlen.push(zahlen[i]);
  } else {
    ungeradeZahlen.push(zahlen[i]);
  }
}
console.log(geradeZahlen);
console.log(ungeradeZahlen);

// ! Berechnung der durchschnittsnote

let noten = [1, 4, 3, 6, 5, 2, 3, 3, 1];

const durchschnittsNote = (noten) => {
  let summe = 0;
  for (let i = 0; i < noten.length; i++) {
    summe += noten[i];
  }

  // Berechnung des Durchschnitts
  let durchschnitt = summe / noten.length;
  console.log(summe);

  return Number(durchschnitt.toFixed(2));
};

let myDurchschnitt = durchschnittsNote(noten);

console.log(myDurchschnitt);

// # === String in For Loop ===

let stringText = "Deutschland";

for (let i = 0; i < stringText.length; i++) {
  console.log(stringText[i]);
}

// # === "for of" - Schleife ===

// ist mit ES6 gekommen, kurz und bündiger. Ohne zusätzliche Variablen und kann über alles iterieren was ein Index hat - also Array und String
// Wir benötogen ein Array / String

let colors = ["green", "red", "blue", "black"];

// i = index, colors
for (let i of colors) {
  // man braucht hier nicht colors[i] um die werte auszugeben sondern man kann hier einfach mit i machen
  console.log(i);
}

let superString = "SuperCode";

for (let i of superString) {
  console.log(i);
}

// # Wann welche Schleife?
// * mit Array / String
// ? Wenn ich über ein Array / String iterieren will, benutzen wir map(), forEach(), for of(), (for()) - laufen die Schleife nach der kompletten länge des Arrays durch

//* ohne Array / String
// ? Wenn ich eine Schleife benötige, die nicht abhängig ist von einem Index wie vom String / Array,benutzen wir eine for schleife. Hier kann ich individuell den start und end-punkt auswählen, wie oft die Schleife durchlaufen soll
