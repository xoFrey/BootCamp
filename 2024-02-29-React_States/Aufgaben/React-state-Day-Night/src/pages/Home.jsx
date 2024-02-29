import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [darkMode, setDarkmode] = useState(false);
  const [dayNight, setDayNight] = useState("Day");
  const [change, setChange] = useState("Night");

  const changeDayNight = () => {
    setDarkmode((darkMode) => !darkMode);
    darkMode
      ? (setDayNight("Night"), setChange("Day"))
      : (setDayNight("Day"), setChange("Night"));
  };

  return (
    <main className={darkMode ? "" : "dark"}>
      <h1>{dayNight}</h1>
      <button onClick={changeDayNight}>Change to {change}</button>
    </main>
  );
};

export default Home;
