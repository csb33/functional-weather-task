import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WeatherData from "./Components/WeatherData";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  //// HOOK (func)
  //// Must be at top of function as needs to run before any other code.
  // const [weathers, setWeather] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  ////FETCHING API
  const getApiData = async () => {
    ////Template Literal

    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${2.52}&lon=${5.94}&appid=e6d679f1c4e26029b176b0ebfc933bd8`
    );

    ////sets state
    // setWeather(result.data);

    dispatch({ type: "STORE_API_DATA", weathers: result.data });
  };

  ////COMPONENT MOUNTING/UPDATING
  //// [] means will run once
  useEffect(() => {
    getApiData();
  }, []);

  return <>{state ? <WeatherData /> : "Loading..."}</>;
};

export default App;

/////
// const latitude = weathers.city.coord.lat;
// console.log(latitude, "LATITUDE");

// const longitude = weathers.city.coord.lon;
// console.log(longitude, "LONGITUDE");
