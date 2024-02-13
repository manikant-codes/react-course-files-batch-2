import React from "react";
import DetailsTable from "./DetailsTable";
import { useFetch } from "../../../customHooks/useFetch";

function Details(props) {
  const { height, weight, abilities, id } = props;

  const { loading, data, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  if (!data) return null;

  const desc =
    (data.flavor_text_entries &&
      Array.isArray(data.flavor_text_entries) &&
      data.flavor_text_entries.length &&
      data.flavor_text_entries[0]?.flavor_text?.replace("\f", "")) ||
    "No info found!";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <p>{desc}</p>
      <DetailsTable height={height} weight={weight} abilities={abilities} />
    </div>
  );
}

export default Details;
