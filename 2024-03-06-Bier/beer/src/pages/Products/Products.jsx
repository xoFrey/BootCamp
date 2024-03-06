import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
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
            <h2>{item.name}</h2>
            <p>{item.tagline}</p>
            <h4>created by: {item.name}</h4>
            <img src={item.image_url} alt="beer" />
            <Link to={`/detail/${item._id}`}>Details</Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Products;
