import React from 'react';
import '../styles/review.css';

const Review = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">We Value Your Feedback! ⭐</h2>
        <p className="cta-text">
          Your opinion matters! Help us improve by leaving a review on Google.
        </p>
        <a 
          href="https://g.page/YOUR-BUSINESS-URL/review" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-btn"
        >
          Leave a Review <span>⭐</span>
        </a>
      </div>
    </section>
  );
};

export default Review;
