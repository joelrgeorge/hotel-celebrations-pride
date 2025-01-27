import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subtitle from "../components/Subtitle";
import Testimonials from "../components/Testimonials";
import CommonSection from "../components/HeaderSection";
import ContactUs from "../components/ContactUs";
import "./styles/contact.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <CommonSection title={"Contact Us"} />
      <ContactUs />
      <section>
        <Container className="feedback-container"> {/* Added className here */}
          <Row>
            <Col lg="12">
              <Subtitle className="testimonial-subtitle" subtitle={"Guest Feedback"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;