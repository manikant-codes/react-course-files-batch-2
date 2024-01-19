import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  console.log("errerererer", error);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(96deg, rgba(6,0,52,1) 0%, rgba(66,70,150,1) 58%, rgba(144,158,247,1) 83%, rgba(231,231,239,1) 100%)",
      }}
    >
      <div>
        <SearchBar
          weather={weather}
          setWeather={setWeather}
          setError={setError}
        />
        <WeatherCard weather={weather} error={error} />
      </div>
    </div>
  );
}

export default WeatherApp;
