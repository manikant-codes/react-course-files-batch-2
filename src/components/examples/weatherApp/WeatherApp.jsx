import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <SearchBar
          city={city}
          setCity={setCity}
          weather={weather}
          setWeather={setWeather}
        />
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
}

export default WeatherApp;
