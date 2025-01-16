import React from "react";
import './styles/rooms.css';
import Navbar from "../components/Navbar";
import { Container, Row ,Col } from 'reactstrap';
import CommonSection from "../components/HeaderSection";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";
import Subtitle from '../components/Subtitle';
import NewsLetter from "../components/NewsLetter";


function Rooms() {
  return (
    <div>
      <Navbar />
      <CommonSection title={"Our Rooms"} />
      <section>
        <Container>
            <Row>
              <Col lg='12'>
                <Subtitle subtitle={'Gallery'}/>
                  <h2 className="gallery__title">Check out our Hotel Gallery
                  </h2>
              </Col>
              <Col lg='12'>
                <ImageGallery/>
              </Col>
            </Row>
        </Container>
        </section>
        <NewsLetter />
      <Footer />
    </div>
  );
}

export default Rooms;