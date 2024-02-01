function writeText() {
  const inputText = document.querySelector("#text");
  const outputText = document.querySelector(".output");
  const errorText = document.querySelector(".error");

  const check =
    inputText.value.length > 0
      ? ((outputText.textContent = inputText.value),
        (errorText.textContent = ""))
      : (errorText.textContent = "Bitte geben Sie eine Nachricht ein!");
}
