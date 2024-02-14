import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/pokedex/pokemonCard.module.css";
import { getTagBackgroundColor } from "../../utils/tagsHelper";

function PokemonCard(props) {
  const { image, name, tags } = props;

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/pokemon/${name}`);
  }

  return (
    <div className={styles.cardContainerStyles} onClick={handleClick}>
      <div className={styles.imageContainerStyles}>
        <img src={image} alt={name} className={styles.imageStyles} />
      </div>
      <h2 className={styles.nameStyles}>{name}</h2>
      <div className={styles.tagsStyles}>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={styles.tagStyles}
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
