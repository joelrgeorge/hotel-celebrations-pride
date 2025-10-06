import React from "react";
import "../styles/aboutSection.css";
import { Container, Row, Col } from "reactstrap";
import { getImageUrl } from "../utils/imageKit";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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

            {/* Left Image */}
            <Col className="about-image-col">
              <div className="hero__img">
                <LazyLoadImage
                  src={getImageUrl("HERO/hero-img-01.jpg", 800)} // width 800px
                  alt="Hotel Room"
                  effect="blur"
                  className="hero-img"
                />
              </div>
            </Col>

            {/* Center Video */}
            <Col className="about-image-col">
              <div className="hero__img-box hero__video-box">
                <video
                  src={getImageUrl("HERO/hall-tour.mp4")}   // CDN video
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"                             // preloads video
                  poster={getImageUrl("HERO/hall-tour-poster.jpg", 800)} // optimized poster
                  className="hero-video"
                />
              </div>
            </Col>

            {/* Right Image */}
            <Col className="about-image-col">
              <div className="hero__img-box">
                <LazyLoadImage
                  src={getImageUrl("HERO/hero-img-02.jpg", 800)} // width 800px
                  alt="Hotel Lobby"
                  effect="blur"
                  className="hero-img"
                />
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MainDisplay;