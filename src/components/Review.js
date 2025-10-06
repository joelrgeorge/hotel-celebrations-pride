import '../styles/review.css';

const Review = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        {/* Left Side - Text Content */}
        <div className="cta-content">
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
            Leave a Review
          </a>
        </div>

        {/* Right Side - Google Logo */}
        <div className="cta-image">
          <img src="/google.png" alt="Google Logo" />
        </div>
      </div>
    </section>
  );
};

export default Review;