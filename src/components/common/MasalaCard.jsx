import React from "react";

function MasalaCard(props) {
  console.log("props", props);
  return (
    <div style={{ overflow: "hidden" }}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img
        src={props.imgURL}
        alt="India ke Masale!"
        style={{
          width: "100%",
          objectFit: "cover",
          height: "350px",
          borderRadius: "24px",
        }}
      />
      <div>
        <p>{props.origin}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default MasalaCard;
