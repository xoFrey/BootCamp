import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import NewsList from "../components/NewsList/NewsList";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero
        title="Die Katze von Chile"
        descriptionIzel="Hallo ich bin eine Katze in Chile"
        img="./public/img/Cute-Cat-icon.png"
        mirrored="true"
      />
      <Hero
        title="Der Oktopus von Chile"
        descriptionIzel="Hallo ich bin ein Oktopus in Chile"
        img="./public/img/Logo.png"
        mirrored="false"
      />
      <NewsList />
      <Footer />
    </>
  );
};

export default Home;
