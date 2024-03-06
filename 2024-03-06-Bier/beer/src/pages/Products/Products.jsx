import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Footer from "../../components/Footer/Footer";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("fetch error", err));
  }, []);

  console.log(products);

  return (
    <section className="products">
      {products ? (
        products.map((item, index) => (
          <div key={index} className="beer">
            <img src={item.image_url} alt="beer" />
            <article>
              <h2>{item.name}</h2>
              <h4>{item.tagline}</h4>
              <h5>created by: {item.name}</h5>

              <Link to={`/detail/${item._id}`}>Details</Link>
            </article>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}{" "}
      <Footer />
    </section>
  );
};

export default Products;
