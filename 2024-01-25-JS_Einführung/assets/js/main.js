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
