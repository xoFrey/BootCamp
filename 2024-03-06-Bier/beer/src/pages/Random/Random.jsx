import { useEffect, useState } from "react";
import "./Random.css";
import { useParams } from "react-router-dom";

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
    <section className="random">
      {beer ? (
        <div>
          <img src={beer.image_url} alt="" />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Random;
