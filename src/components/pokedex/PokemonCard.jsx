import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/pokedex/pokemonCard.module.css";
import { getTagBackgroundColor } from "../../utils/tagHelper";

function PokemonCard({ image, name, tags }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/pokemon/${name}`);
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={styles.tag}
            style={{
              backgroundColor: getTagBackgroundColor(tag.toLowerCase()),
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
