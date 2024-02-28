import "./Movies.css";
import movies from "../assets/data/data.js";
import MovieInfo from "../components/MovieInfo.jsx";
const Movies = () => {
  return (
    <div className="info-box">
      {movies.map((item, index) => (
        <MovieInfo movie={item} key={index} />
      ))}
    </div>
  );
};

export default Movies;
