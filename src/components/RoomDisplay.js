import { useState } from "react";
import "../styles/roomDisplay.css";
import { getImageUrl } from "../../imageKit";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const rooms = [
  {
    id: 1,
    name: "Superior Room",
    price: "2500 INR/night",
    description: "A cozy and comfortable space, perfect for couples or solo travelers, offering modern essentials and a homely vibe.",
    amenities: [
      "King-sized bed",
      "Fully-equipped kitchen",
      "Private bathroom",
      "Air conditioning and heating",
      "Smart TV and high-speed Wi-Fi"
    ],
    image: "a1.webp"
  },
  {
    id: 2,
    name: "Deluxe Family Suite",
    price: "4500 INR/night",
    description: "Ideal for small groups or families, this room offers ample sleeping arrangements and a well-furnished space.",
    amenities: [
      "Double bed and single bed",
      "Fully-equipped kitchen",
      "Private bathroom",
      "Spacious seating area",
      "Air conditioning and smart TV"
    ],
    image: "a2.webp"
  },
  {
    id: 3,
    name: "Premium Room",
    price: "3200 INR/night",
    description: "A more spacious and upgraded version of the 1BHK, offering enhanced comfort and top-tier amenities.",
    amenities: [
      "King-sized bed with premium bedding",
      "Fully-equipped modern kitchen",
      "Luxurious bathroom with upgraded fittings",
      "Elegant decor and spacious layout",
      "High-speed Wi-Fi and smart TV"
    ],
    image: "a3.webp"
  },
  {
    id: 4,
    name: "Executive Family Suite",
    price: "3800 INR/night",
    description: "Designed for larger families, this suite provides the ultimate blend of space, comfort, and luxury.",
    amenities: [
      "Multiple bedding options for families",
      "Large living and dining area",
      "Fully-equipped modern kitchen",
      "Premium bathroom with luxury fittings",
      "Enhanced decor and spacious layout"
    ],
    image: "Room 4/IMG_7399.webp"
  },
  {
    id: 5,
    name: "Hall",
    price: "5000 INR/4 hrs",
    description: "A versatile and elegant space for hosting events like conferences, parties, engagements, and weddings.",
    amenities: [
      "Spacious hall with customizable seating",
      "High-quality sound and lighting systems",
      "Air conditioning and temperature control",
      "On-site catering options available",
      "Stage and presentation equipment"
    ],
    image: "Banq_Hall/IMG_7522.jpg"
  }
];

const RoomDisplay = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div id="room-display" className="room-display-container">
      <div className="about-text">
        <p className="section-heading">Our Rooms</p>
      </div>

      {/* Top Row: 3 Rooms */}
      <div className="room-top-row">
        {rooms.slice(0, 3).map((room) => (
          <div key={room.id} className="room-tile" onClick={() => setSelectedRoom(room)}>
            <LazyLoadImage
              className="room-image"
              src={getImageUrl(room.image, 400)} // width=400px, quality defaults to 80
              alt={room.name}
              effect="blur"
            />
            <div className="room-overlay">
              <h3 className="room-name">{room.name}</h3>
              <span className="room-price">{room.price}</span>
            </div>
            <div className="room-info">
              <p className="room-description">{room.description}</p>
              <ul className="room-amenities">
                {room.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row: 2 Rooms, Centered */}
      <div className="room-bottom-row">
        {rooms.slice(3, 5).map((room) => (
          <div key={room.id} className="room-tile" onClick={() => setSelectedRoom(room)}>
            <LazyLoadImage
              className="room-image"
              src={getImageUrl(room.image, 400)}
              alt={room.name}
              effect="blur"
            />
            <div className="room-tall-overlay">
              <h3 className="room-name">{room.name}</h3>
              <span className="room-price">{room.price}</span>
            </div>
            <div className="room-tall-info">
              <p className="room-description">{room.description}</p>
              <ul className="room-amenities">
                {room.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRoom && (
        <div className="modal-overlay" onClick={() => setSelectedRoom(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setSelectedRoom(null)}>&times;</span>
            <div className="modal-room-name">{selectedRoom.name}</div>
            <LazyLoadImage
              src={getImageUrl(selectedRoom.image, 800)}
              alt={selectedRoom.name}
              width="100%"
              effect="blur"
            />
            <div className="modal-room-price">{selectedRoom.price}</div>
            </div>
        </div>
      )}
    </div>
  );
};

export default RoomDisplay;