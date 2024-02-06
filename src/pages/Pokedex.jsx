import React, { useState } from "react";
import Loading from "../components/Loading";
import PokemonCard from "../components/pokedex/PokemonCard";
import { useMultipleFetch } from "../cusatomHooks/useFetch";

function Pokedex() {
  const limit = 20;
  const [page, setPage] = useState(0);
  const offset = limit * page;
  const { loading, lstData, error } = useMultipleFetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  );

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

  if (loading) return <Loading />;

  console.log(lstData, error);

  if ((!loading && error) || (!loading && !lstData))
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
        {lstData.map(function (pokemon) {
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
    </>
  );
}

export default Pokedex;
