let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const monthName = (date) => {
  const myDate = new Date(date);
  const monthName = myDate.toLocaleString("default", { month: "long" });
  console.log(monthName);
};

monthName("2001-3-4");
monthName("2019-12-24");
monthName("1410-07-15");
