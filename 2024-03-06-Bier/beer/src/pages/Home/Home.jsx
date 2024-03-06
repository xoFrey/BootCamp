import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home">
        <h2>Home</h2>
        <Link to="/products">
          <img src="../../../public/img/allbeers.jpeg" alt="allbeers" />
        </Link>
        <Link to="/products">All Beers</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam
          nam neque nostrum magni ea cupiditate ducimus nesciunt dolor facere.
        </p>

        <Link to="/random">
          <img src="../../../public/img/randombeer.jpeg" alt="randombeer" />
        </Link>
        <Link to="/random/:id">Random Beer</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos delectus
          inventore molestias architecto nihil. Et animi consequuntur magni sit
          optio.
        </p>
      </section>
    </>
  );
};

export default Home;
