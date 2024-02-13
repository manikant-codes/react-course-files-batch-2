import React from "react";
import styles from "../../../styles/pokemonDetails/basicInfo.module.css";

function DetailsTable(props) {
  const { height, weight, abilities } = props;
  const strAbilities = abilities.map((item) => item.ability?.name).join(", ");
  return (
    <table className={styles.tableContainer}>
      <tbody>
        <tr>
          <td>
            <p>Height</p>
            <p>{height}</p>
          </td>
          <td>
            <p>Weight</p>
            <p>{weight}</p>
          </td>
        </tr>
        <tr>
          <td style={{ alignSelf: "flex-start" }}>
            <p>Abilities</p>
            <p>{strAbilities}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default DetailsTable;
