const person = {
  name: "Waltraud",
  age: 57,
};

const sagNameAlter = (personInfo) => {
  console.log(personInfo.name);
  console.log(personInfo.age);
};

sagNameAlter(person);
alert(`Hello my name is ${person.name} and im ${person.age} years old.`);
