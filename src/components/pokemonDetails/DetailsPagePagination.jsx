import React from "react";
import styles from "../../styles/pokemonDetails/detailsPagePagination.module.css";

function DetailsPagePagination(props) {
  const { number, setName } = props;

  function handlePrev() {
    if (number > 1) {
      setName(number - 1);
    } else {
      setName(1025);
    }
  }
  function handleNext() {
    if (number < 1025) {
      setName(number + 1);
    } else {
      setName(1);
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default DetailsPagePagination;
