// src/App.js
import React, { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';
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

    const toiletries = ["Toothbrush", "Toothpaste", "Shampoo", "Body Wash", "Deodorant", "Conditioner"];

    let extras = [];

    // Add items based on trip type
    switch (tripType) {
      case "beach":
        extras = ["Swimsuit", "Beach Towel", "Sunscreen", "Flip Flops", "Sun hat", ];
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
        extras = ["Portable Speaker", "Games", "Cooler", "Board Games"];
        break;
      case "camping":
        extras = ["Tent", "Sleeping Bag", "Camping Stove", "Cooking Utensils", "Flashlight", "Camping Chairs", "Bug Spray"];
        break;
      case "road-trip":
        extras = ["Road Map or GPS", "Snacks", "Portable Charger", "Travel Pillow", "First Aid Kit", "Car Cooler", "Playlist or Audiobooks", "Reusable Water Bottle", "Emergency Car Kit"];
        break;
      case "culture":
        extras = ["Guidebook", "Map", "Notebook", "Camera", "Comfortable Walking Shoes", "Translation App", "Reusable Water Bottle"];
        break;
      case "adventure":
        extras = ["Hiking Boots", "First Aid Kit", "Multi-tool", "Headlamp", "Water Purification Tablets", "Portable Charger", "Energy Snacks"];
        break;
      case "spiritual":
        extras = ["Journal", "Meditation Mat", "Essential Oils", "Comfortable Clothing", "Books on Spirituality", "Incense", "Reusable Water Bottle"];
        break;
      case "luxury":
        extras = ["Designer Outfits", "Travel-Size Spa Kit", "Portable Steamer", "Luxury Sunglasses", "Fine Dining Outfits", "Portable Charger", "High-end Camera"];
        break;
      
      default:
        extras = [];
    }

    setPackingList({ fundamentals, clothing, toiletries, extras });
    fetchWeather(destination); // Fetch weather data after generating packing list
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

  // State for theme and mood
  const [season, setSeason] = useState('spring'); // Initialize season state

  // Function to change season
  const changeSeason = (newSeason) => {
    setSeason(newSeason);
  };


  return (
    <div className={`App ${season}`} data-season={season}>
      <Header />
      <div className="season-buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => changeSeason('spring')}
        >
          Spring
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => changeSeason('summer')}
        >
          Summer
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => changeSeason('autumn')}
        >
          Autumn
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => changeSeason('winter')}
        >
          Winter
        </motion.button>
      </div>
      <TripForm onTripSubmit={generatePackingList} /> {/* Pass generatePackingList */}
      <WeatherInfo weatherData={weatherData} hasFetchedWeather={hasFetchedWeather} /> {/* Pass weatherData */}
      <PackingList packingList={packingList} /> {/* Pass packingList */}
    </div>
  );
  
}

export default App;
