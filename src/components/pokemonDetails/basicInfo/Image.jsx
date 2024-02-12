import React from "react";

function Image(props) {
  const { img, name } = props;
  return (
    <div>
      <img src={img} alt={name} />
    </div>
  );
}

export default Image;
