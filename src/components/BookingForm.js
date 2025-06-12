import React, { useState, useEffect } from "react";
import "../styles/bookingForm.css";

const submitUrl = "/api/book-room";
console.log("Loaded Submit Form URL:", submitUrl);

const BookingForm = () => {
  const [isFormVisible, setFormVisible] = useState(window.innerWidth > 900);
  const [loading, setLoading] = useState(false); // Loader state added
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkin: "",
    checkout: "",
    guests: "",
    children: "",
  });

  useEffect(() => {
    const handleResize = () => setFormVisible(window.innerWidth > 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader

    console.log("Sending form data:", formData);

    if (!submitUrl) {
      console.error("ERROR: Submit URL is undefined. Check .env file.");
      return;
    }

    try {
      const response = await fetch(submitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Server response status:", response.status);

      if (response.ok) {
        window.location.href = "/static/thankyou.html";
      } else {
        console.error("Server Error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }

    setLoading(false); // Stop loader after request finishes
  };

  return (
    <>
      {window.innerWidth <= 900 && !isFormVisible && (
        <div className="floating-icon" onClick={() => setFormVisible(true)}>
          📝
        </div>
      )}

      {isFormVisible && (
        <div className={window.innerWidth > 900 ? "embedded-booking-form" : "booking-form-container show"}>
          <div className="form-wrapper">
            <div className="form-header">
              <h2>Check with Us</h2>
            </div>

            <form onSubmit={handleSubmit}>
              {window.innerWidth <= 900 && (
                <span className="close-form" onClick={() => setFormVisible(false)}>
                  &times;
                </span>
              )}
              <input type="text" name="name" className="form-element" placeholder="Name" required value={formData.name} onChange={handleChange} />
              <input type="email" name="email" className="form-element" placeholder="Email" required value={formData.email} onChange={handleChange} />
              <input type="date" name="checkin" className="form-element" required value={formData.checkin} onChange={handleChange} />
              <input type="date" name="checkout" className="form-element" required value={formData.checkout} onChange={handleChange} />

              {/* Guests Dropdown */}
              <select name="guests" className="form-element" required value={formData.guests} onChange={handleChange}>
                <option value="" disabled>Guests</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>

              {/* Children Dropdown */}
              <select name="children" className="form-element" required value={formData.children} onChange={handleChange}>
                <option value="" disabled>Children</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>

              {/* Button with loader */}
              <button type="submit" className={`booking-btn ${loading ? "loading" : ""}`} disabled={loading}>
                Check Availability
                {loading && (
                  <div className="loader-overlay">
                    <span className="loader"></span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingForm;