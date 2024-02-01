function pwCheck() {
  const inputPw = document.querySelector("#pwfield");
  console.log(inputPw.value.length);
  const info = document.querySelector(".info");

  const check =
    inputPw.value.length == 8
      ? (info.textContent = "Dein Passwort ist sicher!")
      : (info.textContent = "Dein Passwort ist unsicher!");
}
