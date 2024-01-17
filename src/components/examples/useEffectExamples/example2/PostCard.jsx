import React from "react";

function PostCard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        background: "white",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: "1.25rem" }}>{props.id}</p>
        <p style={{ fontSize: "1.25rem" }}>{props.userId}</p>
      </div>
      <hr />
      <div>
        <h3 style={{ fontSize: "1.7rem" }}>{props.title}</h3>
      </div>
      <div>
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export default PostCard;
