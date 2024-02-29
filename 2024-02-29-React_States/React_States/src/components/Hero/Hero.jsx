import "./Hero.css";
// # Zwei Versionen wie man Props nutzt. Entweder Version 1 oder 2 ist egal

// ! Version 1
// const Hero = (props) => {
//   console.dir(props);
//   //   * Props Names: title, descriptionIzel, img
//   return (
//     <section
//       className={`hero ${props.mirrored === "true" ? "reverse-box" : " "}`}
//     >
//       <div>
//         <h2>{props.title}</h2>
//         <p>{props.descriptionIzel}</p>
//         <a href="#">More</a>
//       </div>
//       <img src={props.img} alt="" />
//     </section>
//   );
// };

// export default Hero;

// ! Version 2
const Hero = ({ title, descriptionIzel, img, mirrored }) => {
  //   * Props Names: title, descriptionIzel, img, mirrored
  return (
    <section className={`hero ${mirrored === "true" ? "reverse-box" : " "}`}>
      <div>
        <h2>{title}</h2>
        <p>{descriptionIzel}</p>
        <a href="#">More</a>
      </div>
      <img src={img} alt="" />
    </section>
  );
};

export default Hero;
