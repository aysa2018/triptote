// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TripForm from './components/TripForm';
import PackingList from './components/PackingList';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [packingList, setPackingList] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  const generatePackingList = ({ destination, startDate, endDate, tripType }) => {
    // Expanded base items organized by categories
    const baseItems = [
      "Toothbrush", "Toothpaste", "Shampoo", "Body Wash", "Deodorant", 
      "Charger", "Phone", "Passport/ID", "Wallet", "Sunglasses", 
      "Reusable Water Bottle", "Hand Sanitizer", "Medications", "Face Mask"
    ];

    let tripSpecificItems = [];

    switch (tripType) {
      case "beach":
        tripSpecificItems = [
          "Swimsuit", "Sunscreen", "Flip Flops", "Beach Towel", 
          "Beach Umbrella", "Snorkel Gear", "Beach Bag", "Sunglasses"
        ];
        break;
      case "city":
        tripSpecificItems = [
          "Comfortable Walking Shoes", "Casual Outfits", "Portable Charger", 
          "City Guidebook", "Camera", "Small Backpack", "Umbrella"
        ];
        break;
      case "hiking":
        tripSpecificItems = [
          "Hiking Boots", "Water Bottle", "First Aid Kit", "Backpack", 
          "Trail Map", "Compass", "Hiking Snacks", "Rain Jacket"
        ];
        break;
      case "business":
        tripSpecificItems = [
          "Formal Attire", "Laptop", "Notebooks", "Business Cards", 
          "Dress Shoes", "Planner", "Pen", "Portable Charger"
        ];
        break;
      case "family":
        tripSpecificItems = [
          "Snacks for Kids", "Board Games", "Extra Towels", "First Aid Kit", 
          "Wet Wipes", "Kid-Friendly Sunscreen", "Portable Cooler", "Travel Pillow"
        ];
        break;
      case "friends":
        tripSpecificItems = [
          "Portable Speaker", "Games", "Extra Snacks", "Cooler", 
          "Party Games", "Disposable Camera", "Sunglasses", "Hat"
        ];
        break;
      case "camping":
        tripSpecificItems = [
          "Tent", "Sleeping Bag", "Portable Stove", "Lantern", 
          "Bug Spray", "Camping Chair", "Fire Starter", "Camping Cooler"
        ];
        break;
      case "road-trip":
        tripSpecificItems = [
          "Snacks", "Maps/GPS", "Car Charger", "Cooler", 
          "Blanket", "Travel Pillow", "Spare Car Key", "First Aid Kit"
        ];
        break;
      default:
        tripSpecificItems = [];
    }

    const initialPackingList = [...baseItems, ...tripSpecificItems];
    setPackingList(initialPackingList);

    // Fetch weather data
    fetchWeather(destination, initialPackingList);
  };

  const fetchWeather = (destination, initialPackingList) => {
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
          adjustPackingList(initialPackingList, weatherInfo.temperature, weatherInfo.description);
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

  const adjustPackingList = (initialPackingList, temperature, description) => {
    const updatedItems = [...initialPackingList];

    // Adjust items based on temperature
    if (temperature <= 5) {
      updatedItems.push("Heavy Jacket", "Thermal Socks", "Gloves");
    } else if (temperature <= 15) {
      updatedItems.push("Light Jacket", "Sweater");
    } else if (temperature >= 25) {
      updatedItems.push("Hat", "Sunglasses", "Water Bottle");
    }

    // Adjust items based on weather description
    if (description && description.toLowerCase().includes("rain")) {
      updatedItems.push("Umbrella", "Raincoat");
    }

    setPackingList(updatedItems);
  };

  return (
    <div className="App">
      <Header />
      <TripForm onTripSubmit={generatePackingList} />
      <WeatherInfo weatherData={weatherData} />
      <PackingList items={packingList} />
    </div>
  );
}

export default App;
