import React, { useState } from "react";
import { getWeather } from "../../../services/apiServices";

function SearchBar(props) {
  const [city, setCity] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        marginBottom: "16px",
      }}
    >
      <input
        type="text"
        style={{ borderRadius: "32px", padding: "8px", flexGrow: 1 }}
        onChange={handleChange}
      />

      <button
        style={{
          borderRadius: "32px",
          backgroundImage:
            "linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%)",
          margin: "10px",
          padding: "10px 15px",
          textAlign: "center",
          textTransform: "uppercase",
          transition: "0.5s",
          backgroundSize: "200% auto",
          color: "white",
          boxShadow: "0 0 4px #eee",
          display: "block",
          border: "none",
          cursor: "pointer",
        }}
        onClick={function () {
          getWeather(city, function (data) {
            if (data && data.cod && data.cod === "404") {
              props.setError(data.message);
              throw new Error(data.message);
            } else {
              props.setError(null);
              props.setWeather(data);
            }
          });
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default SearchBar;
