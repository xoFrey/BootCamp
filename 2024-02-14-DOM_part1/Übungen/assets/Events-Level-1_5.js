const clickMe = document.querySelector("#clickMe");
let counter = 1;
clickMe.addEventListener("click", () => {
  clickMe.innerHTML = `Click me: ${counter++}`;
});
