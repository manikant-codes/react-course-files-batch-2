import React, { useEffect, useState } from "react";
import {
  fetchEvolutionChain,
  fetchMultipleData,
} from "../../../services/apiServices";
import styles from "../../../styles/pokemonDetails/evolutionInfo.module.css";
import { getAllSpeciesNames } from "../../../utils/evolutionHelper";

function Badge(props) {
  return (
    <div className={styles.badgeContainer}>
      <img className={styles.badgeImg} src={props.src} alt={props.name} />
    </div>
  );
}

function EvolutionInfo(props) {
  const { id } = props;
  const [evolutions, setEvolutions] = useState([]);

  useEffect(() => {
    async function fethchDataFromApi() {
      const evolutionChain = await fetchEvolutionChain(id);
      const names = getAllSpeciesNames(evolutionChain);
      const urls = names.map((name) => {
        return `https://pokeapi.co/api/v2/pokemon/${name}`;
      });
      const data = await fetchMultipleData(urls);
      setEvolutions(data);
    }

    fethchDataFromApi();
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        {evolutions.map((evolution, index) => (
          <Badge
            key={index}
            src={evolution.sprites.other["official-artwork"].front_default}
          />
        ))}
      </div>
    </div>
  );
}

export default EvolutionInfo;
