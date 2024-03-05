import { useEffect, useState } from "react";
import "./Fetch.css";
import { Link } from "react-router-dom";
const Fetch = () => {
  const [storeData, setStoreData] = useState(null);

  // *Der Fetch wird immer ausgeführt, wenn die Komponente das erste mal gerendert wird
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      //   Bei dem 2. then speichern wir die Daten in einem State setStoreData(data)
      .then((data) => setStoreData(data))
      .catch((err) => console.log("Error", err));
  }, []);

  console.log(storeData);

  return (
    <>
      <h3>Fetch</h3>
      <section className="products">
        {storeData ? (
          storeData.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <Link to={`/fetch/${item.id}`}>Zu dem Produkt</Link>
            </div>
          ))
        ) : (
          <p>Laden...</p>
        )}
      </section>
    </>
  );
};

export default Fetch;
