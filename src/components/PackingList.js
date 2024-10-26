// src/components/PackingList.js
import React from 'react';

function PackingList({ items }) {
  return (
    <div className="PackingList"> {/* Ensure this matches CSS */}
      <h2>Your Packing List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input type="checkbox" />
            <label>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
