import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section>
        <h1>Welcome to my simple Blog</h1>
        <NavLink to="/blog">Go to articles</NavLink>
      </section>
    </main>
  );
};

export default Home;
