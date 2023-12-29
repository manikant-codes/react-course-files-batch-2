import React from "react";
import CharacterCard from "../components/shinchanFandom/CharacterCard";
import { characters } from "../data/data";

function ShinchanFandom() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "16px",
        padding: "32px",
      }}
    >
      {characters.map(function (character, index, array) {
        return (
          <CharacterCard
            key={index}
            imgURL={character.imgURL}
            name={character.name}
            description={character.description}
            info={character.info}
          />
        );
      })}
    </div>
  );
}

export default ShinchanFandom;
