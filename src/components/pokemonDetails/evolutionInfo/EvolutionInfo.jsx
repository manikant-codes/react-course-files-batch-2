import React, { useEffect, useState } from "react";
import {
  fetchEvoulutionChain,
  fetchMultipleData,
} from "../../../services/apiServices";
import styles from "../../../styles/pokemonDetails/evolutionInfo.module.css";
import { getAllSpeciesNames } from "../../../utils/evolutionHelper";

function Badge(props) {
  return (
    <div className={styles.badgeContainer}>
      <img src={props.src} alt={props.name} className={styles.badgeImage} />
    </div>
  );
}

function EvolutionInfo(props) {
  const [evolutions, setEvolutions] = useState([]);

  useEffect(() => {
    async function fethchDataFromApi() {
      const evolutionChain = await fetchEvoulutionChain(props.id);
      const names = getAllSpeciesNames(evolutionChain);
      const urls = names.map((name) => {
        return `https://pokeapi.co/api/v2/pokemon/${name}`;
      });
      const data = await fetchMultipleData(urls);
      setEvolutions(data);
    }
    fethchDataFromApi();
  }, [props.id]);

  return (
    <div className={styles.evolutionContainer}>
      <div className={styles.evolutionInnerContainer}>
        {evolutions.map((value, index) => (
          <Badge
            key={index}
            src={value.sprites.other["official-artwork"].front_default}
          />
        ))}
      </div>
    </div>
  );
}

export default EvolutionInfo;
