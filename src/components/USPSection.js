import React from 'react';
import '../styles/USPSection.css';

const USPSection = () => {
  return (
    <section className="usp-section">
      <div className="usp-container">
        <h2 className="usp-title">Stay in Comfort, Experience Luxury</h2>
        <p className="usp-description">
          At [Your Hotel Name], we provide a unique blend of modern elegance and local charm. From breathtaking views to personalized services, our rooms are designed to make every guest feel right at home.
        </p>
        <div className="usp-features">
          <div className="usp-feature">
            <span className="usp-icon">🌐</span>
            <h4>Exclusive Amenities</h4>
            <p>Free Wi-Fi, in-room dining, fitness center, and more – all at your fingertips.</p>
          </div>
          <div className="usp-feature">
            <span className="usp-icon">🗺️</span>
            <h4>Unmatched Locations</h4>
            <p>Enjoy prime access to [local attractions/landmarks] and scenic views from every room.</p>
          </div>
          <div className="usp-feature">
            <span className="usp-icon">💼</span>
            <h4>Tailored Experiences</h4>
            <p>Whether it’s a business trip, family vacation, or romantic getaway, we tailor our services to meet your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;