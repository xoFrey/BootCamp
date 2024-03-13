import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-8 bg-transparent text-white">
      <h3 className="text-lg uppercase font-bold">Home_H</h3>
      <nav className="flex items-center gap-10 ">
        <Link className="font-bold text-base">Home</Link>
        <Link className="font-bold text-base">About us</Link>
        <Link className="font-bold text-base">Furniture</Link>
        <Link className="font-bold text-base">Contact us</Link>
        <Link className="font-bold text-base border-solid border rounded-lg p-2 ">
          Log in
        </Link>
        <Link className="font-bold text-base p-2 rounded-lg bg-Lgold text-white border border-solid border-Lgold ">
          Sign up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
