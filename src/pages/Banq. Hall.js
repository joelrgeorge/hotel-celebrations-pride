import React from "react";
import './styles/rooms.css';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from 'reactstrap';
import { FaParking, FaConciergeBell, FaWifi, FaSwimmingPool, FaDumbbell, FaCocktail, FaTv, FaFire, FaMugHot } from "react-icons/fa";
import CommonSection from "../components/shared/HeaderSection";
import Footer from "../components/Footer";
import RoomDetails from "../components/RoomDetails";
import HallGallery from "../components/gallery/HallGallery";
import Subtitle from '../components/shared/Subtitle';

function Banq_Hall() {
  const rooms = [
    {
      title: "Conference/Banquet Hall",
      overview: "A haven of comfort and elegance, our Deluxe Room features modern décor, plush bedding, and stunning views. Perfect for unwinding in style.",
      price: "₹5000",
      facilities: [
        { icon: <FaParking />, label: "Free Parking" },
        { icon: <FaConciergeBell />, label: "In-Room Dining" },
        { icon: <FaWifi />, label: "Free Wi-Fi" },
        { icon: <FaSwimmingPool />, label: "Pool Access" },
        { icon: <FaDumbbell />, label: "Fitness Center" }
      ],
      images: ['/img/Banq. Hall/IMG_7514.jpg', '/img/Banq. Hall/IMG_7517.jpg', '/img/Banq. Hall/IMG_7521.jpg', '/img/Banq. Hall/IMG_7513.jpg','/img/Banq. Hall/IMG_7537.jpg'],
      flip: false,
    },
  ];

  return (
    <div className="room-layout">
      <Navbar />
      <CommonSection 
        title={"Our Hall"} 
        backgroundImage={"/img/Banq. Hall/IMG_7524.jpg"}  
      />
      
      {rooms.map((room, index) => (
        <div key={index} className={room.flip ? "room-flip" : ""}>
          <RoomDetails {...room} />
        </div>
      ))}
      
      <section className="Image-Section">
        <Subtitle subtitle={'Our Hall'} />
        <Container>
          <h2 className="gallery__title">Check out our Hall Gallery</h2>
          <Row>
            <Col lg='12'>
              <HallGallery />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Banq_Hall;