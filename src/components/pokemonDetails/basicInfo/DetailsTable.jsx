import React from "react";
import styles from "../../../styles/pokemonDetails/basicInfo.module.css";

function DetailsTable(props) {
  const { height, weight, abilities } = props;
  const strAbilities = abilities.map((item) => item.ability?.name).join(", ");

  return (
    <div className={styles.tableContainer}>
      <div>
        <p>Height</p>
        <p>{height}</p>
      </div>
      <div>
        <p>Weight</p>
        <p>{weight}</p>
      </div>
      <div>
        <p>Abilities</p>
        <p>{strAbilities}</p>
      </div>
    </div>
  );
}

export default DetailsTable;
