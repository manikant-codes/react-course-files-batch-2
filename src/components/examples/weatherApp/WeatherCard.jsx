import React from "react";
import { fahrenheitToCelcius, getImage } from "./utils";

function WeatherCard(props) {
  if (!props.weather) return "Please Enter A City!";
  return (
    <div
      style={{
        color: "white",
        height: "auto",
        width: "300px",
        backgroundColor: "#1c1c26",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "32px",
      }}
    >
      <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
        {props.weather.name}
      </p>
      <img
        src={getImage(props.weather.weather[0].icon)}
        alt=""
        style={{ width: "150px", height: "150px" }}
      />
      <p
        style={{
          fontSize: "6rem",
          fontWeight: "bold",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {fahrenheitToCelcius(props.weather.main.temp)}
        <span style={{ fontSize: "4rem", fontWeight: "bold" }}>°</span>
      </p>
    </div>
  );
}

export default WeatherCard;
