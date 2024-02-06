import React from "react";
import PropTypes from "prop-types";
import "./loading.css";

const Loading = ({ size, text }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const spinnerStyle = {
    border: "8px solid rgba(0, 0, 0, 0.3)",
    borderTop: "8px solid #3498db",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
  };

  const textSize = {
    small: { fontSize: "16px" },
    medium: { fontSize: "24px" },
    large: { fontSize: "32px" },
  };

  return (
    <div style={{ ...containerStyle, ...textSize[size] }}>
      <div
        style={{
          ...spinnerStyle,
        }}
      ></div>
      <p>{text}</p>
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
};

export default Loading;
