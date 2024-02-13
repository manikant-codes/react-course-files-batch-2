import React from "react";
import Title from "./Title";
import Image from "./Image";
import Details from "./Details";
import styles from "../../../styles/pokemonDetails/basicInfo.module.css";

function BasicInfo(props) {
  const { data } = props;

  if (!data) return null;

  const {
    id,
    name,
    sprites: {
      other: {
        "official-artwork": { front_default },
      },
    },
    height,
    weight,
    abilities,
  } = data;

  return (
    <div className={styles.container}>
      <Title id={id} name={name} />
      <div className={styles.innerContainer}>
        <Image name={name} img={front_default} />
        <Details height={height} weight={weight} abilities={abilities} />
      </div>
    </div>
  );
}

export default BasicInfo;
