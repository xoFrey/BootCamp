let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius = fahrenheit.map((temp) => Math.round((temp - 32) / 1.8));

console.log(celsius);
