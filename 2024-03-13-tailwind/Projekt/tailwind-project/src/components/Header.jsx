import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex">
      <h3 className="text-lg">Home_H</h3>
      <nav>
        <Link>Home</Link>
        <Link>About us</Link>
        <Link>Furniture</Link>
        <Link>Contact us</Link>
        <Link>Log in</Link>
        <Link>Sign up</Link>
      </nav>
    </header>
  );
};

export default Header;
