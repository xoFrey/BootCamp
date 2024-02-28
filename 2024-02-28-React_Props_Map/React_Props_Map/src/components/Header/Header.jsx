import "./Header.css";
const Header = () => {
  return (
    <header>
      <div>
        <img src="./public/img/Logo.png" alt="" />
        <h2>Logo</h2>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
