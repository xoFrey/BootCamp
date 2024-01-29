// # === Values Auslesen ===
// ? Form => onsubmit
// ? Button, a, h1.. => onclick
function getInputValue(event) {
  // Funktion um das Neuladen der Seite zu verhindern, damit die Daten bei Submit nicht verschwinden
  event.preventDefault();

  // mit .value lesen wir die Daten von input aus
  //   Name
  const myName = document.querySelector("#name").value;
  console.log(myName);

  //   Age
  const myAge = document.querySelector("#age").value;
  console.log(myAge);

  //   Range
  const myRange = document.querySelector("#range").value;
  console.log(myRange);

  //   Happy - Checkbox muss über .checked ausgelesen werden
  const myHappiness = document.querySelector("#happy").checked;
  console.log(myHappiness);

  //   date
  const myBday = document.querySelector("#bday").value;
  console.log(myBday);

  const outputMe = document.querySelector(".output-form");
  outputMe.innerHTML =
    myName + " " + myAge + " " + myRange + " " + myHappiness + " " + myBday;
}

// # === Add, Remove and toggle Klassen ===
// ? Add
// mit classList haben wir die Möglichkeit Klassen hinzuzufügen, abzuziehen oder zu togglen
// Wenn ich classList benutze, muss ich kein . vor der Klasse schreiben, da JS schon weiß dass es sic hier um Klassen handelt

function addClass() {
  // class = .super-big
  const addMyClass = document.querySelector(".add");
  //   mit .add() fügen wir die Klasse super-big hinzu
  addMyClass.classList.add("super-big");
}

function removeClass() {
  // class = .me
  const removeMyClass = document.querySelector(".remove");
  //   mit .remove() löschen wir eine Klasse raus
  removeMyClass.classList.remove("me");
}

// ? Toggle

function darkLight() {
  // class = .dark
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.toggle("dark");
}
