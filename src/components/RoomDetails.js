import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/RoomDetails.css';

const RoomDetails = ({ images, title, overview, description }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    centerMode: false,
  };

  useEffect(() => {
    const preloadImages = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img.decode();
    });

    Promise.all(preloadImages).then(() => setImagesLoaded(true));
  }, [images]);

  return (
    <div className="room-details">
      {imagesLoaded ? (
        <div className="room-details__top">
          <div className="room-details__left">
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index} className="image-slider">
                  <img src={image} alt={`Room ${index + 1}`} className="slider-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="room-details__right">
            <h2 className="room-title">{title}</h2>
            <p className="room-overview">{overview}</p>
            <button className="book-now">Book Now</button>
          </div>
        </div>
      ) : (
        <p>Loading slider...</p>
      )}

      <div className="room-details__description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RoomDetails;