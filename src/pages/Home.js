import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RoomDisplay from "../components/RoomDisplay"; // Import TopRow and BottomRow
import MainTitle from "../components/MainTitle";
import "./styles/home.css"; // Import App.css for custom styling
import WhoAreWe from "../components/WhoAreWe";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";

function Home() {
  const galleryImages = [
    "/img/a1.jpg", "/img/a2.jpg", "/img/a3.jpg", "/img/a4.jpg", "/img/a5.jpg", "/img/a6.jpg", "/img/a7.jpg", "/img/a8.jpg", "/img/a9.jpg", "/img/a10.jpg", "/img/a11.png", "/img/holiday-inn-savannah-5627537490-4x3.avif"
  ];

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <MainTitle />
      <RoomDisplay />
      <ImageCarousel images={galleryImages} />
      <WhoAreWe />
      <Footer />
    </div>
  );
}

export default Home;