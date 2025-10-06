import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo flex items-center gap-1">
        <img src="/favicon.ico" alt="Logo" className="navbar-logo-img" />
          <span className="logo-text">Hotel Celebrations Pride</span>
        </Link>

        {/* Menu Icon for Mobile */}
        <button
          type="button"
          className={`menu-icon ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/rooms"
              className="nav-links"
              onClick={() => setIsMenuOpen(false)}
            >
              Rooms
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to="/banquet"
              className="nav-links"
              onClick={() => setIsMenuOpen(false)}
            >
              Hall
            </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;