import React from 'react';
import '../styles/contact-us.css'; // Ensure the correct path to your CSS
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { RiMapPin2Fill, RiMailFill, RiPhoneFill } from 'react-icons/ri';

function ContactUs() {
  return (
    <div className="contact__container">
      <div className="contact__form">
        <div className="contact-info">
          <h3 className="contact__title">We'd love to hear from you..</h3>
          <p className="contact__text">
            Feel free to reach out with any questions, comments, or feedback. Our Guest's honest feedbacks enables us to serve you better in the future.
          </p>
          <div className="info">
            <div className="information">
              <p><RiMapPin2Fill /> 123 Example St, City, Country</p>
            </div>
            <div className="information">
              <p><RiMailFill /> enquiry@hotelcelebrationspride.com</p>
            </div>
            <div className="information">
              <p><RiPhoneFill /> (+123) 456-7890</p>
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

        <div className="form-container">
          <form action="/submit_contact" method="post">
            <h3 className="form-title">Send us a message</h3>
            <div className="input-container">
              <input type="text" name="name" placeholder="Full Name" className="contact__input" />
            </div>
            <div className="input-container">
              <input type="email" name="email" placeholder="Email" className="contact__input" />
            </div>
            <div className="input-container">
              <input type="tel" name="phone" placeholder="Phone" className="contact__input" />
            </div>
            <div className="input-container">
              <textarea name="message" placeholder="Message" className="contact__input"></textarea>
            </div>
            <input type="submit" value="Send" className="contact__btn" />
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6145981945037!2d77.64520677515846!3d13.06018628726338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176a5d636d47%3A0xf25f1c03741da6b7!2sEbenezer%20-%20Best%20Service%20Apartments%20and%20Suites%20in%20Kothanur%20Bangalore!5e0!3m2!1sen!2sin!4v1737202191762!5m2!1sen!2sin"
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