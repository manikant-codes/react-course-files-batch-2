import React from "react";
import Chip from "./Chip";
import styles from "../../../styles/pokemonDetails/moreInfo.module.css";

function Types(props) {
  const types = props.types.map((value) => {
    return value.type.name;
  });

  return (
    <div className={styles.typesContainer}>
      <h2>Types</h2>
      <div className={styles.typesInnerContainer}>
        {types.map((value, index) => {
          return <Chip key={index} title={value} />;
        })}
      </div>
    </div>
  );
}

export default Types;
