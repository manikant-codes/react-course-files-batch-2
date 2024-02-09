import React from "react";
import { Button } from "react-bootstrap";

function NextPrevButtons(props) {
  const { number, setName } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        padding: "16px",
      }}
    >
      <Button
        variant="primary"
        style={{ width: "200px" }}
        onClick={() => {
          if (number > 1) {
            setName(number - 1);
          } else {
            setName(1025);
          }
        }}
      >
        Previous
      </Button>
      <Button
        variant="primary"
        style={{ width: "200px" }}
        onClick={() => {
          if (number < 1025) {
            setName(number + 1);
          } else {
            setName(1);
          }
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default NextPrevButtons;
