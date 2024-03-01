import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [betrag, setBetrag] = useState(0);
  const [input, setInput] = useState("");

  const einzahlen = (event) => {
    event.preventDefault();
    setBetrag(Number(input) + Number(betrag));
  };

  const auszahlen = (event) => {
    event.preventDefault();
    if (betrag >= input) {
      setBetrag(Number(betrag) - Number(input));
    } else {
      window.alert("Versuch nicht etwas abzuheben, was da nicht ist.");
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
