// app.js

import React from "react";
import Hero from "./components/Hero";
import BookingForm from "./components/BookingForm";
import Navbar from "./components/Navbar";
import RoomDisplay from "./components/RoomDisplay"; // Import the RoomDisplay component
import MainTitle from "./components/MainTitle";
import Title from "./components/title"; // Import the Title component
import "./App.css"; // Import App.css for custom styling
import WhoAreWe from "./components/WhoAreWe";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  const galleryImages = [
    "/img/a1.jpg", "/img/a2.jpg", "/img/a3.jpg", "/img/a4.jpg", "/img/a5.jpg", "/img/a6.jpg", "/img/a7.jpg", "/img/a8.jpg", "/img/a9.jpg", "/img/a10.jpg", "/img/a11.png"
  ];
  return (
    <div>
      <Navbar />
      <Hero />
      <MainTitle />
      <div className="main-content">
        <div className="room-display-container">
          <RoomDisplay /> {/* Room Display on the left */}
        </div>
        <div className="booking-form-container">
          <BookingForm /> {/* Booking Form on the right */}
        </div>
      </div>
      <Title /> {/* Ensure Title component is rendered here */}
      <WhoAreWe />
      <Title /> {/* Ensure Title component is rendered here */}
      <ImageCarousel images={galleryImages} />
    </div>
  );
}

export default App;