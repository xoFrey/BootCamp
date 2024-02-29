import { useState } from "react";
import "./Home.css";
const Home = () => {
  const [counter, setCounter] = useState(0);

  const subtract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <section>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <p>{counter}</p>
        <button onClick={subtract}>-</button>
      </div>
      <button onClick={() => setCounter(0)}>Reset</button>
    </section>
  );
};

export default Home;
