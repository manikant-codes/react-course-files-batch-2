import React from "react";
import { kelvinToCelcius, getImage } from "./utils";

function WeatherCard(props) {
  return (
    <div
      style={{
        color: "white",
        height: "auto",
        width: "300px",
        /* Glass Effect */
        background:
          "linear-gradient(-45deg, rgba(125,130,255,0.5) 0%, rgba(144,158,247,0.5) 59%, rgba(231,231,239,0.5) 92%)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.6px)",
        "-webkit-backdrop-filter": "blur(6.6px)",
        border: "1px solid rgba(255, 255, 255, 0.46)",
        /* End Glass Effect */
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "32px",
      }}
    >
      {props.error ? (
        <p>{props.error}</p>
      ) : (
        <>
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
            {kelvinToCelcius(props.weather.main.temp)}
            <span style={{ fontSize: "4rem", fontWeight: "bold" }}>°</span>
          </p>
        </>
      )}
    </div>
  );
}

export default WeatherCard;
