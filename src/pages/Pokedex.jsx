import React, { useState } from "react";
import { useFetch, useMultipleFetch } from "../cusatomHooks/useFetch";
import PokemonCard from "../components/pokedex/PokemonCard";

function Pokedex() {
  // const [loading, data, error] = useFetch(
  //   `https://pokeapi.co/api/v2/pokemon/?offset=${0}&limit=${20}`
  // );

  const [loading, data, error] = useMultipleFetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${0}&limit=${20}`
  );

  console.log("data", data);

  // const [pokemons, setPokemons] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  // async function fetchData() {
  //   const temp = [];
  //   setLoading(true);
  //   try {
  //     const data = await getPokemons(page);
  //     for (const r of data.results) {
  //       const pokemon = await getPokemonDetails(r.url);
  //       temp.push(pokemon);
  //     }
  //     setPokemons(temp);
  //   } catch (err) {
  //     console.log(err);
  //     setError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(
  //   function () {
  //     fetchData();
  //   },
  //   [page]
  // );

  function handleNext() {
    setPage(function (p) {
      return ++p;
    });
  }

  function handlePrev() {
    setPage(function (p) {
      if (p > 0) {
        return --p;
      } else {
        return 0;
      }
    });
  }

  if (loading) return <h1>Loading...</h1>;

  if ((!loading && error) || (!loading && !data))
    return <h1>Something went wrong...</h1>;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          gap: "16px",
          padding: "16px 32px",
          zIndex: 100,
          backgroundColor: "#f5f5f5",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      >
        <button
          style={{
            backgroundColor: "#f44336",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
          onClick={handlePrev}
        >
          Perv
        </button>
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
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
        {data.map(function (pokemon) {
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
    </>
    // <h1>Pokedex</h1>
  );
}

export default Pokedex;
