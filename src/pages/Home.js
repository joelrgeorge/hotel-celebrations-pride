import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RoomDisplay from "../components/RoomDisplay";
import MainDisplay from "../components/MainDisplay";
import WhoAreWe from "../components/WhoAreWe";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";
import "./styles/home.css";

function Home() {
  const galleryImages = [
    "a1.webp", "a2.webp", "a3.webp", "a4.webp", "a5.webp",
    "a6.webp", "a7.webp", "a8.webp", "a9.webp", "a10.webp", "a11.webp"
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