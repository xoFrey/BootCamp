import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  // Hier kommt die funktion rein
  return (
    // hier kommt das html rein
    // * className für Klassen
    <div className="home">
      <Header />
      <h1>Ich bin die Home Seite</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quos
          voluptate voluptatum vero sint quis sequi mollitia excepturi, iste sed
          eveniet? Suscipit sunt dicta maiores placeat ipsa ut quis dolores?
        </p>
      </div>
    </div>
  );
};

export default Home;

// stateless function components
