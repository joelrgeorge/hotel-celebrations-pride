import React from "react";
import "../styles/aboutSection.css"; // Import the updated CSS
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/img/HERO/hero-img01.jpg';
import heroImg02 from '../assets/img/HERO/hero-img02.jpg';
import heroVideo from '../assets/img/HERO/hero-video.mp4';

const MainDisplay = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <p className="section-heading">The Hotel</p>
        <h2 className="about-heading">Pick a room that best suits your taste</h2>
        <p className="about-subtext">
          Discover the perfect blend of luxury and comfort. Our hotel offers an 
          unparalleled experience with world-class amenities, exquisite dining, 
          and exceptional service. Let us make your stay truly unforgettable.
        </p>
      </div>
      <div className="about-image">
        <Container>
          <Row className="about-image-row">
            <Col className="about-image-col">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col className="about-image-col">
              <div className="hero__img-box hero__video-box">
                <video 
                  src={heroVideo} 
                  muted 
                  autoPlay 
                  loop 
                  playsInline
                  className="hero-video"
                />
              </div>
            </Col>

            <Col className="about-image-col">
              <div className="hero__img-box">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MainDisplay;