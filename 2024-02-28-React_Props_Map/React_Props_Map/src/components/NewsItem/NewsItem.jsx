const NewsItem = (props) => {
  return (
    <div>
      <img src={props.item.img} alt="Bilder" />
      <h2>{props.item.title}</h2>
      <p>{props.item.description}</p>
      <a href={props.item.link} target="_blank">
        Mehr lesen
      </a>
    </div>
  );
};

export default NewsItem;
