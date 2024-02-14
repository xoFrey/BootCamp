// # === EVENT LISTENER ===

// ! onclick()

const sayHello = () => {
  console.log("Hi, ich bin der Onclick Button");
};

// ! EventListener ()

const helloOutput = document.querySelector("#hello-output");
const sayHiBtn = document.querySelector("#say-hi");
const textInput = document.querySelector("#text-input");
const selectInput = document.querySelector("#select-input");
const wrapper = document.querySelector(".wrapper");
const submitBtn = document.querySelector("#submit-btn");
const param = document.querySelector("#param");

// ? Aufbau
// - Welches Element soll beobachtet werden
// *sayHiBtn

// - Eventlistener hinzufügen
// *sayHiBtn.addEventListener()

// - Event definieren
// * sayHiBtn.addEventListener("click")

// - Definiere was bei dem Event passieren soll
// :"click" -> Bei was für einem Event soll was passieren, nicht frei definierbar!
// : () => {} -> Callbackfunction
sayHiBtn.addEventListener("click", () => {
  helloOutput.innerHTML = "Hi vom EventListener";
});

// : "mouseover" -> statt hover
textInput.addEventListener("mouseover", () => {
  helloOutput.innerHTML = "Im hovering wui ";
});

const changeBG = () => {
  let a = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  let c = Math.ceil(Math.random() * 255);

  wrapper.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
};
wrapper.addEventListener("mouseover", changeBG);

// : "mouseout" -> die Maus bewegt sich raus
textInput.addEventListener("mouseout", () => {
  helloOutput.innerHTML = "Im hovering wui - and now im out";
});

// :"change"
selectInput.addEventListener("change", () => {
  console.log("Option wird geändert");
  helloOutput.innerHTML = selectInput.value;
});

// ! Externer EventListener
// Wir können die Funktion auch auslagern, damit wir das genereller halten können

// * 1 Funktion schreiben
// :"input"

const inputFunction = () => {
  console.log("In mich wurde etwas eingetragen ");
  helloOutput.innerHTML = textInput.value;
};
// keine funktionsklammern für die funktion
textInput.addEventListener("input", inputFunction);

// :remove

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Submit geclicked");
  //   ? Remove funktioniert nur mit einer Funktion, die ausgelagert wurde. GEHT NICHT mit callbackfunction
  wrapper.removeEventListener("mouseover", changeBG);
});

// ! Parameter in EventListener
// ? SO geht es leider NICHT

// const paramFunction = (a, b) => {
//   console.log(a, b);
// };

// param.addEventListener("click", paramFunction("Kuchen", "Trinken"));
const paramFunction = (a, b) => {
  console.log(a, b);
};
// ? In der Callbackfunction muss die funktion aufgerufen werden und da die Parameter übergeben werden! 

param.addEventListener("click", () => {
  paramFunction("Auto", "Haus");
});


