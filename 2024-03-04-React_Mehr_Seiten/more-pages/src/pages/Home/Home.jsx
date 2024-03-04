import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import "./Home.css";

const Home = () => {
  const [superDark, setSuperDark] = useState(false);

  console.log(superDark);
  return (
    <section className={superDark && "super-dark"}>
      <Hero
        title="Hallo von Mir"
        description="Hallo ich bin ein langer text, der absolut nichts aussagt"
      />
    </section>
  );
};

export default Home;
