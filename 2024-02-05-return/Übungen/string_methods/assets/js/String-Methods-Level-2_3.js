function highlight() {
  const searchInput = document.querySelector("#search-input").value;
  const text = document.querySelector("body article");

  if (text.innerHTML.indexOf(searchInput) >= 0 && searchInput != " ") {
    let highlightedText = text.innerHTML.replaceAll(
      searchInput,
      `<span class="highlight">${searchInput}</span>`
    );
    text.innerHTML = highlightedText;
  } else {
    text.innerHTML += `<h4 style="color:red">Nicht im text vorhanden</h4>`;
  }
}
