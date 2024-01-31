function adult() {
  const userAge = document.querySelector("#age").value;

  if (userAge < 18) {
    const statusAge = document.querySelector(".status");
    statusAge.innerHTML = "under 18";
  } else {
    statusAge.innerHTML = "over 18";
  }
}
