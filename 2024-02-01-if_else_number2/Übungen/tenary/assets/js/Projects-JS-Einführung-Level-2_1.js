function writeText() {
  const inputText = document.querySelector("#text");
  const outputText = document.querySelector(".output");
  const errorText = document.querySelector(".error");

  inputText.value.length > 0
    ? ((outputText.textContent = inputText.value), (errorText.textContent = ""))
    : (errorText.textContent = "Bitte geben Sie eine Nachricht ein!");
}

// # Marzio fragen wegen ternary, angeblich zweckentfremdet
