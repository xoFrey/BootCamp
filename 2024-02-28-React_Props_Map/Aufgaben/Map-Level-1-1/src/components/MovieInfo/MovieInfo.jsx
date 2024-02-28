import Stars from "../Stars/Stars";
import "./MovieInfo.css";
const MovieInfo = (props) => {
  return (
    <div className="movie-box">
      <h3>{props.movie.title}</h3> <p>{props.movie.year}</p>
      <p>{props.movie.director}</p>
      <p>{props.movie.duration}</p>
      <p>
        <Stars rate={props.movie.rate} />
      </p>
      {props.movie.genre.map((genre, index) => (
        <p key={index}>{genre}</p>
      ))}
    </div>
  );
};

export default MovieInfo;
