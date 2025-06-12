import React, { useState } from "react";
import "../styles/contact-us.css"; // Ensure the correct path to your CSS
import Subtitle from "./shared/Subtitle";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiMapPin2Fill, RiMailFill, RiPhoneFill } from "react-icons/ri";

const contactSubmitUrl = "/api/contact-message";
console.log("Loaded Contact Submit URL:", contactSubmitUrl);

function ContactUs() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // <-- Start loading
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value
    };
    
    console.log("Sending contact form data:", formData);
    
    if (!contactSubmitUrl) {
      console.error("ERROR: Contact Submit URL is undefined. Check .env file.");
      return;
    }
    
    try {
      const response = await fetch(contactSubmitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Server response status:", response.status);

      if (response.ok) {
        window.location.href = "/static/ContactSuccess.html"; 
      } else {
        console.error("Server Error");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      alert("An error occurred. Please try again later.");
    }

    setLoading(false); // <-- Stop loading
  };
    
  return (
    <div className="contact__container">
      <div className="contact__form">
        <div className="contact-info">
          <h3 className="contact__title">We'd love to hear from you..</h3>
          <p className="contact__text">Feel free to reach out with any questions, comments, or feedback.</p>
          <div className="info">
            <div className="information">
              <p>
                <RiMapPin2Fill /> G-5, Amrapali Nagar, Lalarpura Gandhi Path <br />West Vaishali Nagar, Jaipur
              </p>
            </div>
            <div className="information">
              <p>
                <RiMailFill /> enquiry@hotelcelebrationspride.com
              </p>
            </div>
            <div className="information">
              <p>
                <RiPhoneFill /> (+91) 9610277070
              </p>
            </div>
          </div>

          <div className="social-media">
            <p>Follow us:</p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3 className="form-title">Send us a message</h3>
            <div className="input-container">
              <input type="text" name="name" placeholder="Full Name" className="contact__input" required />
            </div>
            <div className="input-container">
              <input type="email" name="email" placeholder="Email" className="contact__input" required />
            </div>
            <div className="input-container">
              <input type="tel" name="phone" placeholder="Phone" className="contact__input" required />
            </div>
            <div className="input-container">
              <textarea name="message" placeholder="Message" className="contact__input" required></textarea>
            </div>
            <button type="submit" className="contact__btn" disabled={loading}>
              {loading ? <span className="loader"></span> : "Send"}
            </button>          </form>
        </div>
      </div>

      <Subtitle subtitle={"Location"} className="contact_subtitle" />
      <h3 className="map-title">Locate us on Google Maps..</h3>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          title="Location"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;