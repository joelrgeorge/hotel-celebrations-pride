import React from "react";
import './app.css';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/feature/ScrollToTop"; // Import the ScrollToTop component
import Home from "./pages/Home"; // Import Home component
import Rooms from "./pages/Rooms"; // Import Rooms component
import Contact from "./pages/Contact"; // Import Rooms component
import Banq_Hall from "./pages/Banq. Hall"; // Import Rooms component'
import TnC from "./pages/TnC";
import PrivacyPolicy from "./pages/PrivacyPolicy";



function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/banquet" element={<Banq_Hall />} />
      <Route path="/TnC" element={<TnC />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

    </Routes>
    </>
  );
}

export default App;