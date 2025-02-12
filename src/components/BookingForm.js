import React, { useState } from "react";
import "../styles/bookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added phone number
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your booking is confirmed.`);
    console.log("Booking Details:", formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Enquire with Us..</h2>

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          pattern="^\+?[0-9\s-]{7,15}$" // Allows international formats
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="checkIn">Check-In Date</label>
        <input
          type="date"
          id="checkIn"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="checkOut">Check-Out Date</label>
        <input
          type="date"
          id="checkOut"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="roomType">Room Type</label>
        <select
          id="roomType"
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a room type
          </option>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="suite">Suite</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
      </div>

      <button type="submit">Confirm Booking</button>

      <div className="form-footer">
        Need assistance? <a href="#contact">Contact us</a>.
      </div>
    </form>
  );
};

export default BookingForm;