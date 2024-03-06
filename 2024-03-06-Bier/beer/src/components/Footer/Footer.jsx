import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src="../../../public/img/Logo.svg" alt="" />
      </Link>
    </footer>
  );
};

export default Footer;
