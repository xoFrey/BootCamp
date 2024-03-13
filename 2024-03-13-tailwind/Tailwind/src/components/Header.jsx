import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-2">
      <h2 className="text-[30px]">Logo</h2>
      <nav className="p-2 text-lg">
        <Link className="p-2" to="/">
          Home
        </Link>
        <Link className="p-2" to="/">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
