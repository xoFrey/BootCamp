// # Selektieren von Elementen

// ! HTML Collection
// Eine HTML Collection ist ein Array mit Objekten drin von HTML Elementen. Es wird in JS verwendet, uum eine Gruppe von Elementen in DOM zu selektieren

// DOM = Document Object Model

// - HTML Collections sind live: Sobald sich HTML ändert, ändert sich auch die Collection
// - Index basierend - das erste Element ist 0 #
// - wird oft beim document.getElementByClassName() und document.getElementByTagName() benutzt -> Da bekommen wir eine Collection zurück

// ? So bekomme ich Zugriff auf die HTML Elemente (hier form)
console.log(document.forms);

let myForm = document.forms.loginForm;
console.dir(myForm);

// ? Holt input-Feld raus
console.dir(myForm.username);

// ? Holt value raus
// "username" - name des Inputs
console.log(myForm.username.value);

// ? Holt email value
console.log(myForm.email.value);

// ? Holt button
console.log(myForm.button.value);

// # nodeList
// Eine NodeList ist eine Sammlung von Knoten, darum Nodes. Im Gegenzug zu HTML Collections können nodes alle Arten von DOM Knoten enthalten

// - Node können statisch sein oder live ( kommt auf das Object an )
// - Index basierend - Erstes Element ist 0
// - NodeList werden oft als Rückgabewerte von DOM Methoden wie document.querySelectorAll oder Node.childNodes erhalten.

// ? Liste holen
const liHTMLCollection = document.getElementsByTagName("li");
const liNodeList = document.querySelectorAll("li");

console.log(liHTMLCollection);
console.log(liNodeList);

// ? So bekomme ich einzelne Child Elemente
console.dir(document.body.children[0]); // Ich bekomme das Formular
console.dir(document.body.children[0].children); // Ich bekomme die Kinder des Formulars also alle inputs
console.dir(document.body.children[0].children[0]); // Ich bekomme das erste Input

console.dir(document.body.children[1]); // Ich bekomme die Liste
console.dir(document.body.children[1].children); // Ich bekomme die Li's

// - So fügen wir was in unseren Children ein

document.body.children[0].innerHTML += `<p>Ich bin im Form Element</p>`;
document.body.children[1].innerHTML += `<li>Ich bin ein li-tag</li>`;

// - So machen wir den Text von InputFeld Farbig

document.body.children[0].children[0].style.color = "blue";
document.body.children[0].children[1].style.color = "red";

// # firstElementChild & lastElementChild

console.dir(document.body.firstElementChild); // Wir bekommen das erste Element von HTML zurückd
console.log(document.body.firstElementChild.lastElementChild); // Wir bekommen das Letzte Element von HTML zurückd

// # ==== Create Element, appendChild ====

console.clear();
// * Element ins HTML einfügen

// ? 1. Erstellt ein Element deiner Wahl
let div = document.createElement("div");

// ? 2. Erstellt den text für das Div/ Element
div.textContent = "Test Div";

// ? 3. styling deiner Elemente
div.style.height = "200px";
div.style.backgroundColor = "pink";

// ? 4. Element in das HTML hinzufügen
document.body.appendChild(div);

// # === setAttribut ("attribute", "attribute-inhalt") ====
// So kann ein Bild in das HTML geschrieben werden

let image = document.createElement("img");

image.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
// hier definiere ich meine alt
image.setAttribute("alt", "diver");
// hier füge ich eine Klasse hinzu
image.setAttribute("class", "random-class-name");
image.style.width = "300px";
image.style.height = "300px";
// ins HTML schreiben
document.body.appendChild(image);

document.body.innerHTML += `<img class="random-class-name" src="https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="test">`;

// # ==== setAttribut & forEach ===

let imgArray = [
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
];

// 1. Schleife erstellen
imgArray.forEach((elem) => {
  // 2. erstellen img tag
  let img = document.createElement("img");
  // 3. src anpassen
  img.setAttribute("src", elem);
  img.setAttribute("alt", "random");
  img.setAttribute("class", "pic");
  document.body.appendChild(img);
});
