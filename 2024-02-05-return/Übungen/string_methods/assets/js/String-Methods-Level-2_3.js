const highlight = () => {
  const searchInput = document.querySelector("#search-input").value;
  const text = document.querySelector("article");
  text.innerHTML += `<h4 class="error" style="color:red"></h4>`;
  const error = document.querySelector(".error");

  if (text.innerHTML.indexOf(searchInput) > 0 && searchInput.length > 0) {
    error.innerHTML = " ";

    let highlightedText = text.innerText.replaceAll(
      searchInput,
      `<span class="highlight">${searchInput}</span>`
    );
    text.innerHTML = highlightedText;

    console.log(error.innerHTML);
  } else if (
    text.innerHTML.indexOf(searchInput) <= 0 ||
    searchInput.length <= 0
  ) {
    error.innerHTML = " Bitte geben Sie einen Text ein!";
  }
};
