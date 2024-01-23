import React, { useEffect, useState } from "react";
import { getPokemonDetails, getPokemons } from "../services/apiServices";

function Pokedex() {
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
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(function () {
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (!loading && error) return <h1>Something went wrong...</h1>;

  return <div>Pokedex</div>;
}

export default Pokedex;
