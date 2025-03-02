import React, { useState, useEffect } from "react";
import "../styles/BookingForm.css";

const BookingForm = () => {
  const [isFormVisible, setFormVisible] = useState(false); // Start hidden on mobile

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setFormVisible(true); // Always visible on desktop
      } else {
        setFormVisible(false); // Only show on mobile when icon is clicked
      }
    };

    handleResize(); // Ensure correct state on first load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const redirectToSubdomain = (event) => {
    event.preventDefault();
    window.location.href = "http://form.ebenezerservicedapartments.com";
  };

  return (
    <>
      {window.innerWidth <= 900 && !isFormVisible && (
        <div className="floating-icon" onClick={toggleForm}>
          📝
        </div>
      )}

      {window.innerWidth > 900 || isFormVisible ? (
        <div
          className={`${
            window.innerWidth > 900
              ? "embedded-booking-form"
              : "booking-form-container show"
          }`}
        >
          <div className="form-wrapper">
            {/* Heading and subheading */}
            <div className="form-header">
              <h2>Check with Us</h2>
            </div>

            <form
              action="http://form.ebenezerservicedapartments.com/submit_booking"
              method="post"
              onSubmit={redirectToSubdomain}
            >
              {window.innerWidth <= 900 && (
                <span className="close-form" onClick={toggleForm}>
                  &times;
                </span>
              )}
              <input
                type="text"
                name="name"
                className="form-element"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                className="form-element"
                placeholder="Email"
                required
              />
              <input
                type="date"
                name="checkin"
                className="form-element"
                required
              />
              <input
                type="date"
                name="checkout"
                className="form-element"
                required
              />
              <input
                type="number"
                name="guests"
                className="form-element"
                placeholder="Guests"
                min="1"
                max="2"
                required
              />
              <input
                type="number"
                name="children"
                className="form-element"
                placeholder="Children"
                min="1"
                max="2"
                required
              />
              <input type="submit" value="Check Availibility" className="form-element" />
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BookingForm;