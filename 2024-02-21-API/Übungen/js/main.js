fetch(`https://picsum.photos/v2/list`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((item) => {
      let myDiv = document.createElement("div");

      let image = document.createElement("img");
      image.setAttribute("src", item.download_url);
      myDiv.appendChild(image);

      let author = document.createElement("h3");
      author.textContent = item.author;
      myDiv.appendChild(author);

      let button = document.createElement("button");
      button.textContent = "See more";
      myDiv.appendChild(button);

      button.addEventListener("click", () => {
        window.open(`${item.url}`, "_blank");
      });

      document.querySelector(".pics").appendChild(myDiv);
    });
  });
