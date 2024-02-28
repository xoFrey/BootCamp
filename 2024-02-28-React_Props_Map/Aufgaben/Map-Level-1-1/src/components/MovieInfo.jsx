import "./MovieInfo.css";
const MovieInfo = (props) => {
  return (
    <div className="movie-box">
      <h3>{props.movie.title}</h3> <p>{props.movie.year}</p>
      <p>{props.movie.director}</p>
      <p>{props.movie.duration}</p>
      <p>{props.movie.rate}</p>
      {props.movie.genre.map((genre) => (
        <p>{genre}</p>
      ))}
    </div>
  );
};

export default MovieInfo;
