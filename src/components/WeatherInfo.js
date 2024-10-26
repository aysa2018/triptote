// src/components/WeatherInfo.js
import React from 'react';

function WeatherInfo({ weatherData }) {
  if (!weatherData) {
    return <p>Weather data not available. Please check the destination or try again later.</p>;
  }

  return (
    <div>
      <h2>Weather Forecast</h2>
      <p>{`Forecast for ${weatherData.date}:  ${weatherData.temp}°C`}</p>
    </div>
  );
}

export default WeatherInfo;
