import React from "react";

function CharacterTitleDescription(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </>
  );
}

export default CharacterTitleDescription;
