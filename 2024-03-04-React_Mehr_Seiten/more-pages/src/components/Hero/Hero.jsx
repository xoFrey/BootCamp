import "./Hero.css";
const Hero = ({ title, description }) => {
  // *{title, description} => object deconstruction -> Nur die Daten vom Object die ich benötige (nutzt man bei einer eher kleinen auswahl)
  // *(props)  {props.title} {props.description} => Paket mit allen inhalten weiterreichen
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Hero;
