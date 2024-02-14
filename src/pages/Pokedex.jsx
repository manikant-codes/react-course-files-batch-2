import React, { useCallback, useState } from "react";
import Loading from "../components/common/Loading";
import PaginationButons from "../components/pokedex/PaginationButons";
import PokemonsList from "../components/pokedex/PokemonsList";
import Searchbar from "../components/pokedex/Searchbar";
import { useMultipleFetch } from "../customHooks/useFetch";
import { apis } from "../services/apiServices";

function Pokedex() {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  const limit = 20;
  const offset = limit * page;

  const getData = useCallback((data) => {
    return data.results.map((result) => {
      return result.url;
    });
  }, []);

  const { loading, data, error } = useMultipleFetch(
    apis.getPokemosList(offset, limit),
    getData
  );

  if (loading) return <Loading />;

  // Make better component.
  if ((!loading && error) || (!loading && !data))
    return <h1>Something went wrong...</h1>;

  return (
    <>
      <Searchbar
        setQuery={setQuery}
        setSearchedData={setSearchedPokemon}
        query={query}
      />
      <PaginationButons setPage={setPage} />
      <PokemonsList data={data} searchedPokemon={searchedPokemon} />
    </>
  );
}

export default Pokedex;
