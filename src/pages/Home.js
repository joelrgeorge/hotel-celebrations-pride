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
    "/img/a1.webp", "/img/a2.webp", "/img/a3.webp", "/img/a4.webp", "/img/a5.webp", "/img/a6.webp", "/img/a7.webp", "/img/a8.webp", "/img/a9.webp", "/img/a10.webp", "/img/a11.webp"
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