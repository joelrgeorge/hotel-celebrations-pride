import React from 'react'; 
import data from '../restApi.json'; // Import the JSON data
import "../styles/WhoAreWe.css";
import ImageGallery02 from "./ImageGallery02";
import { Container, Row, Col } from 'reactstrap';
import 'remixicon/fonts/remixicon.css';

const WhoAreWe = () => {
  const whoWeAreData = data?.who_we_are;

  if (!whoWeAreData) {
    return <div>Loading...</div>;
  }

  return (
    <>
  <div className="header-container">
    <p className="kitchen-heading">The Kitchen</p>
    {/* The "Our Menu" button will be placed directly next to the kitchen heading */}
    <button className="explore-btn">
      <i className="ri-restaurant-line"></i> Our Menu
    </button>
  </div>
    {/* Wrap the subtitle and button in a container */}
    <div className="subtitle-btn-container">
      <h2 className="section-who-subtitle">Our Hotel, Your Perfect Getaway</h2>
    </div>
  
      <section className="who_are_we" id="who_are_we">
        <div className="container">
          <div className="text_banner">
            {whoWeAreData.slice(0, 2).map((element) => (
              <div className="card" key={element.id}>
                <h1 className="heading" style={{ fontWeight: '300' }}>{element.number}</h1>
                <p>{element.title}</p>
              </div>
            ))}
          </div>
          <div className="image_banner">
            <img className="gradient_bg" src="/img/center.svg" alt="gradientBg" />
            <img src="/img/whoweare.png" alt="food" />
          </div>
          <div className="text_banner">
            {whoWeAreData.slice(2).map((element) => (
              <div className="card" key={element.id}>
                <h1 className="heading" style={{ fontWeight: '300' }}>{element.number}</h1>
                <p>{element.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="Image-Section">
        <Container>
        <h2 className="gallery__title">Check out our Restaurant Gallery</h2>
          <Row>
            <Col lg='12'>
              <ImageGallery02 />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default WhoAreWe;