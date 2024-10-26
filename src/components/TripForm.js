// src/components/TripForm.js
import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>Destination:</label>
      <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      
      <label>Start Date:</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      
      <label>End Date:</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      
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
      
      <button type="submit">Generate Packing List</button>
    </form>
  );
}

export default TripForm;
