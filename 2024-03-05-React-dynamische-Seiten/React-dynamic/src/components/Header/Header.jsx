import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link>Logo</Link>
      <nav>
        <NavLink to="/">Use Effect</NavLink>
        <NavLink to="/fetch">Fetch</NavLink>
      </nav>
    </header>
  );
};

export default Header;
