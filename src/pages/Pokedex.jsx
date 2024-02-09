import React, { useState } from "react";
import Loading from "../components/common/Loading";
import PaginationButons from "../components/pokedex/PaginationButons";
import PokemonsList from "../components/pokedex/PokemonsList";
import Searchbar from "../components/pokedex/Searchbar";
import SearchedPokemon from "../components/pokedex/SearchedPokemon";
import { useMultipleFetch } from "../customHooks/useFetch";

function Pokedex() {
  const limit = 20;
  const [page, setPage] = useState(0);
  const offset = limit * page;
  const { loading, data, error } = useMultipleFetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  );
  const [query, setQuery] = useState();
  const [searchedData, setSearchedData] = useState(null);

  if (loading) return <Loading />;

  if ((!loading && error) || (!loading && !data))
    return <h1>Something went wrong...</h1>;

  return (
    <>
      <Searchbar
        setQuery={setQuery}
        setSearchedData={setSearchedData}
        query={query}
      />
      <PaginationButons setPage={setPage} />
      {searchedData && query ? (
        <SearchedPokemon pokemon={searchedData} />
      ) : (
        <PokemonsList data={data} />
      )}
    </>
  );
}

export default Pokedex;
