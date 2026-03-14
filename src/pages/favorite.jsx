import "../css/favorites.css";
import { useMovieContext } from "../assets/contexts/movieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="favorite-page">
        <h3>Not yet</h3>
        <p>Try favouriting some movies ᰔ</p>
      </div>
    );
  }

  return (
    <div className="favorite-page">
      <h2>Your Favorites</h2>
      <div className="favorites-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum voluptates error nemo magnam aliquam nulla tenetur saepe eveniet ex consequatur!</p>
    </div>
  );
}

export default Favorites;
