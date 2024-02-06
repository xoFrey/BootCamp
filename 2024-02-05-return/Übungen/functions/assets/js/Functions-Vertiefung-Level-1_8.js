const age = (yearBorn) => {
  let myAge = 2024 - yearBorn;
  return myAge;
};

console.log(age(1993));

const compareAge = (age1, age2) => {
  let ageDiff;
  if (age1 >= age2) {
    ageDiff = age1 - age2;
    return ageDiff;
  } else {
    ageDiff = age2 - age1;
    return ageDiff;
  }
};

console.log(compareAge(43, 52));
