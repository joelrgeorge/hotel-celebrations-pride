import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RoomDisplay from "../components/RoomDisplay"; // Import TopRow and BottomRow
import MainDisplay from "../components/MainDisplay";
import "./styles/home.css"; // Import App.css for custom styling
import WhoAreWe from "../components/WhoAreWe";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";

function Home() {
  const galleryImages = [
    "a1.webp", "a2.webp", "a3.webp", "/img/a4.webp", "a5.webp", "a6.webp", "a7.webp", "a8.webp", "a9.webp", "a10.webp", "a11.webp"
  ];

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <MainDisplay />
      <RoomDisplay />
      <ImageCarousel images={galleryImages} />
      <WhoAreWe />
      <Footer />
    </div>
  );
}

export default Home;