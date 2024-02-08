import React from "react";

function PaginationButons(props) {
  function handleNext() {
    props.setPage(function (p) {
      return ++p;
    });
  }

  function handlePrev() {
    props.setPage(function (p) {
      if (p > 0) {
        return --p;
      } else {
        return 0;
      }
    });
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        gap: "16px",
        padding: "16px 32px",
        zIndex: 100,
        backgroundColor: "#f5f5f5",
        boxShadow:
          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
      }}
    >
      <button
        style={{
          backgroundColor: "#f44336",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        onClick={handlePrev}
      >
        Perv
      </button>
      <button
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default PaginationButons;
