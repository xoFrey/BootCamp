import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Detail.css";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
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
        <article>
          <img src={detailBeer.image_url} alt="" />

          <h3>{detailBeer.name}</h3>
          <h4>{detailBeer.tagline}</h4>
          <div>
            <h6>First brewed:</h6>
            <h6>{detailBeer.first_brewed}</h6>
          </div>
          <div>
            <h6>Attenuation level:</h6>
            <h6>{detailBeer.attenuation_level}</h6>
          </div>
          <p>{detailBeer.description}</p>
          <Link to="/products">
            <img className="button" src="../../../public/img/Back.svg" alt="" />
          </Link>
        </article>
      ) : (
        <p>Loading....</p>
      )}

      <Footer />
    </section>
  );
};

export default Detail;
