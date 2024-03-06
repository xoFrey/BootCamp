import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Detail.css";
import { useParams } from "react-router-dom";
const Detail = () => {
  const [info, setInfo] = useState([]);
  const [detailBeer, setDetailBeer] = useState("");

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.log("fetch error", err));
  }, []);

  const { id } = useParams();

  useEffect(() => {
    const find = info.find((beer) => beer._id === id);
    setDetailBeer(find);
  }, [info]);

  console.log(info);

  return (
    <section className="detail">
      {detailBeer ? (
        <div>
          
          <img src={detailBeer.image_url} alt="" />
          <h3>{detailBeer.name}</h3>
          <p>{detailBeer.tagline}</p>
          <p>{detailBeer.first_brewed}</p>
          <p>{detailBeer.attenuation_level}</p>
          <p>{detailBeer.description}</p>
          <Link to="/products">Back</Link>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </section>
  );
};

export default Detail;
