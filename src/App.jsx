import { Routes } from "react-router-dom";
import "./css/app.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/home";
import { Route } from "react-router-dom";
import Favorites from "./pages/favorite";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
