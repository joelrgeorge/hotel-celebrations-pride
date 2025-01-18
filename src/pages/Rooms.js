import React from "react";
import './styles/rooms.css';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from 'reactstrap';
import CommonSection from "../components/HeaderSection";
import Footer from "../components/Footer";
import RoomDetails from "../components/RoomDetails";
import ImageGallery from "../components/ImageGallery";
import Subtitle from '../components/Subtitle';
import NewsLetter from "../components/NewsLetter";

function Rooms() {
  const rooms = [
    {
      title: "Luxury Suite",
      overview: "A haven of comfort and elegance, our Luxury Suite features modern décor, plush bedding, and stunning views. Perfect for unwinding in style.",
      description: "The Luxury Suite offers an exquisite experience with its spacious layout, state-of-the-art amenities, and refined aesthetics. Enjoy a tranquil environment with a private balcony, deluxe bathroom, and personalized services. Whether for leisure or business, this suite ensures an unforgettable stay.",
      images: ['/img/a7.jpg', '/img/a8.jpg', '/img/a9.jpg'],
      flip: false,  // No flip for the first room
    },
    {
      title: "Ocean View Room",
      overview: "Enjoy breathtaking views of the ocean from our spacious Ocean View Room, complete with luxury bedding and elegant décor.",
      description: "The Ocean View Room offers a serene retreat with floor-to-ceiling windows, a comfortable king-size bed, and a private balcony to enjoy the scenic ocean view. Ideal for those seeking relaxation and luxury.",
      images: ['/img/a1.jpg', '/img/a2.jpg', '/img/a3.jpg'],
      flip: true,  // Flip for the second room
    },
    {
      title: "Mountain Retreat",
      overview: "Escape to the Mountain Retreat, offering stunning mountain views and a cozy ambiance perfect for a peaceful getaway.",
      description: "This room combines rustic charm with modern amenities. With a private balcony overlooking the mountains, this room provides a serene atmosphere for relaxation and rejuvenation.",
      images: ['/img/a4.jpg', '/img/a5.jpg', '/img/a6.jpg'],
      flip: false,  // No flip for the third room
    },
  ];

  return (
    <div>
      <Navbar />
      <CommonSection title={"Our Rooms"} />
      
      {/* Render each room dynamically */}
      {rooms.map((room, index) => (
        <div key={index} className={room.flip ? "room-flip" : ""}>
          <RoomDetails
            title={room.title}
            overview={room.overview}
            description={room.description}
            images={room.images}
          />
        </div>
      ))}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title">Check out our Hotel Gallery</h2>
            </Col>
            <Col lg='12'>
              <ImageGallery />
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