import React, { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import galleryImages from '../../galleryImages'; // Ensure this imports a valid array of image URLs
import '../styles/gallerySection.css'; // Import the CSS

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImage(galleryImages[index]);
    };

    const closePopup = () => {
        setSelectedImage(null);
    };

    return (
        <div className="image-gallery-wrapper">
            <Masonry columnsCount={3} gutter="1rem"> {/* Fixed columnsCount */}
                {galleryImages.map((item, index) => (
                    <img
                        key={index}
                        className="masonry__img"
                        src={item}
                        alt={`Gallery Image ${index + 1}`}
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </Masonry>

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

export default ImageGallery;