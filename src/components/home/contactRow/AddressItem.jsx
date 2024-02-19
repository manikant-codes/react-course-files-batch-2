import React from "react";

function AddressItem(props) {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div>
        <i
          className={props.iconClass}
          style={{ fontSize: "1.5rem", width: "auto" }}
        ></i>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <p style={{ margin: "0px", fontSize: "1.25rem" }}>{props.title}</p>
        <p style={{ margin: "0px" }}>{props.desc}</p>
      </div>
    </div>
  );
}

export default AddressItem;
