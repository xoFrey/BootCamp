// # === if - else ===
// conditional (Bedingung) sind in der Programmierung die Möglichkeit, bestimmte Code-Blöcke auf Basis einer Bedingung auszuführen oder auch überspringen zu lassen. Eine der Möglichkeiten ist "if" (wenn) und "else" (sonst)

// 2. switch ->
// 3. ternary operator

// ! Grundsyntax
// if(hier drin steht die Bedingung) {
// dieser wird ausgeführt wenn die Bedingung ausgeführt
// }
// else {
// dieser Block wird ausgeführt wenn die Bedingung false ist
// }

// Wir benötigen fast immer für die Bedingung eine comaprison
// Das Ergebnis eines Vergleichs ist immer ein Boolean
let time = 9;
console.log(time <= 8);

if (time >= 8) {
  console.log("Ich führe das If aus");
} else {
  console.log("Ich führe else aus");
}

let salary = 2000;

if (salary <= 1000) {
  console.log("Du verdienst wenig!");
} else if (salary <= 1500) {
  console.log("Du verdienst gut");
} else if (salary <= 2000) {
  console.log("Du verdienst SUPER gut");
} else {
  console.log("Du bist spitzenverdiener!");
}

// ! Logical operators
// Es gibt zwei logical operators :
// logisches und && = hier müssen beide Bedingungen true sein
// logisches oder || = hier muss nur eine der beiden Bedingungen true sein

let num1 = 5;
let num2 = 7;

console.log(num1 === 5 && num2 === 8);
console.log(num1 === 5 || num2 === 8);

let velocity = 10;

if (velocity >= 10 && velocity <= 30) {
  console.log("Du fährst langsam");
} else if (velocity < 80 && velocity >= 50) {
  console.log("Du fährst normal");
} else if (velocity < 50 && velocity >= 20) {
  console.log("Du bist ne Schnecke");
} else {
  console.log("Deine Geschwindigkeit ist nicht messbar");
}

// ! Altersabfrage

function checkAge() {
  // Auch bei input Number bekomme ich in JS im Console ein String aus
  // Type-Conversion: Einfach Number(....) oder String(...) um das Value schreiben
  const userAge = Number(document.querySelector("#age").value);
  // gibt den Datentyp der Variablen aus
  // console.log(typeof userAge);

  if (userAge < 18) {
    console.log("Du kommst hier nicht rein!");
  } else {
    console.log("Viel Spaß!");
  }
}

// ! Fake Login
// Fake Datenbank
const fakeDBUserEmail = "Hakan@super-code.de";
const fakeDBPassword = "hakan123";
let falseLogin = 0;

function userLogin() {
  const userMail = document.querySelector("#email").value;
  const userPW = document.querySelector("#pw").value;

  if (falseLogin < 5 && 5 - falseLogin > 0) {
    if (userMail === fakeDBUserEmail && userPW == fakeDBPassword) {
      console.log("Willkommen auf der Seite");
    } else {
      console.log("Email oder Passwort ist falsch");
      console.log("Sie haben noch " + (5 - falseLogin) + " Versuche");
      falseLogin++;
    }
  } else {
    console.log("Ihr Account ist gesperrt!");
  }
}
