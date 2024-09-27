import React, { useState } from 'react';
import axios from 'axios';


const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const handleCityChange = (event) =>{
    setCity(event.target.value)
  }
  const fetchWeather = async () =>{
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'169da1a56ac10a1a19988513a3e1d5bf'}`)
      setWeather(response);
    }
    catch(error){
       console.log("Error fetching weather data", error)
    }
  }
  const handleClick = () =>{
    fetchWeather();
  }
  return (
    <>
      <div className="weather-container py-4">
         <input type="text" placeholder="Enter the city" value={city} onChange={handleCityChange} />
         <button onClick={handleClick}>Get Weather</button>
         {weather && <>
         <div className="weather-info">
            <h2>{weather.data.name}</h2>
            <h3>Temp is {weather.data.main.temp}</h3>
            <p>{weather.data.weather[0].description}</p>
         </div>
         </>}
      </div>
    </>
  );
};

export default Weather;
