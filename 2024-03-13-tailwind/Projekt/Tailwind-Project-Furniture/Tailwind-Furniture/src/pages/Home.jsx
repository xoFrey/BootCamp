import Chairs from "../components/Chairs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <section>
      <Welcome />
      <Chairs />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
