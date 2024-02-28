import "./Produkt.css";

const Produkt = ({ img, price, description }) => {
  return (
    <div className="product">
      <img src={img} alt="" /> <p>{description}</p>
      <p>${price}</p>
      <a href="#">BUY NOW</a>
    </div>
  );
};

export default Produkt;
