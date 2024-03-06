import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Random = () => {
  const [beer, setBeer] = useState([]);
  const [randomBeer, setRandomBeer] = useState("");

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => res.json())
      .then((data) => setBeer(data))
      .catch((err) => console.log("random fetch", err));
  }, []);
  console.log(beer);

  return (
    <section className="detail">
      {beer ? (
        <article>
          <img src={beer.image_url} alt="" />
          <h3>{beer.name}</h3>
          <h4>{beer.tagline}</h4>
          <div>
            <h6>First brewed:</h6>
            <h6>{beer.first_brewed}</h6>
          </div>
          <div>
            <h6>Attenuation level:</h6>
            <h6>{beer.attenuation_level}</h6>
          </div>
          <p>{beer.description}</p>
          <Link to="/">
            <img className="button" src="../../../public/img/Back.svg" alt="" />
          </Link>
        </article>
      ) : (
        <p>Loading...</p>
      )}{" "}
      <Footer />
    </section>
  );
};

export default Random;
