// src/components/PackingList.js
import React from 'react';

function PackingList({ packingList }) {
  return (
    <div className="PackingList">
      <h2>Your Packing List</h2>

      <section>
        <h3>Fundamentals</h3>
        <ul>
          {packingList.fundamentals && packingList.fundamentals.map((item, index) => (
            <li key={index}>
              <input type="checkbox" />
              <label>{item}</label>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Clothing</h3>
        <ul>
          {packingList.clothing && packingList.clothing.map((item, index) => (
            <li key={index}>
              <input type="checkbox" />
              <label>{item}</label>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Toiletries</h3>
        <ul>
          {packingList.toiletries && packingList.toiletries.map((item, index) => (
            <li key={index}>
              <input type="checkbox" />
              <label>{item}</label>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Extras</h3>
        <ul>
          {packingList.extras && packingList.extras.map((item, index) => (
            <li key={index}>
              <input type="checkbox" />
              <label>{item}</label>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default PackingList;
