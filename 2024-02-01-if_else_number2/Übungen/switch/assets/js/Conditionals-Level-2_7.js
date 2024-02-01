function showtxt() {
  const listSelection = document.querySelector("#mylist").value;
  console.log(listSelection);
  const measureInfo = document.querySelector("#masse");
  measureInfo.innerHTML = "Hallo";
  const headlineInfo = document.querySelector(".boxMasse b");
  headlineInfo.innerHTML = "Hiiii";

  switch (listSelection) {
    case "0":
      headlineInfo.innerHTML = "Brief und Postkarte";
      measureInfo.textContent =
        "L: 10 - 23,5 cm    B:7 - 12,5 cm     H: bis 1 cm";
      break;
    case "1":
      headlineInfo.innerHTML = "DHL Paket 2 kg";
      measureInfo.textContent = "bis 60 x 30 x 15 cm";
      break;
    case "2":
      headlineInfo.innerHTML = "DHL Paket 5 kg";
      measureInfo.textContent = "bis 120 x 60 x 60 cm";
      break;
    case "3":
      headlineInfo.innerHTML = "DHL Paket 10 kg";
      measureInfo.textContent = "bis 120 x 60 x 60 cm";
      break;
    default:
      headlineInfo.innerHTML = "Extra große Größen";
  }
}
