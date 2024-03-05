import { useEffect, useState } from "react";

const UseEffect = () => {
  const [slider, setSlider] = useState(0);
  const [count, setCount] = useState(0);

  //   ! UseEffect
  // UseEffect wird immer dann ausgeführt sobald sich das state / die Variable ändert
  // Wenn das dependency array nicht befüllt ist, wird useEffect beim ersten rendern der Seite ausgeführt
  useEffect(() => {
    console.log("Slider wurde verändert");
  }, [slider]);

  //   * So ist die funktion aufgebaut
  // useEffect() - Name der Funktion
  // () => {} - Arrow Callbackfunction
  // [] - dependency array (Abhängigkeit)

  const add = () => {
    setCount(count + 1);
    // Der count ist hier immer ein hinterhet, da das log den update nicht mitbekommen hat
    console.log("Der Counter in der funtion:", count);
  };
  console.log("Der Counter außerhalb der funtion:", count);
  useEffect(() => {
    // Hier sehen wir den richtigen count, nachdem es upgedated wurde
    console.log("Der Counter im useEffect", count);
  }, [count]);

  return (
    <>
      <h2>Use Effect</h2>
      <h3>Der Slider steht auf: {slider}</h3>
      <input
        type="range"
        min={0}
        max={5}
        value={slider}
        onChange={(event) => setSlider(event.target.value)}
      />
      <h3>{count}</h3>
      <button onClick={add}>Click Me</button>
    </>
  );
};

export default UseEffect;
