const daysInMonth = (month, year) => {
  let daysCount = 0;
  if (month === 2 && year % 4 === 0) {
    daysCount = 29;
  } else if (month === 2 && year % 4 != 0) {
    daysCount = 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    daysCount = 30;
  } else {
    daysCount = 31;
  }

  console.log(daysCount);
};

daysInMonth(4, 2020);
