import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Our Projects</h2>
      <div className="wrap-img">
        <div className="container">
          <img src="../../../public/img/filterprojectwithfilter.png" alt="" />
          <div className="sample">
            <h3>Sample Project</h3>
            <Link to="/" className="more">
              View More
            </Link>
          </div>
        </div>
        <img src="../../../public/img/project2.png" alt="" />
        <img src="../../../public/img/project3.png" alt="" />
        <img src="../../../public/img/project4.png" alt="" />
        <img src="../../../public/img/project5.png" alt="" />
      </div>
      <div className="all-container">
        <Link className="all" to="/">
          {" "}
          All Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
