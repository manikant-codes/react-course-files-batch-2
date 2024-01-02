import React from "react";
import CharacterCard from "../components/shinchanFandom/CharacterCard";
import { characters } from "../data/data";
import styles from "../styles/shinchanFandom.module.css";
import Layout from "../layout/Layout";

function ShinchanFandom() {
  console.log(styles);
  return (
    <Layout>
      <div className={styles.container}>
        {characters.map(function (character, index, array) {
          return (
            <CharacterCard
              key={index}
              imgURL={character.imgURL}
              name={character.name}
              description={character.description}
              info={character.info}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default ShinchanFandom;
