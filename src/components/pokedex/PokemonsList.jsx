import React from "react";
import PokemonCard from "./PokemonCard";
import styles from "../../styles/pokedex/pokemonList.module.css";

function PokemonsList(props) {
  return (
    <div className={styles.container}>
      {props.searchedPokemon ? (
        <PokemonCard
          name={props.searchedPokemon.name}
          image={
            props.searchedPokemon.sprites.other["official-artwork"]
              .front_default
          }
          tags={props.searchedPokemon.types.map((type) => {
            return type.type.name;
          })}
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default PokemonsList;
