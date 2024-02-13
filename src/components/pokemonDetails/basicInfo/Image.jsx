import React from "react";
import styles from "../../../styles/pokemonDetails/basicInfo.module.css";

function Image(props) {
  const { img, name } = props;
  return (
    <div className={styles.imageContainer}>
      <img src={img} alt={name} className={styles.image} />
    </div>
  );
}

export default Image;
