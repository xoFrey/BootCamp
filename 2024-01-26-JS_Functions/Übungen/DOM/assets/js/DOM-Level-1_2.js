const div = document.getElementById("info");

div.innerHTML += "<h1> Hello World </h1>";
div.innerHTML += "<h2> How are you? </h2>";

const container = document.getElementById("container");
container.innerHTML = "<p> start of the element </p>";

document.write("end of the element");
console.log(container);
