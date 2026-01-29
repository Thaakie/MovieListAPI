import MovieCard from "../components/MovieCard";
import { useState, useEffect, use } from "react";
import "../css/home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error("Failed to fetch popular movies:", err);
        setErr("Failed to load popular movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    alert(searchQuery);
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search movies..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">{movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={movie} key={movie.id} />)}</div>
    </div>
  );
}

export default Home;
