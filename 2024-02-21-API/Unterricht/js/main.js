// # === API (Application Programming Interface) ===
// * Eine API ist eine Schnittstelle zwischen Front- und Backend
// * APIs kommunizieren in der Regen mit dem Server, der wiederum mit den Daten Antwortet.

// ! === JSON ===
// * JSON ( Javascript Object Notation ) ist ein gängiges Format um Daten zu speichern
// * Unterstützt verschiedene Datentypen, Strings, Numbers, Boolean, Objects, Arrays
// * Hierarchische Struktur - Objekte in Objekte verschachteln
// * Gibt es in verschiedenen Programmiersprachen
// * weit verbreitet
// * "JSON Formatter" - google chrome plugin

// So schaut ein JSON aus ( Wie ein Objekt nur mit "key"auch in " " -> Man muss die Keys in " " schreiben)

// ! === Promise & Fetchen ===
console.log(fetch("../fakeData.json"));

// * 1. Ein Fetch ist eine Promise
// * 2. Eine Promise ist ein Objekt
// - Eine Promise ist ein Versprechen, dass den eventuellen Abschluss representiert. Der kann erfolgreich sein oder auch nicht -> ABER wir bekommen auf jeden Fall was zurück (Entweder Daten oder ein Fehler)
// - Eine Promise kann 3 Zustände haben:
// ? 1. <pending> - Wir haben noch keine Antwort erhalten
// ? 2. <resolved> - Antwort erhalten - alles ging gut
// ? 3. <rejected> - Antwort erhalten - wir haben einen error bekommen

// * 3. Fetch ist asynchron, heißt: es läuft parallel zu den anderen Funktionen. Andere Funktionen müssen daher nicht auf den fetch warten bis er fertig ist

// * 4. Eine Promise kann mit der Methode .then() und .catch() behandelt werden, um auf das Ergebnis oder den Fehler zu reagieren

// : -> .then() - Methode wird aufgerufen, wenn die Promise erfolgreich wurde. Sie nimmt eine Funktion entgegen,  die das Ergebnis des Promises verarbeitet.

// : -> .catch() - Methode wird aufgerufen, wenn die Promise abgelehnt wurde. Sie nimmt eine Funktion entgegen, die den Fehler des Promises behandelt

// ! === Lokales Fetchen ===

// fetch("../fakeData.json").then((response) => console.log(response));
// ===> geht nicht weil die Datenim Body sind aber kein json format haben

fetch("../fakeData.json")
  .then((response) => response.json()) // hier wird die "response" in json() umgewandelt damit wir mit der weiterarbeiten können
  .then((data) => console.log(data)) // Die Json datei befindet sich nun in "Data" und "Data" ist frei wählbar

  .catch((error) => console.log("Fehler beim Laden der JSON", error)); //  Fehler ist nun in error gespeichert

//  ! === API Fetchen ===

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((item) => {
      let productItem = document.createElement("div");

      // Titel
      let titleProduct = document.createElement("h2");
      titleProduct.textContent = item.title;
      productItem.appendChild(titleProduct);
      // Beschreibung
      let descriptionProduct = document.createElement("p");
      descriptionProduct.textContent = item.description;
      productItem.appendChild(descriptionProduct);
      // Preis
      let priceProduct = document.createElement("p");
      priceProduct.textContent = item.price + "€";
      productItem.appendChild(priceProduct);
      // Image
      let image = document.createElement("img");
      image.setAttribute("src", item.image);
      productItem.appendChild(image);

      document.querySelector(".products").appendChild(productItem);
      //Button
      let moreInfoBtn = document.createElement("button");
      moreInfoBtn.textContent = "Mehr Infos";

      moreInfoBtn.addEventListener("click", () => {
        console.log(`Produkt mit der ID ${item.id} wurde angeklickt`);
        fetch(`https://fakestoreapi.com/products/${item.id}`)
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      });
      productItem.appendChild(moreInfoBtn);
    });
  })
  .catch((error) => console.log("Im gesamten fetch error", error));
