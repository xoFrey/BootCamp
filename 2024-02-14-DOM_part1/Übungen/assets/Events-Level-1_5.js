const clickMe = document.querySelector("#clickMe");
let counter = 0;
clickMe.addEventListener("click", () => {
  clickMe.innerHTML = `Click me: ${counter++}`;
});
