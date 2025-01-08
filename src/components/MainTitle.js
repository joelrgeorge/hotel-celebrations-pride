import React from "react";
import "../styles/aboutSection.css"; // Import the updated CSS

const MainTitle = () => {
  return (
    <div className="about-section">
      <div className="about-text">
      <p className="section-heading">The Hotel</p>
        <h2 className="about-heading">Pick a room that best suits your taste</h2>
        <p className="about-subtext">
          Discover the perfect blend of luxury and comfort. Our hotel offers an 
          unparalleled experience with world-class amenities, exquisite dining, 
          and exceptional service. Let us make your stay truly unforgettable.
        </p>
      </div>
      <div className="about-image">
        <img
          src="\img\holiday-inn-savannah-5627537490-4x3.avif"
          alt="Luxurious hotel room"
          className="about-photo"
        />
      </div>
    </div>
  );
};

export default MainTitle;