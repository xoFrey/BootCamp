// # === Number Methoden ===
console.log("%c === Number Methoden ===", "background:red; color:white");

// ? toFixed()
// rundet die Zahl auf oder ab und wandelt die Zahl zu einem String um
// In der Klammer/ Als Argument kann man bestimmen ab wann gerundet wird
const num1 = 15.63393824503;
console.log(num1.toFixed());

console.log(num1.toFixed(3));

// ? Number()
// Wandelt strings in eine Number um
num2 = "39.3484";
console.log(Number(num2));
console.log(typeof Number(num2));

const num3 = "Mayx290348";
console.log(Number(num3)); // NaN - Not a Number

// Wie bekomme ich einen Number typen aus dem Inputfeld:

const getInput = () => {
  const value = Number(document.querySelector("#zahl").value);
  console.log(value);
};

// # === Math Object Methods ===
console.log("%c === Maths Methoden ===", "background:red; color:white");

// * So sehen wir alle Methoden von Math
console.log(typeof Math);
console.log(Math);

// * Math.round()
// rundet auf und ab aber ohne Nachkommastellen -> gibt dafür aber ne number aus
const num4 = 384.632323;
console.log(Math.round(num4));

// - Math.round() vs toFixed()
// Math.round rundet immer zum ganzen ab oder auf
// toFixed kann ich die ganzen Zahlen nach dem Komma angeben

// * Math.ceil
// rundet immer auf
const num5 = 14.000000001;
console.log(Math.ceil(num5));

// *Math.floor
// rundet immer ab
const num6 = 15.99499999;
console.log(Math.floor(num6));

// * Math.random
// gibt uns eine Randomzahl raus
// man bekommt immer eine Zahl zwischen 0 und 1
console.log(Math.random());

console.log(Math.round(Math.random() * 3)); // Zahl zwischen 0 und 3
console.log(Math.ceil(Math.random() * 6)); // Zahl zwischen 1 und 6 - würfel zb
console.log(Math.ceil(Math.random() * 10 + 10)); // Zahl zwischen 11 und 20
