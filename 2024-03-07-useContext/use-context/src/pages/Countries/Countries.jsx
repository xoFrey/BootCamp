import Header from "../../components/Header/Header";
import "./Countries.css";
import { FetchContext, LoadingContext } from "../../context/Context";
import { useContext } from "react";

const Countries = () => {
  const { countries } = useContext(FetchContext);

  return (
    <section>
      <Header />
      <h1>Countries</h1>
      <article className="grid">
        {countries ? (
          countries.map((item, index) => (
            <div key={index}>
              {" "}
              <img src={item.flags.svg} alt="" />
              <h3>{item.name.common}</h3>
              <p>Population: {item.population}</p>
            </div>
          ))
        ) : (
          <p>Loading..</p>
        )}
      </article>
    </section>
  );
};

export default Countries;
