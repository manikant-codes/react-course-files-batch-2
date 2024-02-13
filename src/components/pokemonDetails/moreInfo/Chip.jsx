import React from "react";
import { getTagBackgroundColor } from "../../../utils/tagHelper";

function Chip(props) {
  return (
    <div
      style={{
        borderRadius: "32px",
        display: "inline-block",
        padding: "8px 16px",
        backgroundColor: getTagBackgroundColor(props.title),
      }}
    >
      {props.title}
    </div>
  );
}

export default Chip;
