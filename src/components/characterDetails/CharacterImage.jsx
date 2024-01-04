import React from "react";

function CharacterImage(props) {
  return (
    <div>
      <img src={props.imgURL} alt="" />
    </div>
  );
}

export default CharacterImage;
