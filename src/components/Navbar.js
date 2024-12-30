import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Hotel Celebrations
        </a>
        {/* Divider */}
        <div className="navbar-divider"></div>
        <button className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#home" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#events" className="nav-links">
              Events
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;