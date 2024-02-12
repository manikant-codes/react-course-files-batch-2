import React from "react";
import Chip from "./Chip";

function Types(props) {
  const types = props.types.map((value) => {
    return value.type.name;
  });

  return (
    <div style={{}}>
      <h2>Types</h2>
      <div style={{ display: "flex", gap: "8px", marginTop: "32px" }}>
        {types.map((value, index) => {
          return <Chip key={index} title={value} />;
        })}
      </div>
    </div>
  );
}

export default Types;
