const dateOutput = document.querySelector(".date");
const weekdays = document.querySelector(".weekdays");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const period = document.querySelector(".ampm");

const periodFunction = (date) => {
  return date.getHours() < 12 ? "AM" : "PM";
};

let date = new Date();
const myYear = date.getFullYear();
const myMonth = date.getMonth();
const myDays = date.getDate();
const myHours = date.getHours();
const myMinutes = date.getMinutes();
const mySeconds = date.getSeconds();
const myWeekday = date.toLocaleString("default", { weekday: "short" });
const myMonthName = date.toLocaleString("default", { month: "long" });
const myPeriod = periodFunction(date);

// : Clock
weekdays.innerHTML = `<h2>${myWeekday}</h2>
<p class="description">Day</p>
`;
hours.innerHTML = `<h2>${myHours} :</h2>
<p class="description">Hour</p>
`;
minutes.innerHTML = `<h2>${myMinutes < 10 ? "0" + myMinutes : myMinutes} :</h2>
<p class="description">Minutes</p>
`;
seconds.innerHTML = `<h2>${mySeconds < 10 ? "0" + mySeconds : mySeconds}</h2>
<p class="description">Seconds</p>
`;
period.innerHTML = `<h2>${myPeriod}</h2>
<p class="description">Period</p>
`;
