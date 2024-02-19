const workDay = (date) => {
  const currentDay = new Date(date);

  if (currentDay.getDay() < 6 && currentDay.getDay() > 0) {
    console.log("Workday");
  } else {
    console.log("Weekend");
  }
};

workDay("12.15.2019");
workDay("2.16.2001");
workDay("2.1.2020");
workDay("2.29.2020");
