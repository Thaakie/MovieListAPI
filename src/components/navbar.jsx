import { Link } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brands">
        <Link to="/" className="navbar-logo">
          MoviesList
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-links">
          Home
        </Link>
        <Link to="/favorites" className="navbar-links">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
