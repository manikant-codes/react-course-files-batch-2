import React from "react";
import { useState } from "react";

function UseStateExample4() {
  const initialColor = generateRandomColor();
  const [color, setColor] = useState(initialColor);

  function generateRandomColor() {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  }

  function handleColorChange() {
    setColor(generateRandomColor());
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "300px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          cursor: "pointer",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
        onClick={handleColorChange}
      >
        <div
          style={{
            width: "250px",
            height: "217px",
            backgroundColor: color,
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
          }}
        />
        <p style={{ fontSize: "1.25rem" }}>{color}</p>
      </div>
    </div>
  );
}

export default UseStateExample4;
