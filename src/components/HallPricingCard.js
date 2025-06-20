import React, { useState } from 'react';
import '../styles/RoomPricingCard.css';

const HallPricingCard = ({ room, onClose }) => {
  const [occupants, setOccupants] = useState(10); // ✅ Add this back
  const [ac, setAc] = useState('no');
  const [nights, setNights] = useState(4); // Default to 4 hours

  const pricePerAdult = room?.price ? parseInt(room.price.replace(/\D/g, '')) : 0;

  // ✅ Multiplier based only on hours
  const blocks = Math.floor(Math.max(nights - 1, 0) / 4);
  const multiplier = Math.pow(2, blocks); // 1 if 4 or less
  const adjustedPrice = pricePerAdult * multiplier;

  const baseCost = adjustedPrice; // 🚫 Not multiplied by occupants
  const acCost = ac === 'yes' ? baseCost * 0.07 : 0;
  const totalCost = baseCost + acCost;

  const handleOccupantsChange = (value) => setOccupants(Math.max(1, Number(value)));
  const handleNightsChange = (value) => setNights(Math.max(4, Number(value)));
  const handleAcChange = (value) => setAc(value);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="pricing-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="pricing-card__content">
          {/* Left Column: Pricing Details */}
          <div className="pricing-details">
            <h2>Room Pricing</h2>

            <div>
              <label>Members</label>
              <input
                type="number"
                min="10"
                value={occupants}
                onChange={(e) => handleOccupantsChange(e.target.value)}
              />
            </div>

            <div>
              <label>Hours</label>
              <input
                type="number"
                min="4"
                step="1"
                value={nights}
                onChange={(e) => handleNightsChange(e.target.value)}
              />
            </div>

            <div className="ac-selection">
              <label>AC</label>
              <select value={ac} onChange={(e) => handleAcChange(e.target.value)}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className="total-cost">Total: {totalCost} INR</div>
          </div>

          {/* Right Column: Room Preview */}
          <div className="room-preview">
            <h2>{room.title}</h2>
            {room.images && room.images.length > 0 && (
              <img src={room.images[0]} alt={room.title} className="room-image" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallPricingCard;