// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TripForm from './components/TripForm';
import PackingList from './components/PackingList';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [packingList, setPackingList] = useState({
    fundamentals: [],
    clothing: [],
    toiletries: [],
    extras: []
  });
  const [weatherData, setWeatherData] = useState(null);
  const [hasFetchedWeather, setHasFetchedWeather] = useState(false);

  const generatePackingList = ({ destination, startDate, endDate, tripType }) => {
    setHasFetchedWeather(true);

    const fundamentals = [
      "Passport/ID", "Wallet", "Phone", "Charger", "Reusable Water Bottle",
      "Medications", "Sunglasses", "Face Mask", "Hand Sanitizer"
    ];

    const clothing = ["T-Shirts", "Pants/Shorts", "Jacket", "Underwear", "Socks"];

    const toiletries = ["Toothbrush", "Toothpaste", "Shampoo", "Body Wash", "Deodorant"];

    let extras = [];

    // Add items based on trip type
    switch (tripType) {
      case "beach":
        extras = ["Swimsuit", "Beach Towel", "Sunscreen", "Flip Flops"];
        break;
      case "city":
        extras = ["Comfortable Shoes", "Guidebook", "Camera"];
        break;
      case "hiking":
        extras = ["Hiking Boots", "Backpack", "Trail Map", "First Aid Kit"];
        break;
      case "business":
        extras = ["Formal Attire", "Laptop", "Notebook", "Business Cards"];
        break;
      case "family":
        extras = ["Snacks for Kids", "Board Games", "Extra Towels"];
        break;
      case "friends":
        extras = ["Portable Speaker", "Games", "Cooler"];
        break;
      default:
        extras = [];
    }

    setPackingList({ fundamentals, clothing, toiletries, extras });
    fetchWeather(destination);
  };

  const fetchWeather = (destination) => {
    fetch(`https://api.tomorrow.io/v4/timelines?location=${destination}&fields=temperature&timesteps=1d&units=metric&apikey=${process.env.REACT_APP_TOMORROW_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.data && data.data.timelines.length > 0) {
          const weatherInfo = data.data.timelines[0].intervals[0].values;
          setWeatherData({
            date: new Date().toLocaleDateString(),
            description: "Temperature",
            temp: weatherInfo.temperature.toFixed(1),
          });
        } else {
          console.error('Weather data not available for this location.');
          setWeatherData(null);
        }
      })
      .catch(error => {
        console.error('Error fetching the weather data:', error);
        setWeatherData(null);
      });
  };

  return (
    <div className="App">
      <Header />
      <TripForm onTripSubmit={generatePackingList} />
      <WeatherInfo weatherData={weatherData} hasFetchedWeather={hasFetchedWeather} />
      <PackingList packingList={packingList} />
    </div>
  );
}

export default App;
