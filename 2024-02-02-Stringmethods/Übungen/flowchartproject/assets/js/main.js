function sliceEmUp() {
  const inputText = document.querySelector("#inputText").value;
  const sliceText = document.querySelector("#sliceText").value;
  const before = document.querySelector("#before").checked;
  const after = document.querySelector("#after").checked;
  const first = document.querySelector(".first");
  const second = document.querySelector(".second");
  const error = document.querySelector(".error");

  if (inputText.length > 0) {
    error.innerHTML = "";
    if (before == true && inputText.indexOf(sliceText) >= 0) {
      first.innerHTML = inputText.slice(0, inputText.search("a"));
      second.innerHTML = inputText.slice(inputText.search("a"));
    } else if (after == true && inputText.indexOf(sliceText) >= 0) {
      first.innerHTML = inputText.slice(0, inputText.search("a") + 1);
      second.innerHTML = second.innerHTML += inputText.slice(
        inputText.search("a") + 1
      );
    } else {
      error.innerHTML = "Zeichen in Zeichenkette nicht vorhanden!";
    }
  } else {
    error.innerHTML = "Bitte geben Sie einen Text ein!";
  }
}
