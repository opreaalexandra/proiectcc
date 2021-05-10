import React, { useState } from "react";

import "./App.css";

import { Grid } from "@material-ui/core";
import { getData, getCities } from "./api";
import { NavBar, Result } from "./components";

function App() {
  const [weather, setWeather] = useState({});

  const [cityList, setCityList ] = useState([''])

  const getCityList = async() => {
    const data = await getCities();
    setCityList(data);
    console.log(cityList);
  }

  const getWeather = async (location) => {
    const getedData = await getData(location);
    setWeather(getedData);
  };

  const getDate = () => {
    return new Date().toDateString();
  };

  const isUndefined = () => {
    if (typeof weather.main === "undefined") return true;
    return false;
  };

  const getClasses = () => {
    if (isUndefined()) return "app";
    if (weather.main.temp > 20) return "app hot";
    return "app";
  };
  return (
    <div className={getClasses()}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        direction="column"
        style={{ minHeight: "100vh" }}
      >
        
        <Grid item xs={12}>
          <NavBar onSubmit={getWeather} />
        </Grid>
        <Grid item xs={12}>
          {!isUndefined() && <Result weather={weather} getDate={getDate} />}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
