import { useContext } from "react";
import Dark from "../../assets/svg/Dark";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { darkLightContext } from "../../context/Context";

const Header = () => {
  const { dark, setDark } = useContext(darkLightContext);
  const theme = () => {
    setDark((dark) => !dark);
  };
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/countries">Countries</NavLink>
        <div onClick={theme}>
          <Dark />
        </div>
      </nav>
    </header>
  );
};

export default Header;
