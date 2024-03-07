import "./Home.css";
import About from "../../components/About/About";
import Header from "../../components/Header/Header";

import { Link } from "react-router-dom";
import Statement from "../../components/Statement/Statement";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <>
      {" "}
      <Header />
      <section className="home">
        <article>
          <h1>
            <span>Project</span> Lorum
          </h1>
          <div className="img-container">
            <img src="../../../public/img/projectlorum.jpeg" alt="" />
            <Link to="/gallery" className="button">
              View Project
            </Link>
          </div>
        </article>
        <About />
        <Statement />
        <Projects />
      </section>
    </>
  );
};

export default Home;
