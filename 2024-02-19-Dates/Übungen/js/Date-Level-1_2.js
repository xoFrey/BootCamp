const dateOutput = document.querySelector(".date");

let date = new Date();
dateOutput.innerHTML += date + `</br>`;
dateOutput.innerHTML += date.getFullYear() + `</br>`;
dateOutput.innerHTML += date.getMonth() + ` Monat </br>`;
dateOutput.innerHTML += date.getDate() + ` Tag </br>`;
dateOutput.innerHTML += date.getHours() + ` Stunde </br>`;
dateOutput.innerHTML += date.getMinutes() + ` Minute </br>`;
dateOutput.innerHTML += date.toLocaleString("default", { weekday: "long" });
+` </br>`;
dateOutput.innerHTML +=
  ` </br>` + date.toLocaleString("default", { month: "long" });
