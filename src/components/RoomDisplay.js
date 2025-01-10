import React, { useState } from "react";
import "../styles/roomDisplay.css";
import Modal from "react-modal";

// Ensure the modal is attached to the root element
Modal.setAppElement("#root");

const RoomDisplay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the image index

  const rooms = [
    {
      name: "Single Room",
      description: 
      <>
        A cozy, tastefully furnished space designed for solo travelers. 
        <br /><br />Enjoy a comfortable bed, a work desk, and modern amenities such as high-speed Wi-Fi and a flat-screen TV. 
        <br /><br />Perfect for short getaways.
      </>,
      price: "$100",
      images: ["/img/a1.jpg", "/img/a2.jpg", "/img/a3.jpg", "/img/a4.jpg", "/img/a5.jpg", "/img/a6.jpg", "/img/a7.jpg"], // Array of images for the room
    },
    {
      name: "Double Room",
      description: 
      <>
        Spacious and inviting, our Double Room is ideal for couples or friends. <br />
        It features two comfortable beds or one large bed, 
        a seating area, and a modern ensuite bathroom. <br /><br />Relax with premium bedding, and a stunning view from your window.
      </>,
      price: "$150",
      images: ["/img/a2.jpg", "/img/a3.jpg"],
    },
    {
      name: "Suite",
      description: <>
        Experience the ultimate in luxury with our exclusive Suite. It boasts a separate living area, a king-sized bed, 
        and a spa-like bathroom with a soaking tub and rain shower. <br />Enjoy a personalized hospitality experience 
        with premium amenities, a private balcony, and vibrant views.,<br /><br />
      </>,
      price: "$250",
      images: ["/img/a3.jpg", "/img/a1.jpg"],
    },
  ];

  const openModal = (room) => {
    console.log("Opening room modal for room:", room.name); // Debugging
    setSelectedRoom(room);
    setIsModalOpen(true);
    setCurrentImageIndex(0);
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  const nextImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedRoom.images.length);
    }
  };

  const prevImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + selectedRoom.images.length) % selectedRoom.images.length
      );
    }
  };

  return (
    <div className="room-display">
      <p className="section-heading">Our Rooms</p>
      <h2>An Exceptional Stay Awaits You</h2>
      <div className="room-cards">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.images[0]} alt={room.name} className="room-image" />
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <p>
              <strong>{room.price}</strong>
            </p>
            <button onClick={() => openModal(room)}>View Images</button>
          </div>
        ))}
      </div>

      {/* Modal for Image Slider */}
      {isModalOpen && selectedRoom && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Room Image Slider"
          className="room-display room-modal"
          overlayClassName="room-display room-overlay"
        >
          <div className="slider-container">
            <button className="slider-btn prev-btn" onClick={prevImage} aria-label="Previous image"></button>
            <div className="image-slider">
              <img
                src={selectedRoom.images[currentImageIndex]}
                alt={`Room image ${currentImageIndex + 1}`}
                className="slider-image"
              />
            </div>
            <button className="slider-btn next-btn" onClick={nextImage} aria-label="Next image"></button>
          </div>
          <button onClick={closeModal} className="close-modal-btn" aria-label="Close modal"></button>
        </Modal>
      )}
    </div>
  );
};

export default RoomDisplay;