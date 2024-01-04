import React from "react";
import styles from "../../styles/shinchanFandomCard.module.css";
import { Link } from "react-router-dom";
import LinkButton from "../common/LinkButton";
// import InfoTable from "./InfoTable";

function CharacterCard(props) {
  console.log("styles", styles);
  return (
    <div className={styles.container}>
      {/* Image */}
      <img src={props.imgURL} alt={props.name} className={styles.cardImage} />
      <div className={styles.cardInfoContainer}>
        {/* Title */}
        <h3 style={{ fontSize: "1.5rem" }}>{props.name}</h3>
        {/* Description */}
        <p className={styles.cardDescription}>{props.description}</p>
        {/* Info */}
        {/* <InfoTable rows={props.info} /> */}
        {/* Link */}
        <LinkButton href={"/character/" + props.link}>More Info...</LinkButton>
      </div>
    </div>
  );
}

export default CharacterCard;
