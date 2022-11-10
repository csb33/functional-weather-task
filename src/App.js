import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WeatherData from "./Components/WeatherData";

const App = () => {
  //// HOOK
  //// Must be at top of function as needs to run before any other code.
  const [weathers, setWeather] = useState();

  ////FETCHING API
  const getApiData = async () => {
    ////Template Literal
    //// {` sometext ${} sometext `}
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=2.5&lon=5.9&appid=e6d679f1c4e26029b176b0ebfc933bd8`
    );

    ////sets state
    setWeather(result.data);
  };

  ////COMPONENT MOUNTING/UPDATING
  //// [] means will run once
  useEffect(() => {
    getApiData();
  }, []);

  return <>{weathers ? <WeatherData weathers={weathers} /> : "Loading..."}</>;
};

export default App;

/////
// const latitude = weathers.city.coord.lat;
// console.log(latitude, "LATITUDE");

// const longitude = weathers.city.coord.lon;
// console.log(longitude, "LONGITUDE");
