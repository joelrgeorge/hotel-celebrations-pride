import { useState, useEffect } from "react";
import Modal from "react-modal";
import "../styles/ImageCarousel.css"; // Include the CSS for styling
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getImageUrl } from "../utils/imageKit";
import "react-lazy-load-image-component/src/effects/blur.css";

Modal.setAppElement("#root");

const ImageCarousel = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openModal = (index) => {
    setSelectedImage(getImageUrl(images[index], 1200)); // Load high-res image in modal
    setIsModalOpen(true);
  };  

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="image-carousel-container">
      <div className="title-container">
        <p className="gallery-heading">Gallery</p>
        <h2 className="section-subtitle">Explore Our Stunning Gallery</h2>
      </div>

      <div className="image-carousel" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
        {[...images, ...images].map((img, index) => (
          <LazyLoadImage
            key={index}
            src={getImageUrl(img, 600)} // optimized width 600px
            alt={`carousel-${index}`}
            className="carousel-image"
            effect="blur"
            onClick={() => openModal(index % images.length)} // wrap index for modal
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="image-carousel-modal"
        overlayClassName="image-carousel-overlay"
      >
        <div className="slider-container">
          <div className="image-slider">
            {selectedImage && (
              <LazyLoadImage
                src={selectedImage}
                alt="Selected"
                className="slider-image"
                effect="blur"
              />
            )}
          </div>
          <button onClick={closeModal} className="close-modal-btn" aria-label="Close modal"></button>
        </div>
      </Modal>
    </div>
  );
};

export default ImageCarousel;