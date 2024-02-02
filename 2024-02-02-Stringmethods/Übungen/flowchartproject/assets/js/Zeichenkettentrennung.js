function sliceEmUp() {
  const inputText = document.querySelector("#inputText");
}

const bsp = "Hallo Supercode";
const first = document.querySelector(".first");
const second = document.querySelector(".second");

const test = bsp.slice(0, bsp.search("a"));
console.log(test);
console.log(bsp.search("a")); // pos 1

// ! before
first.innerHTML = bsp.slice(0, bsp.search("a"));
second.innerHTML = bsp.slice(bsp.search("a"));

// ! after
first.innerHTML = bsp.slice(0, bsp.search("a") + 1);
second.innerHTML = second.innerHTML += `<h2> ${bsp.slice(
  bsp.search("a") + 1
)} </h2>`;
