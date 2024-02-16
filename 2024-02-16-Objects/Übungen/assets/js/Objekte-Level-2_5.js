const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];
const table = document.querySelector(".table");

const inputName = document.querySelector(".inputName");
const error = document.querySelector(".error");

const writeInHTML = (objects) => {
  table.innerHTML = `<div><h3>Name</h3></div>
  <div><h3>Country</h3></div>
  <div><h3>Period Active</h3></div>
  <div><h3>Genre</h3></div>`;
  objects.forEach((singer) => {
    table.innerHTML += `
    <div><p>${singer.name}</p></div>
    <div><p>${singer.country}</p></div>
    <div><p>${singer.period_active.start} - ${singer.period_active.end}</p></div>   
    <div><p>${singer.genre}</p></div>
     `;
  });
};

writeInHTML(singers);

const search = () => {
  const filteredItem = singers.filter((item) => {
    if (item.name.includes(inputName.value)) {
      return item;
    } else {
      error.textContent = "Artist not found";
      console.log("not found");
    }
  });
  table.innerHTML = " ";
  writeInHTML(filteredItem);
};
