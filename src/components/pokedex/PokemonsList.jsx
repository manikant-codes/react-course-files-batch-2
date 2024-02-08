import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonsList(props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gridGap: "16px",
        justifyContent: "center",
        padding: "16px",
        width: "100%",
      }}
    >
      {props.data.map(function (pokemon) {
        return (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other["official-artwork"].front_default}
            tags={pokemon.types.map((type) => {
              return type.type.name;
            })}
          />
        );
      })}
    </div>
  );
}

export default PokemonsList;
