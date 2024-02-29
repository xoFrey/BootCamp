import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [darkMode, setDarkmode] = useState(false);

  return (
    <main className={darkMode ? "" : "dark"}>
      <h1>{darkMode ? "Day" : "Night"}</h1>
      <button onClick={() => setDarkmode((darkMode) => !darkMode)}>
        Change to {darkMode ? "Night" : "Day"}
      </button>
    </main>
  );
};

export default Home;
