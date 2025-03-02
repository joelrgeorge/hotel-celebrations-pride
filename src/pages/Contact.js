import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subtitle from "../components/Subtitle";
import Testimonials from "../components/Testimonials";
import CommonSection from "../components/HeaderSection";
import Review from "../components/Review";
import ContactUs from "../components/ContactUs";
import "./styles/contact.css";

function Contact() {
  return (
    <div> 
      <Navbar />
      <CommonSection 
      title={"Contact Us"} 
      backgroundImage={"/img/a7.jpg"}  // Specify the background image URL here
      />
      <section className="Contact-Section">
      <Subtitle subtitle={'Contact Form'} />
      </section>
      <ContactUs />
      <section>
        <Container className="feedback-container"> {/* Added className here */}
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Guest Feedback"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
              <Review />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;