import React, { useEffect, useState } from "react";
import { getPokemonDetails, getPokemons } from "../services/apiServices";
import PokemonCard from "../components/pokedex/PokemonCard";

function Pokedex() {
  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gridGap: "16px",
    justifyContent: "center",
    padding: "16px",
    width: "100%",
  };

  const [pokemons, setPokemons] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    const temp = [];
    setLoading(true);
    try {
      const data = await getPokemons(0);
      for (const p of data.results) {
        const pokemon = await getPokemonDetails(p.url);
        temp.push(pokemon);
      }
      setPokemons(temp);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(function () {
    fetchData();
  }, []);

  console.log(pokemons);

  if (loading) return <h1>Loading...</h1>;
  if ((!loading && error) || (!loading && !pokemons))
    return <h1>Something went wrong...</h1>;

  return (
    <div style={gridStyles}>
      {pokemons.map(function (pokemon) {
        return (
          <PokemonCard
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

export default Pokedex;
