// Rooms.js

import React from "react";
import './styles/rooms.css';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from 'reactstrap';
import CommonSection from "../components/HeaderSection";
import Footer from "../components/Footer";
import RoomDetails from "../components/RoomDetails";
import ImageGallery from "../components/ImageGallery";
import USPSection from "../components/USPSection";
import Subtitle from '../components/Subtitle';

function Rooms() {
  const rooms = [
    {
      title: "Luxury Suite",
      overview: "A haven of comfort and elegance, our Luxury Suite features modern décor, plush bedding, and stunning views. Perfect for unwinding in style. <br /> The elegant room includes 40 inches flat screens, Tea & coffee making facilities, minibars, high-speed Wi-Fi (free), full-size windows with city views, which provides a sense of homeliness to its guests.",
      description: "To make your stay even more enjoyable, we offer a selection of extras to enhance your experience in our double bedrooms. Unwind with complimentary access to our fitness center or indulge in a rejuvenating spa treatment. Start your day with a delicious continental breakfast served right to your room or enjoy a complimentary newspaper. \nAT Hotel Shubh Vilas, Jaipur, we believe that everyone deserves a luxurious retreat that helps them enjoy the bliss of the pink city. Therefore, not only are our services and facilities magnificent and we provide the luxurious stay to our guest but also affordable.",
      facilities: ["🚗 Free Parking", "🍽️ In-Room Dining", "🌐 Free Wi-Fi", "🏊 Pool Access", "🏋️ Fitness Center"],
      images: ['/img/a7.jpg', '/img/a8.jpg', '/img/a9.jpg'],
      flip: false,
    },
    {
      title: "Ocean View Room",
      overview: "Enjoy breathtaking views of the ocean from our spacious Ocean View Room, complete with luxury bedding and elegant décor.",
      description: "The Ocean View Room offers a serene retreat with floor-to-ceiling windows, a comfortable king-size bed, and a private balcony to enjoy the scenic ocean view. Ideal for those seeking relaxation and luxury.",
      images: ['/img/a1.jpg', '/img/a2.jpg', '/img/a3.jpg'],
      facilities: ["🚗 Free Parking", "🍸 Bar Access", "🌐 Free Wi-Fi", "🏖️ Beach View", "📺 Smart TV"],
      flip: true,
    },
    {
      title: "Mountain Retreat",
      overview: "Escape to the Mountain Retreat, offering stunning mountain views and a cozy ambiance perfect for a peaceful getaway.",
      description: "This room combines rustic charm with modern amenities. With a private balcony overlooking the mountains, this room provides a serene atmosphere for relaxation and rejuvenation.",
      images: ['/img/a4.jpg', '/img/a5.jpg', '/img/a6.jpg'],
      facilities: ["🚗 Free Parking", "🔥 Fireplace", "🌐 Free Wi-Fi", "🏞️ Mountain View", "☕ Coffee Maker"],
      flip: false,
    },
  ];

  return (
    <div className="room-layout">
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
            facilities={room.facilities} // Pass facilities here
          />
        </div>
      ))}

      <section className="Image-Section">
        <Container>
        <Subtitle subtitle={'Gallery'} />
        <h2 className="gallery__title">Check out our Hotel Gallery</h2>
          <Row>
            <Col lg='12'>
              <ImageGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <USPSection />
      <Footer />
    </div>
  );
}

export default Rooms;