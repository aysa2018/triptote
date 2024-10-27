// src/components/Header.js

import React from 'react';

function Header({ season }) {
  return (
    <header className={`header ${season}`}>
      <h1>TripTote</h1>
      <p>Your ultimate packing assistant for stress-free travel!</p>
    </header>
  );
}

export default Header;

