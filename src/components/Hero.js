// Hero.js

import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h1 className="hero-title">Experience Luxury Like Never Before</h1>
        <p className="hero-subtitle">Your perfect getaway starts here</p>
        <div className="hero-buttons">
          <button className="btn book-now">Book Now</button>
          <button className="btn explore">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;