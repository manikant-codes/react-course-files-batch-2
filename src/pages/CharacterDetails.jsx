import React from "react";
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
        <h2>{character.name}</h2>
        <p>{character.description}</p>
      </div>
      <div>
        <div>
          <img src={character.imgURL} alt="" />
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
