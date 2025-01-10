import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../styles/imageCarousel.css"; // Include the CSS for styling

// Ensure the modal is attached to the root element
Modal.setAppElement("#root");

const ImageCarousel = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // To handle the seamless sliding effect of images in the section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Wraps around images
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const openModal = (index) => {
    console.log("Opening modal with index:", index); // Debugging
    setSelectedImage(images[index]);
    setIsModalOpen(true);
  };  

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="image-carousel-container">
      {/* Title above the carousel */}
      <div className="title-container"> {/* Wrapper to center the title and subtitle */}
        <p className="gallery-heading">Gallery</p>
        <h2 className="section-subtitle">
          Explore Our Stunning Gallery
        </h2>
      </div>

      <div className="image-carousel" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
        {/* Duplicating the images to create the infinite loop effect */}
        {[...images, ...images].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-${index}`}
            className="carousel-image"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal for showing the selected image */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal} // Handle close with your custom function
        contentLabel="Image Modal"
        className="image-carousel-modal"
        overlayClassName="image-carousel-overlay"
      >
        {/* Modal content */}
        <div className="slider-container">
          <div className="image-slider">
            <img
              src={selectedImage}
              alt="Selected"
              className="slider-image"
            />
          </div>
          {/* Close button inside modal */}
          <button onClick={closeModal} className="close-modal-btn" aria-label="Close modal"></button>
        </div>
      </Modal>
    </div>
  );
};

export default ImageCarousel;