import React from "react";

function Chip(props) {
  return (
    <div
      style={{
        borderRadius: "32px",
        display: "inline-block",
        padding: "8px 16px",
        backgroundColor: "#d1c4e9",
      }}
    >
      {props.title}
    </div>
  );
}

export default Chip;
