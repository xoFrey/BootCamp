import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <section className="products">
      <h2>Products</h2>
      <article className="products-grid">
        {products ? (
          products.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.price} €</p>
              <Link to={`/products/details/${item.id}`}>Show More</Link>
            </div>
          ))
        ) : (
          <p>Loading</p>
        )}
      </article>
    </section>
  );
};

export default Products;
