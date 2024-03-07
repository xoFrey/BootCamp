import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <article className="about-info">
        <div>
          <img src="../../../public/img/about1.jpeg" alt="" />
          <img src="../../../public/img/about2.jpeg" alt="" />
        </div>
        <img src="../../../public/img/about3.jpeg" alt="" />
      </article>
      <div>
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Link to="/">Read More</Link>
      </div>
    </section>
  );
};

export default About;
