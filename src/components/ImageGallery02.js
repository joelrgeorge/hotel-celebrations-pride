import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages02 from "../../galleryImages02"; 
import "../styles/gallerySection.css"; 

const fixedHeights = ["200px", "250px", "300px", "350px", "400px"];

const ImageGallery02 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to assign consistent heights based on index
  const getFixedHeight = (index) => {
    return fixedHeights[index % fixedHeights.length]; // Cycles through fixedHeights
  };

  const handleImageClick = (index) => {
    setSelectedImage(galleryImages02[index]);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  // Listen for window resize to trigger re-render
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedImage]);

  return (
    <div className="image-gallery-wrapper">
      <ResponsiveMasonry
        key={windowWidth}
        columnsCountBreakPoints={{
          0: 1, 
          468: 1, 
          600: 2, 
          769: 3, 
          1025: 3,  
          1401: 4,  
        }}
      >
        <Masonry gutter="1rem">
          {galleryImages02.map((item, index) => (
            <div key={index} className="masonry-item">
              <img
                className="masonry__img"
                src={item}
                alt={`Gallery Image ${index + 1}`}
                onClick={() => handleImageClick(index)}
                style={{ height: getFixedHeight(index), objectFit: "cover" }}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {selectedImage && (
        <div className="image-popup" onClick={closePopup}>
          <div className="popup-content">
            <img className="popup-image" src={selectedImage} alt="Selected" />
            <button className="close-button" onClick={closePopup}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery02;