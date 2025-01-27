import React from 'react';
import '../styles/USPSection.css';

const USPSection = () => {
  return (
    <section className="usp-section">
      <div className="usp-container">
        <h2 className="usp-title">Discover the perfect stay.</h2>
        <p className="usp-description">
        Experience unmatched luxury, comfort, and personalized care at <b style={{ color: '#fd9c0b' }}>Hotel Celebrations Pride</b>. Whether for work or leisure, our spaces are tailored for your ultimate satisfaction.
        </p>
        <div className="usp-features">
          <div className="usp-feature">
            <div className="usp-icon-wrapper">
              <span className="usp-icon">🏨</span>
            </div>
            <h4>Modern Rooms</h4>
            <p>Enjoy luxurious and spacious rooms equipped with all modern amenities to make your stay unforgettable.</p>
          </div>
          <div className="usp-feature">
            <div className="usp-icon-wrapper">
              <span className="usp-icon">🍽️</span>
            </div>
            <h4>Fine Dining</h4>
            <p>Delight your taste buds with exquisite cuisines prepared by world-class chefs in our premium restaurants.</p>
          </div>
          <div className="usp-feature">
            <div className="usp-icon-wrapper">
              <span className="usp-icon">🌄</span>
            </div>
            <h4>Scenic Views</h4>
            <p>Wake up to breathtaking views of serene landscapes, bustling cityscapes, or pristine beaches.</p>
          </div>
          <div className="usp-feature">
            <div className="usp-icon-wrapper">
              <span className="usp-icon">💆</span>
            </div>
            <h4>Spa & Wellness</h4>
            <p>Relax and rejuvenate with our world-class spa treatments and wellness programs.</p>
          </div>
          <div className="usp-feature">
            <div className="usp-icon-wrapper">
              <span className="usp-icon">🏊</span>
            </div>
            <h4>Leisure Activities</h4>
            <p>Enjoy access to pools, fitness centers, and outdoor adventures curated for every guest.</p>
          </div>
          <div className="usp-feature">
            <div className="usp-icon-wrapper">
              <span className="usp-icon">🛡️</span>
            </div>
            <h4>Safety & Comfort</h4>
            <p>Your safety is our priority, with 24/7 surveillance and hygiene protocols in place.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;