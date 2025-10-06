import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/RoomDetails.css';
import RoomPricingCard from './RoomPricingCard';
import { getImageUrl } from "../../utils/imageKit";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RoomDetails = ({ images, title, overview, description, facilities, price }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    const preloadImages = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img.decode().catch(() => {});
    });

    Promise.all(preloadImages).then(() => setImagesLoaded(true));
  }, [images]);

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
  };

  return (
    <div className="room-details">
      {imagesLoaded ? (
        <>
          <div className="room-details__top">
            <div className="room-details__left">
              <Slider {...sliderSettings}>
                {images.map((image, index) => (
                  <div key={index} className="image-slider">
                    <LazyLoadImage
                      key={i}
                      src={getImageUrl(img, 600)} // width 600px
                      alt={`${room.title} image ${i + 1}`}
                      effect="blur"
                      className="room-image"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="room-details__right">
              <h2 className="room-title">{title}</h2>
              <p className="room-overview" dangerouslySetInnerHTML={{ __html: overview }} />
              <button className="book-now" onClick={() => setShowPricing(true)}>Book Now</button>
            </div>
          </div>
          <div className="facilities-wrapper">
            <h4 className="facilities-title">Facilities</h4>
            <ul className="facilities-list">
              {facilities.map((facility, idx) => (
                <li key={idx} className="facility-item">
                  {facility.icon} {facility.label}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Loading slider...</p>
      )}

      {showPricing && (
        <RoomPricingCard
          room={{ title, description, price, images }}
          onClose={() => setShowPricing(false)}
        />
      )}
    </div>
  );
};

export default RoomDetails;