const A = "Susi is going to codingschool";
const sliceText = document.querySelector(".slice");

sliceText.innerHTML = `<h2> ${A.slice(0, 4)} </h2>`;
sliceText.innerHTML += `<h2> ${A.slice(5, 7)} </h2>`;
sliceText.innerHTML += `<h2> ${A.slice(5)} </h2>`;
sliceText.innerHTML += `<h2> ${A.slice(23)} </h2>`;
sliceText.innerHTML += `<h2> ${A.slice(0, 7)} ${A.slice(23)}</h2>  `;
