import "./Home.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Projects from "../components/Main/Projects/Projects";
import Skills from "../components/Main/Skills/Skills";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <h1>
        Hi, I am <span>Izel Acar.</span>
      </h1>
      <h3>A Front End Developer.</h3>
      <p className="homep">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maiores
        laudantium facere odit? Nihil temporibus ratione ipsa, quaerat ea
        maxime. Asperiores, reiciendis eos blanditiis assumenda magni iure,
        nulla ab ex fuga illum voluptatibus aut. A sit illo molestias aut, dolor
        quos ipsum vitae enim! Consequatur.
      </p>
      <a className="button" href="#">
        Resume
      </a>
      <Projects />
      <Skills />
      <Footer />
      <p>Created by Izel Acar</p>
    </div>
  );
};

export default Home;
