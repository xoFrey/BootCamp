import { useState } from "react";
import "./Counter.css";

// Ich kann ganz viele States haben
// Ein useState ist in seinem Dokument gefangen, außer ich reiche ih mit dem "props" weiter an das Kindelement

// ! Live Circle
// * Mounting - Das erste rendern einer Komponente / state auf einer Seite
// * Updating - Wenn der state sich ändern und neu gerendet wird

const Counter = () => {
  // - States kommen immer hier oben rein
  // state, setState ist frei definierbar
  // "set" sollte im zweiten Wert vorkommen - Best practise
  // useState() -> wird importiert, in die Klammern kann man alles mögliche reinschreiben von "", [], 0 etc
  // state - aktueller wert
  // setState - Tool um state zu bearbeiten
  // useState() - Methode von React
  // 0 - initialer Wert von state -> kann jeder Datentyp sein, hier als Beispiel 0
  // [] - kein ARRAY

  const [state, setState] = useState(0);

  console.log(state);

  // Hier haben wir eine Funktion die mit Button reagiert - Ändert den State zu "Ciao Kakao"
  const changeState = () => {
    setState("Ciao Kakao");
  };
  // ! Ein State kann jeden Datentypen haben
  // * Array
  const [array, setArray] = useState(["Freddy", "Marzio"]);
  console.log(array);
  // * Object
  const [object, setObject] = useState({
    name: "Marzio",
    age: 30,
    adult: true,
  });

  console.log(object);
  // *Number
  const [number, setNumber] = useState(22);
  console.log(number);

  // ! Counter

  const [counter, setCounter] = useState(0);

  // * add Funktion +1
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <section className="counter-section">
      <h3>How to State</h3>
      <h1>{state}</h1>
      {/* Funktionsaufruf ohne Klammern */}
      <button onClick={changeState}>Bitte State ändern</button>
      <h2>{counter}</h2>
      <div className="counter">
        <button onClick={add}>+</button>
        {/* Man kann funktionen mit callback function auch inline schreiben */}
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </section>
  );
};

export default Counter;
