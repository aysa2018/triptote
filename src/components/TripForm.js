// src/components/TripForm.js
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

function TripForm({ onTripSubmit }) {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tripType, setTripType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onTripSubmit({ destination, startDate, endDate, tripType });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }} // Initial state for animation
      animate={{ opacity: 1, y: 0 }}   // Animate to full opacity and position
      transition={{ duration: 0.5 }}    // Duration of the animation
    >
      <label>Destination:</label>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      
      <label>Start Date:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      
      <label>End Date:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      
      <label>Trip Type:</label>
      <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
        <option value="beach">Beach</option>
        <option value="city">City</option>
        <option value="hiking">Hiking</option>
        <option value="business">Business</option>
        <option value="family">Family Trip</option>
        <option value="friends">Friends Trip</option>
        <option value="camping">Camping</option>
        <option value="road-trip">Road Trip</option>
      </select>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}   // Scale up slightly on hover
        whileTap={{ scale: 0.95 }}     // Scale down slightly on tap
        transition={{ duration: 0.2 }} // Smooth and quick transition for button
      >
        Generate Packing List
      </motion.button>
    </motion.form>
  );
}

export default TripForm;
