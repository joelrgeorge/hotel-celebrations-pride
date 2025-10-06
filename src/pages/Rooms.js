import React from "react";
import './styles/rooms.css';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from 'reactstrap';
import { FaParking, FaConciergeBell, FaWifi, FaSwimmingPool, FaDumbbell, FaCocktail, FaTv, FaFire } from "react-icons/fa";
import CommonSection from "../components/shared/HeaderSection";
import Footer from "../components/Footer";
import "react-lazy-load-image-component/src/effects/blur.css";
import RoomDetails from "../components/RoomDetails";
import ImageGallery from "../components/gallery/ImageGallery";
import USPSection from "../components/USPSection";
import Subtitle from '../components/shared/Subtitle';

function Rooms() {
const rooms = [
  {
    title: "Superior Room",
    overview: "A haven of comfort and elegance, our Deluxe Room features modern décor, plush bedding, and stunning views. Perfect for unwinding in style.",
    description: "The Deluxe Room offers unparalleled comfort with modern amenities and scenic views.",
    price: "₹2500",
    facilities: [
      { icon: <FaParking />, label: "Free Parking" },
      { icon: <FaConciergeBell />, label: "In-Room Dining" },
      { icon: <FaWifi />, label: "Free Wi-Fi" },
      { icon: <FaSwimmingPool />, label: "Pool Access" },
      { icon: <FaDumbbell />, label: "Fitness Center" }
    ],
    images: ['Room 1/IMG_7100.webp', 'Room 1/IMG_7098.webp', 'Room 1/IMG_7110.webp', 'Room 1/IMG_7115.webp', 'Room 1/IMG_7118.webp', 'Room 1/IMG_7119.webp', 'Room 1/IMG_7121.webp', 'Room 1/IMG_7130.webp', 'Room 1/IMG_7131.webp', 'Room 1/IMG_7135.webp', 'Room 1/IMG_7152.webp'],    
    flip: false,
  },
  {
    title: "Deluxe Family Suite",
    overview: "Enjoy breathtaking views of the ocean from our spacious suite, complete with luxury bedding and elegant décor.",
    description: "The Executive Suite offers luxury and stunning ocean views for a relaxing escape.",
    price: "₹4500",
    facilities: [
      { icon: <FaParking />, label: "Free Parking" },
      { icon: <FaCocktail />, label: "Bar Access" },
      { icon: <FaWifi />, label: "Free Wi-Fi" },
      { icon: <FaTv />, label: "Smart TV" }
    ],
    images: ['Room 2/IMG_7220.webp','Room 2/IMG_7194.webp','Room 2/IMG_7199.webp','Room 2/IMG_7210.webp','Room 2/IMG_7215.webp','Room 2/IMG_7216.webp','Room 2/IMG_7218.webp','Room 2/IMG_7244.webp','Room 2/IMG_7252.webp','Room 2/IMG_7256.webp','Room 2/IMG_7244.webp'],
    flip: true,
  },
  {
    title: "Premium Room",
    overview: "Escape to the Mountain Retreat, offering stunning mountain views and a cozy ambiance perfect for a peaceful getaway.",
    price: "₹3200",
    images: ['Room 3/IMG_7313.webp','Room 3/IMG_7317.webp','Room 3/IMG_7284.webp','Room 3/IMG_7285.webp','Room 3/IMG_7366.webp','Room 3/IMG_7287.webp','Room 3/IMG_7291.webp','Room 3/IMG_7293.webp','Room 3/IMG_7296.webp','Room 3/IMG_7383.webp','Room 3/IMG_7390.webp'],
    facilities: [
      { icon: <FaParking />, label: "Free Parking" },
      { icon: <FaFire />, label: "Fireplace" },
      { icon: <FaWifi />, label: "Free Wi-Fi" },
      { icon: <FaTv />, label: "Smart TV" }
    ],
    flip: false,
  },
  {
    title: "Executive Family Suite",
    overview: "Escape to the Mountain Retreat, offering stunning mountain views and a cozy ambiance perfect for a peaceful getaway.",
    price: "₹3800",
    images: ['Room 4/IMG_7404.webp','Room 4/IMG_7405.webp','Room 4/IMG_7408.webp','Room 4/IMG_7422.webp','Room 4/IMG_7398.webp','Room 4/IMG_7411.webp','Room 4/IMG_7442.webp','Room 4/IMG_7392.webp','Room 4/IMG_7416.webp','Room 4/IMG_7430.webp','Room 4/IMG_7436.webp'],
    facilities: [
      { icon: <FaParking />, label: "Free Parking" },
      { icon: <FaFire />, label: "Fireplace" },
      { icon: <FaWifi />, label: "Free Wi-Fi" },
      { icon: <FaTv />, label: "Smart TV" }
    ],
    flip: true,
  }
];

  return (
    <div className="room-layout">
      <Navbar />
      <CommonSection title="Our Rooms" backgroundImage="a16.webp" />

      {rooms.map((room, index) => (
        <div key={index} className={room.flip ? "room-flip" : ""}>
          <RoomDetails {...room} />
        </div>
      ))}

      <USPSection />
      <section className="Image-Section">
        <Subtitle subtitle="Gallery" />
        <Container>
          <h2 className="gallery__title">Check out our Room Gallery</h2>
          <Row>
            <Col lg='12'>
              <ImageGallery />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Rooms;
