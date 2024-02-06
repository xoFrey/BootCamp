let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

const roundNumber = (num) => {
  let rounded = Math.round(num);
  return rounded;
};

console.log(roundNumber(array[0]));
console.log(roundNumber(array[1]));
console.log(roundNumber(array[2]));
console.log(roundNumber(array[3]));
