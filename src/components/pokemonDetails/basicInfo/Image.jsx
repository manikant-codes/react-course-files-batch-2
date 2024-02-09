import React from "react";

function Image(props) {
  const { img, name } = props;
  console.log("img", img);
  return (
    <div>
      <img src={img} alt={name} />
    </div>
  );
}

export default Image;
