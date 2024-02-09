import React from "react";

function Title(props) {
  const { name, id } = props;
  return (
    <div>
      <h2 style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
        <span>{name}</span>
        <span>#{id}</span>
      </h2>
    </div>
  );
}

export default Title;
