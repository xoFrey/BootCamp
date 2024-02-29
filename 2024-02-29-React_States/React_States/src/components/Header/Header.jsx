import { useState } from "react";
import "./Header.css";
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className={darkMode ? "dark" : ""}>
      <div>
        <img src="./public/img/Logo.png" alt="" />
        <h2>Logo</h2>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        {/* Toggle Funktion!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <button onClick={() => setDarkMode((darkMode) => !darkMode)}>
          {darkMode ? "Light" : "Dark"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
