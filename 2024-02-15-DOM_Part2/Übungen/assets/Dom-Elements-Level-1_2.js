const myFunction = () => {
  const exampleClass = document.getElementsByClassName("example");
  console.log(exampleClass);
  for (let i = 0; i < exampleClass.length; i++) {
    exampleClass[i].style.backgroundColor = " black";
    exampleClass[exampleClass.length - 1].style.color = "white";
  }
};
