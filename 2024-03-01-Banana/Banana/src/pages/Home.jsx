import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [betrag, setBetrag] = useState(0);
  const [input, setInput] = useState("");

  const einzahlen = (event) => {
    event.preventDefault();
    if (input < 0) {
      setBetrag(Number(input * -1) + Number(betrag));
      setInput("");
    } else {
      setBetrag(Number(input) + Number(betrag));
      setInput("");
    }
  };

  const auszahlen = (event) => {
    event.preventDefault();
    if (input < 0) {
      if (betrag >= input) {
        setBetrag(Number(betrag) - Number(input * -1));
        setInput("");
      } else {
        window.alert("Versuch nicht etwas abzuheben, was da nicht ist.");
      }
    } else {
      if (betrag >= input) {
        setBetrag(Number(betrag) - Number(input));
        setInput("");
      } else {
        window.alert("Versuch nicht etwas abzuheben, was da nicht ist.");
      }
    }
  };

  return (
    <>
      <h1 id="title">Banana Bank</h1>
      <header className="header">
        <section className="konto">
          <h2>Mein Girokonto</h2>
          <article className="saldo">
            <h3 className="geldbetrag">{betrag} €</h3>
          </article>
          <form>
            <input
              type="number"
              name="betrag"
              placeholder="Betrag in €"
              id="input"
              onChange={(event) => setInput(event.target.value)}
              value={input}
              min={0}
            />
            <div>
              <button className="einzahlen" onClick={einzahlen}>
                Einzahlen
              </button>
              <button className="auszahlen" onClick={auszahlen}>
                Auszahlen
              </button>
            </div>
          </form>
        </section>
      </header>
    </>
  );
};

export default Home;
