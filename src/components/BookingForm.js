import React, { useState, useEffect } from "react";
import "../styles/BookingForm.css";

const submitUrl = process.env.REACT_APP_SUBMIT_FORM_URL || "http://localhost:5000/submit_form";
console.log("Loaded Submit Form URL:", submitUrl);

const BookingForm = () => {
  const [isFormVisible, setFormVisible] = useState(window.innerWidth > 900);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkin: "",
    checkout: "",
    guests: 1,
    children: 0,
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
        // Redirect to Thank You page
        window.location.href = "/static/thankyou.html";
      } else {
        console.error("Server Error");
        document.body.innerHTML = ""; // Make the page blank on error
      }
    } catch (error) {
      console.error("Form submission error:", error);
      document.body.innerHTML = ""; // Make the page blank on error
    }
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
              <input type="number" name="guests" className="form-element" placeholder="Guests" min="1" max="2" required value={formData.guests} onChange={handleChange} />
              <input type="number" name="children" className="form-element" placeholder="Children" min="0" max="2" required value={formData.children} onChange={handleChange} />
              <input type="submit" value="Check Availability" className="form-element" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingForm;