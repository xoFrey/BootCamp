import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Darkmode from "../../assets/svg/Darkmode/Darkmode";
import Logo from "../../assets/svg/Logo/Logo";
const Header = () => {
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
        <div>
          <Darkmode />
        </div>
      </nav>
    </header>
  );
};

export default Header;
