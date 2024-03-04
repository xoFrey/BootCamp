import { NavLink, Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div></div>
      <nav>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/opening">Opening</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
      </nav>
    </header>
  );
};

export default Header;
