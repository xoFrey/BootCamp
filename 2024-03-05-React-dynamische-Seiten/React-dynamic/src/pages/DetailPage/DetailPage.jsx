import { useEffect, useState } from "react";
import "./DetailPage.css";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log("Error", err));
  }, []);

  // * Link auslesen
  //   {id} - object deconstruction um nur das value zu bekommen und nicht key und value -> useParams() ist ein object
  const { id } = useParams();
  console.log(id);

  //   * Find methode schreiben und in neuen state schreiben (gefilterete daten)
  //   find vs filter -> filter gibt ein array raus weils für mehrere Elemente ist, während find nur für ein element ist. Heißt bei find bekommen wir ein object raus und kein array mit objecten drin
  useEffect(() => {
    const find = product.find((item) => Number(item.id) === Number(id));

    setFilteredProduct(find);
  }, [product]);
  console.log(filteredProduct);
  // jedes mal wenn product sich ändern, wird die find methode neu ausgeführt
  return (
    <section>
      <h2>Detail Page</h2>
      {filteredProduct ? (
        <div>
          <h3>{filteredProduct.title}</h3>
          <img src={filteredProduct.image} alt="" />
          <p>{filteredProduct.price} €</p>
          <p>{filteredProduct.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default DetailPage;
