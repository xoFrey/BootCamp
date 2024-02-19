const myHours = (date) => {
  date.getHours() < 12 ? console.log("AM") : console.log("PM");
};

date1 = new Date(1999, 10, 5, 15); //PM
date2 = new Date();
date3 = new Date(2019, 12, 3, 12); //PM
date4 = new Date(2000, 1, 1, 11); //AM
myHours(date1);
myHours(date2);
myHours(date3);
myHours(date4);
