import React from "react";
import Stats from "./Stats";
import Types from "./Types";
import styles from "../../../styles/pokemonDetails/moreInfo.module.css";

function MoreInfo(props) {
  return (
    <div className={styles.container}>
      <Stats stats={props.stats} />
      <Types types={props.types} />
    </div>
  );
}

export default MoreInfo;
