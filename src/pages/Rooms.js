import React from "react";
import './styles/rooms.css';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from 'reactstrap';
import { FaParking, FaConciergeBell, FaWifi, FaSwimmingPool, FaDumbbell, FaCocktail, FaTv, FaFire } from "react-icons/fa";
import CommonSection from "../components/HeaderSection";
import Footer from "../components/Footer";
import RoomDetails from "../components/RoomDetails";
import ImageGallery from "../components/ImageGallery";
import USPSection from "../components/USPSection";
import Subtitle from '../components/Subtitle';

function Rooms() {
const rooms = [
  {
    title: "Deluxe Room",
    overview: "A haven of comfort and elegance, our Deluxe Room features modern décor, plush bedding, and stunning views. Perfect for unwinding in style.",
    description: "The Deluxe Room offers unparalleled comfort with modern amenities and scenic views.",
    price: "₹1800",
    facilities: [
      { icon: <FaParking />, label: "Free Parking" },
      { icon: <FaConciergeBell />, label: "In-Room Dining" },
      { icon: <FaWifi />, label: "Free Wi-Fi" },
      { icon: <FaSwimmingPool />, label: "Pool Access" },
      { icon: <FaDumbbell />, label: "Fitness Center" }
    ],
    images: ['/img/Room 1/IMG_7100.jpg', '/img/Room 1/IMG_7098.jpg', '/img/Room 1/IMG_7110.jpg', '/img/Room 1/IMG_7115.jpg', '/img/Room 1/IMG_7118.jpg', '/img/Room 1/IMG_7119.jpg', '/img/Room 1/IMG_7121.jpg', '/img/Room 1/IMG_7130.jpg', '/img/Room 1/IMG_7131.jpg', '/img/Room 1/IMG_7135.jpg', '/img/Room 1/IMG_7152.jpg'],    flip: false,
    flip: false,
  },
  {
    title: "Executive Suite",
    overview: "Enjoy breathtaking views of the ocean from our spacious suite, complete with luxury bedding and elegant décor.",
    description: "The Executive Suite offers luxury and stunning ocean views for a relaxing escape.",
    price: "₹2100",
    facilities: [
      { icon: <FaParking />, label: "Free Parking" },
      { icon: <FaCocktail />, label: "Bar Access" },
      { icon: <FaWifi />, label: "Free Wi-Fi" },
      { icon: <FaTv />, label: "Smart TV" }
    ],
    images: ['/img/Room 2/IMG_7220.jpg','/img/Room 2/IMG_7194.jpg','/img/Room 2/IMG_7199.jpg','/img/Room 2/IMG_7210.jpg','/img/Room 2/IMG_7215.jpg','/img/Room 2/IMG_7216.jpg','/img/Room 2/IMG_7218.jpg','/img/Room 2/IMG_7244.jpg','/img/Room 2/IMG_7252.jpg','/img/Room 2/IMG_7256.jpg','/img/Room 2/IMG_7244.jpg'],
    flip: true,
  },
  {
    title: "Premium Room",
    overview: "Escape to the Mountain Retreat, offering stunning mountain views and a cozy ambiance perfect for a peaceful getaway.",
    price: "₹2700",
    images: ['/img/Room 3/IMG_7313.jpg','/img/Room 3/IMG_7317.jpg','/img/Room 3/IMG_7284.jpg','/img/Room 3/IMG_7285.jpg','/img/Room 3/IMG_7366.jpg','/img/Room 3/IMG_7287.jpg','/img/Room 3/IMG_7291.jpg','/img/Room 3/IMG_7293.jpg','/img/Room 3/IMG_7296.jpg','/img/Room 3/IMG_7383.jpg','/img/Room 3/IMG_7390.jpg'],
    facilities: [
      { icon: <FaParking />, label: "Free Parking" },
      { icon: <FaFire />, label: "Fireplace" },
      { icon: <FaWifi />, label: "Free Wi-Fi" },
      { icon: <FaTv />, label: "Smart TV" }
    ],
    flip: false,
  },
  {
    title: "Family Suite",
    overview: "Escape to the Mountain Retreat, offering stunning mountain views and a cozy ambiance perfect for a peaceful getaway.",
    price: "₹3200",
    images: ['/img/Room 4/IMG_7404.jpg','/img/Room 4/IMG_7405.jpg','/img/Room 4/IMG_7408.jpg','/img/Room 4/IMG_7422.jpg','/img/Room 4/IMG_7398.jpg','/img/Room 4/IMG_7411.jpg','/img/Room 4/IMG_7442.jpg','/img/Room 4/IMG_7392.jpg',,'/img/Room 4/IMG_7416.jpg','/img/Room 4/IMG_7430.jpg','/img/Room 4/IMG_7436.jpg'],
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
      <CommonSection title="Our Rooms" backgroundImage="/img/a16.jpg" />

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
