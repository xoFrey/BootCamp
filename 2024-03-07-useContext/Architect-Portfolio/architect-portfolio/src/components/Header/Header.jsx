import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Darkmode from "../../assets/svg/Darkmode/Darkmode";
import Lightmode from "../../assets/svg/Lightmode/Lightmode";
import Logo from "../../assets/svg/Logo/Logo";
import { DarkLightContext } from "../../context/Context";
import { useContext } from "react";

const Header = () => {
  const { dark, setDark } = useContext(DarkLightContext);

  const darkLight = () => {
    setDark((dark) => !dark);
  };
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/certification">Certification</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>

        <div onClick={darkLight}>{dark ? <Darkmode /> : <Lightmode />}</div>
      </nav>
    </header>
  );
};

export default Header;
