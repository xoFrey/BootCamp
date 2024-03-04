import { useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
const Header = (props) => {
  // * Ein State ist immer nur in seinem Dokument gefangen, solange wir ihn nicht weiterreichen
  const [darkLight, setDarkLight] = useState(false);

  const globalDarkMode = () => {
    props.setSuperDark((superDark) => !superDark);
  };

  return (
    <header className={darkLight ? "dark" : ""}>
      {/* Mit && fragt man nur auf true ab und nutzt man nur wenn man keinen false wert hat -> "Ist darkLight true? Ja? Dann mach "dark" */}
      {/* <header className={darkLight && "dark"}> */}
      <h2>Logo</h2>
      <nav>
        {/* NavLink und Link - machen das gleiche, aber NavLink fügt eine active Klasse hinzu die man stylen kann. Heißt wenn Link aktiv ist, kann man die extra stylen */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <button onClick={() => setDarkLight((darkLight) => !darkLight)}>
        dark
      </button>
      <button onClick={globalDarkMode}>Set Global Darkmode</button>
    </header>
  );
};

export default Header;
