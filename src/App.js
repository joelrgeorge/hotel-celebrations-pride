import React from "react";
import './app.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Import Home component
import Rooms from "./pages/Rooms"; // Import Rooms component
import Contact from "./pages/Contact"; // Import Rooms component
import Banq_Hall from "./pages/Banq. Hall"; // Import Rooms component


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/banquet" element={<Banq_Hall />} />

    </Routes>
  );
}

export default App;