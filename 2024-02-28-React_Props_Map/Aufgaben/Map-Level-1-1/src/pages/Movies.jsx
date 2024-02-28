import "./Movies.css";
import movies from "../assets/data/data.js";
import MovieInfo from "../components/MovieInfo/MovieInfo.jsx";
import Stars from "../components/Stars/Stars.jsx";
const Movies = () => {
  return (
    <div className="info-box">
      {movies.map((item, index, ind) => (
        <>
          <MovieInfo movie={item} key={index} />
        </>
      ))}
    </div>
  );
};

export default Movies;
