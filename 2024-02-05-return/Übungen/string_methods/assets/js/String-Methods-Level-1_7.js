const ptag = document.querySelector(".one");
const ptag2 = document.querySelector(".two");
const ptag3 = document.querySelector(".three");

let text = "Sam is good at codingschool";
let res = text.replace("good", "bad");
ptag.textContent = res;
res = text.replace("Sam", "Susi");
ptag2.textContent = res;
res = text.replace("codingschool", "tennis");
ptag3.textContent = res;
