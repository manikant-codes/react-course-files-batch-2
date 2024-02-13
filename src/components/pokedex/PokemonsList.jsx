import React from "react";
import PokemonCard from "./PokemonCard";
import styles from "../../styles/pokedex/pokemonsList.module.css";

function PokemonsList(props) {
  const { data } = props;

  function render() {
    if (Array.isArray(props.data)) {
      return (
        <>
          {data.map(function (pokemon) {
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
      );
    }
    return (
      <PokemonCard
        key={data.id}
        name={data.name}
        image={data.sprites.other["official-artwork"].front_default}
        tags={data.types.map((type) => {
          return type.type.name;
        })}
      />
    );
  }

  return <div className={styles.container}>{render()}</div>;
}

export default PokemonsList;
