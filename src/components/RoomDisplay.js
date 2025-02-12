import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/roomDisplay.css";

// Ensure the modal is attached to the root element
Modal.setAppElement("#root");

const rooms = [
  {
    name: "Single Room",
    description: (
      <>
        A cozy, tastefully furnished space designed for solo travelers.
        <br />
        <br />
        Enjoy a comfortable bed, a work desk, and modern amenities such as
        high-speed Wi-Fi and a flat-screen TV.
        <br />
        <br />
        Perfect for short getaways.
      </>
    ),
    price: "$100",
    images: ["/img/a1.jpg", "/img/a2.jpg", "/img/a3.jpg"],
  },
  {
    name: "Double Room",
    description: (
      <>
        Spacious and inviting, our Double Room is ideal for couples or friends.
        <br />
        It features two comfortable beds or one large bed, a seating area, and
        a modern ensuite bathroom. <br />
        <br />
        Relax with premium bedding, and a stunning view from your window.
      </>
    ),
    price: "$150",
    images: ["/img/a2.jpg", "/img/a3.jpg"],
  },
  {
    name: "Premium Suite",
    description: (
      <>
        Experience the ultimate in luxury with our exclusive Suite. It boasts a
        separate living area, a king-sized bed, and a spa-like bathroom with a
        soaking tub and rain shower. <br />
        Enjoy a personalized hospitality experience with premium amenities, a
        private balcony, and vibrant views.
        <br />
        <br />
      </>
    ),
    price: "$250",
    images: ["/img/a3.jpg", "/img/a1.jpg"],
  },
  {
    name: "Luxury Suite",
    description: (
      <>
        Experience the ultimate in luxury with our exclusive Suite. It boasts a
        separate living area, a king-sized bed, and a spa-like bathroom with a
        soaking tub and rain shower. <br />
        Enjoy a personalized hospitality experience with premium amenities, a
        private balcony, and vibrant views.
        <br />
        <br />
      </>
    ),
    price: "$250",
    images: ["/img/Room 4/IMG_7404.jpg", "/img/Room 4/IMG_7408.jpg"],
  },
  {
    name: "Banquet Hall",
    description: (
      <>
        Experience the ultimate in luxury with our exclusive Suite. It boasts a
        separate living area, a king-sized bed, and a spa-like bathroom with a
        soaking tub and rain shower. <br />
        Enjoy a personalized hospitality experience with premium amenities, a
        private balcony, and vibrant views.
        <br />
        <br />
      </>
    ),
    price: "$250",
    images: ["/img/Banq. Hall/IMG_7524.jpg", "/img/Banq. Hall/IMG_7519.jpg"],
  },
];

const RoomCard = ({ room, onOpen }) => (
  <div className="room-card">
    <img
      src={room.images[0]}
      alt={`${room.name} preview`}
      className="room-image"
    />
    <h3>{room.name}</h3>
    <p>{room.description}</p>
    <p>
      <strong>{room.price}</strong>
    </p>
    <button onClick={() => onOpen(room)}>View Images</button>
  </div>
);

const RoomDisplay = ({ rooms, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  const changeImage = (direction) => {
    if (selectedRoom) {
      const totalImages = selectedRoom.images.length;
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + direction + totalImages) % totalImages
      );
    }
  };

  return (
    <div className={`room-cards ${className}`}>
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} onOpen={openModal} />
      ))}

      {isModalOpen && selectedRoom && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="room-modal"
          overlayClassName="room-overlay"
        >
          <div className="slider-container">
            <button
              className="slider-btn prev-btn"
              onClick={() => changeImage(-1)}
              aria-label="Previous image"
            >
              ◄
            </button>
            <div className="image-home-slider">
              <img
                src={selectedRoom.images[currentImageIndex]}
                alt={`${selectedRoom.name} image ${currentImageIndex + 1}`}
                className="slider-image"
              />
            </div>
            <button
              className="slider-btn next-btn"
              onClick={() => changeImage(1)}
              aria-label="Next image"
            >
              ►
            </button>
          </div>
          <button
            onClick={closeModal}
            className="close-modal-btn"
            aria-label="Close modal"
          >
            ×
          </button>
        </Modal>
      )}
    </div>
  );
};

// Exporting TopRow and BottomRow separately with respective layout styles
export const TopRow = () => (
  <RoomDisplay rooms={rooms.slice(0, 2)} className="top-row" />
);
export const BottomRow = () => (
  <RoomDisplay rooms={rooms.slice(2)} className="bottom-row" />
);