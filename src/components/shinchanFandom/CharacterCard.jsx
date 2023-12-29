import React from "react";
import InfoTable from "./InfoTable";

function CharacterCard(props) {
  return (
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        border: "solid 1px gray",
      }}
    >
      {/* Image */}
      <img
        src={props.imgURL}
        alt={props.name}
        style={{
          height: "350px",
          width: "100%",
          objectFit: "cover",
          objectPosition: "top center",
          marginBottom: "0px !important",
        }}
      />
      <div
        style={{
          padding: "16px",
          marginTop: "-4px",
          backgroundColor: "#e2e2e2",
        }}
      >
        {/* Title */}
        <h3 style={{ fontSize: "1.5rem" }}>{props.name}</h3>
        {/* Description */}
        <p
          style={{
            display: "-webkit-box",
            maxWidth: "100%",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {props.description}
        </p>
        {/* Info */}
        {/* <InfoTable rows={props.info} /> */}
      </div>
    </div>
  );
}

export default CharacterCard;
