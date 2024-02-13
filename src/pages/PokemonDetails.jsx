import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NextPrevButtons from "../components/pokemonDetails/NextPrevButtons";
import BasicInfo from "../components/pokemonDetails/basicInfo/BasicInfo";
import { useFetch } from "../customHooks/useFetch";
import Loading from "../components/common/Loading";
import MoreInfo from "../components/pokemonDetails/moreInfo/MoreInfo";
import EvolutionInfo from "../components/pokemonDetails/evolutionInfo/EvolutionInfo";

function PokemonDetails() {
  const { id } = useParams();

  const [name, setName] = useState(id);

  const { loading, data, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  if (loading) return <Loading />;

  if ((!loading && !data) || error) {
    return <h2>Something went wrong</h2>;
  }

  const { id: number } = data;

  return (
    <div>
      <NextPrevButtons number={number} setName={setName} />
      <BasicInfo data={data} />
      <MoreInfo stats={data.stats} types={data.types} />
      <EvolutionInfo id={number} />
    </div>
  );
}

export default PokemonDetails;
