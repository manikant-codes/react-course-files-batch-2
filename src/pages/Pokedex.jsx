import React, { useState } from "react";
import Loading from "../components/common/Loading";
import Pagination from "../components/pokedex/Pagination";
import PokemonsList from "../components/pokedex/PokemonsList";
import Searchbar from "../components/pokedex/Searchbar";
import { useMultipleFetch } from "../customHooks/useFetch";

function Pokedex() {
  const limit = 20;
  const [page, setPage] = useState(0);
  const offset = limit * page;
  const { loading, data, error } = useMultipleFetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`,
    (response) => {
      return response.results.map((value) => {
        return value.url;
      });
    }
  );
  const [query, setQuery] = useState();
  const [searchResult, setSearchResult] = useState(null);

  if (loading) return <Loading />;

  if ((!loading && error) || (!loading && !data))
    return <h1>Something went wrong...</h1>;

  return (
    <>
      <Searchbar
        setQuery={setQuery}
        setSearchResult={setSearchResult}
        query={query}
      />
      <PokemonsList data={searchResult && query ? searchResult : data} />
      <Pagination setPage={setPage} />
    </>
  );
}

export default Pokedex;
