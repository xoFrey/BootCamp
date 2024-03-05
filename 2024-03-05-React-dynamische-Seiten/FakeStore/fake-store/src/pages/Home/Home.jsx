import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <h1>Willkommen</h1>
      <Link to="/products">Go to Store</Link>
    </main>
  );
};

export default Home;
