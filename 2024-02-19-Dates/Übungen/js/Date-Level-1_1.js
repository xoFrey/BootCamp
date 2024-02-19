const dateOutput = document.querySelector(".date");

let date1 = new Date("September 2, 2019 09:00:00");
dateOutput.innerHTML += `<p>${date1} = new Date("September 2, 2019 09:00:00"); </p>`;
let date2 = new Date(0);
dateOutput.innerHTML += `<p>${date2} = new Date(0);</p>`;
let date3 = new Date(31556908800);
dateOutput.innerHTML += `<p>${date3} = new Date(31556908800);</p>`;
let date4 = new Date(86400000);
dateOutput.innerHTML += `<p>${date4} = new Date(86400000);</p>`;
