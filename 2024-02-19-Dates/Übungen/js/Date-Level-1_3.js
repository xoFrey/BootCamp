const dateOutput = document.querySelector(".date");

const myDate = new Date();

myDate.setDate(20);
myDate.setMonth(5);
myDate.setFullYear(2222);

dateOutput.innerHTML += myDate + `</br>`;

myDate.setDate(24);
myDate.setMonth(1);
myDate.setFullYear(2123);

dateOutput.innerHTML += myDate + `</br>`;

myDate.setMonth(2);

dateOutput.innerHTML += myDate + `</br>`;
myDate.setDate(3);

dateOutput.innerHTML += myDate + `</br>`;

const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 30);

dateOutput.innerHTML += currentDate;
