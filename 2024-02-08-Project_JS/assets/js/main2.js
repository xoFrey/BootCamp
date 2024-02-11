const test = [
  ["Hallo", "hiii", "hehe"],
  ["ich will filtern", "bitte"],
  ["und das in ich HTML schreiben", "lalala"],
  ["hihi", "ich bin doof"],
  ["blaaah", "du bist doof"],
];

const box = document.querySelector(".movie-box");
let newArray = [];
let param = [];
const writeInHTML = (param) => {
  newArray = `<div class="grid-box">${param
    .map((item) => (item = `<p>${item}</p>`))
    .join("")}</div>`;

  box.innerHTML = newArray;
};

writeInHTML(test);

// const filterMovies = () => {
//   const inputSearch = document.querySelector("#inputSearch").value;

//   let filtered = test.filter((item) => item.includes(inputSearch));
//   console.log(filtered);
//   console.log(newArray);

//   newArray = filtered;
//   console.log(newArray);

//   writeInHTML(newArray);
// };

// const filterMovies = () => {
//   const inputSearch = document.querySelector("#inputSearch").value;

//   const save = test.map((list) => {
//     return list.filter((item) => {
//       return item.includes(inputSearch);
//     });
//   });
//   console.log(save);

//   // writeInHTML(save);
// };

// const test = [
//   ["Hallo"],
//   ["ich will filtern"],
//   ["und das in ich HTML schreiben", "lalala"],
//   ["hihi"],
//   ["blaaah"],
// ];
let newTest = [];
const filterMovies = () => {
  // const inputSearch = document.querySelector("#inputSearch").value;
  const searchword = "ich";

  console.table(test);
  let filter = test.filter((item) => {
    return item.forEach((element) => {
      if (element.includes(searchword) == true) {
        return newTest.push(item);
      }
    });
    // console.log("item-länge: " + item.length);
  });

  console.log(filter);
  console.log(newTest);
  writeInHTML(newTest);
};
