import "../css/moviecard.css";
import { useMovieContext } from "../assets/contexts/movieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();

  const isFav = isFavorite(movie.id);

  function toggleFavorite(e) {
    e.preventDefault();
    isFav ? removeFromFavorite(movie.id) : addToFavorite(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className={`favorite-btn ${isFav ? "active" : ""}`} onClick={toggleFavorite}>
            ᰔ
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
