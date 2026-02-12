// Hero.js
import BookingForm from "../components/BookingForm";
import { Link } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero-container"
        style={{
          background: `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)),
            url(${getImageUrl("a4.webp", 1600)})
            no-repeat center center`,
          backgroundSize: "cover"
        }}
      >
      <div className="hero-overlay">
        <h1 className="hero-title">Experience Luxury Like Never Before</h1>
        <p className="hero-subtitle">Your perfect getaway starts here</p>
        <div className="hero-buttons">
        <button className="btn explore">
          <a href="#room-display">Explore</a>
        </button>

        <button className="btn book-now">
          <Link to="/rooms">Check Pricing</Link>
        </button>
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default Hero;