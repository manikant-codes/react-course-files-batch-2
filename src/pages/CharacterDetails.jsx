import React from "react";
import CharacterImage from "../components/characterDetails/CharacterImage";
import CharacterInfoTable from "../components/characterDetails/CharacterInfoTable";
import CharacterTitleDescription from "../components/characterDetails/CharacterTitleDescription";
import { characters } from "../data/data";
import styles from "../styles/characterDetails.module.css";

function CharacterDetails() {
  const path = window.location.pathname.split("/")[2];

  const character = characters.find(function (value, index, array) {
    return value.link === path;
  });

  return (
    <div className={styles.container}>
      <div>
        <CharacterTitleDescription
          name={character.name}
          description={character.description}
        />
      </div>
      <div>
        <CharacterImage imgURL={character.imgURL} />
        <CharacterInfoTable info={character.info} />
      </div>
    </div>
  );
}

export default CharacterDetails;
