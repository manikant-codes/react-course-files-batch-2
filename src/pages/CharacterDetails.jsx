import React from "react";

function CharacterDetails() {
  //   console.log(window.location.pathname.match(/.{3}$/g)[0]);
  console.log(window.location.pathname.split("/")[2]);
  return <h1>CharacterDetails</h1>;
}

export default CharacterDetails;
