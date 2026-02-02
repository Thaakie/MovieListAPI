import { Routes } from "react-router-dom";
import "./css/app.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/home";
import { Route } from "react-router-dom";
import Favorites from "./pages/favorite";
import NavBar from "./components/navbar";
import { MovieProvider } from "./assets/contexts/movieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
