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
      overview: "A haven of comfort and elegance, our Luxury Suite features modern décor, plush bedding, and stunning views. Perfect for unwinding in style.",
      description: "To make your stay even more enjoyable, we offer a selection of extras to enhance your experience in our double bedrooms. Unwind with complimentary access to our fitness center or indulge in a rejuvenating spa treatment. Start your day with a delicious continental breakfast served right to your room or enjoy a complimentary newspaper. \nAt Hotel Celebrations Pride, Jaipur, we believe that everyone deserves a luxurious retreat that helps them enjoy the bliss of the pink city. Therefore, not only are our services and facilities magnificent and we provide the luxurious stay to our guest but also affordable. The elegant room includes 40 inches flat screens, Tea & coffee making facilities, minibars, high-speed Wi-Fi (free), full-size windows with city views, which provides a sense of homeliness to its guests.",
      facilities: ["🚗 Free Parking", "🍽️ In-Room Dining", "🌐 Free Wi-Fi", "🏊 Pool Access", "🏋️ Fitness Center"],
      images: ['/img/Room 1/IMG_7100.jpg', '/img/Room 1/IMG_7098.jpg', '/img/Room 1/IMG_7110.jpg', '/img/Room 1/IMG_7115.jpg', '/img/Room 1/IMG_7118.jpg', '/img/Room 1/IMG_7119.jpg', '/img/Room 1/IMG_7121.jpg', '/img/Room 1/IMG_7130.jpg', '/img/Room 1/IMG_7131.jpg', '/img/Room 1/IMG_7135.jpg', '/img/Room 1/IMG_7152.jpg'],
      flip: false,
    },
    {
      title: "Ocean View Room",
      overview: "Enjoy breathtaking views of the ocean from our spacious Ocean View Room, complete with luxury bedding and elegant décor.",
      description: "The Ocean View Room offers a serene retreat with floor-to-ceiling windows, a comfortable king-size bed, and a private balcony to enjoy the scenic ocean view. Ideal for those seeking relaxation and luxury.",
      images: ['/img/Room 2/IMG_7220.jpg','/img/Room 2/IMG_7194.jpg','/img/Room 2/IMG_7199.jpg','/img/Room 2/IMG_7210.jpg','/img/Room 2/IMG_7215.jpg','/img/Room 2/IMG_7216.jpg','/img/Room 2/IMG_7218.jpg','/img/Room 2/IMG_7244.jpg','/img/Room 2/IMG_7252.jpg','/img/Room 2/IMG_7256.jpg','/img/Room 2/IMG_7244.jpg'],
      facilities: ["🚗 Free Parking", "🍸 Bar Access", "🌐 Free Wi-Fi", "🏖️ Beach View", "📺 Smart TV"],
      flip: true,
    },
    {
      title: "Mountain Retreat",
      overview: "Escape to the Mountain Retreat, offering stunning mountain views and a cozy ambiance perfect for a peaceful getaway.",
      description: "This room combines rustic charm with modern amenities. With a private balcony overlooking the mountains, this room provides a serene atmosphere for relaxation and rejuvenation.",
      images: ['/img/Room 3/IMG_7313.jpg','/img/Room 3/IMG_7317.jpg','/img/Room 3/IMG_7284.jpg','/img/Room 3/IMG_7285.jpg','/img/Room 3/IMG_7366.jpg','/img/Room 3/IMG_7287.jpg','/img/Room 3/IMG_7291.jpg','/img/Room 3/IMG_7293.jpg','/img/Room 3/IMG_7296.jpg','/img/Room 3/IMG_7383.jpg','/img/Room 3/IMG_7390.jpg'],
      facilities: ["🚗 Free Parking", "🔥 Fireplace", "🌐 Free Wi-Fi", "🏞️ Mountain View", "☕ Coffee Maker"],
      flip: false,
    },
    {
      title: "Super Deluxe Suite",
      overview: "Escape to the Mountain Retreat, offering stunning mountain views and a cozy ambiance perfect for a peaceful getaway.",
      description: "This room combines rustic charm with modern amenities. With a private balcony overlooking the mountains, this room provides a serene atmosphere for relaxation and rejuvenation.",
      images: ['/img/Room 3/IMG_7313.jpg','/img/Room 3/IMG_7317.jpg','/img/Room 3/IMG_7284.jpg','/img/Room 3/IMG_7285.jpg','/img/Room 3/IMG_7366.jpg','/img/Room 3/IMG_7287.jpg','/img/Room 3/IMG_7291.jpg','/img/Room 3/IMG_7293.jpg','/img/Room 3/IMG_7296.jpg','/img/Room 3/IMG_7383.jpg','/img/Room 3/IMG_7390.jpg'],
      facilities: ["🚗 Free Parking", "🔥 Fireplace", "🌐 Free Wi-Fi", "🏞️ Mountain View", "☕ Coffee Maker"],
      flip: true,
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
      
      <USPSection />
      <section className="Image-Section">
      <Subtitle subtitle={'Gallery'} />
        <Container>
        <h2 className="gallery__title">Check out our Hotel Gallery</h2>
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