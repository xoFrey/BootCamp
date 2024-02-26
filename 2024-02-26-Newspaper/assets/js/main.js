const input = document.querySelector("#search");
const button = document.querySelector(".button");
const infoBox = document.querySelector(".info-box");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const language = document.querySelector("#language").value;
  const sort = document.querySelector("#sort").value;

  if (input.value.length <= 0) {
    console.log("hiii");

    fetch(
      `https://newsapi.org/v2/everything?q="all"&language=${language}&sortBy=${sort}&apiKey=fe86a924945f44798c65d36e703155bd`
    )
      .then((res) => res.json())
      .then((data) => {
        infoBox.innerHTML = "";
        data.articles.forEach((item) => {
          if (item.author != null && item.urlToImage != null) {
            console.log(item);

            infoBox.innerHTML += `<div>
              <h2>${item.title}</h2>
              <p>${item.content}</p>
              <img src="${item.urlToImage}" alt="contentpic"/>
              <a href="${item.url}">More Infos</a>
              </div>`;
          }
        });
      })
      .catch((err) => console.log(err));
  } else {
    fetch(
      `https://newsapi.org/v2/everything?q=${input.value}&language=${language}&sortBy=${sort}&apiKey=fe86a924945f44798c65d36e703155bd`
    )
      .then((res) => res.json())
      .then((data) => {
        infoBox.innerHTML = "";
        data.articles.forEach((item) => {
          if (item.author != null && item.urlToImage != null) {
            console.log(item);

            infoBox.innerHTML += `<div>
            <h2>${item.title}</h2>
            <p>${item.content}</p>
            <img src="${item.urlToImage}" alt="contentpic"/>
            <a href="${item.url}">More Infos</a>
            </div>`;
          }
        });
      })
      .catch((err) => console.log(err));
  }
});
