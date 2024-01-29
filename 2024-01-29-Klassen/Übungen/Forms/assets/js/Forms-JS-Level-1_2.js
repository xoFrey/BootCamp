function myAge(event) {
  event.preventDefault();
  const birthYear = document.querySelector("#birthyear").value;
  const myAge = 2024 - birthYear;
  const result = document.querySelector(".result");
  result.innerHTML = myAge;
}
