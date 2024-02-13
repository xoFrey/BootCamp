let numArr = [5, 22, 15, 100, 55];
const result = document.querySelector(".result");

for (let i = 0; i < numArr.length; i++) {
  for (let j = 2; j < numArr[i]; j++) {
    if (numArr[i] % j === 0) {
      result.innerHTML += `<p>${
        numArr[i]
      } is devidable by ${j}. The Result is: ${numArr[i] / j}</p>`;
    }
  }
}
