import React from "react";
import styles from "../../styles/pokedex/pagination.module.css";

function Pagination(props) {
  function handleNext() {
    props.setPage(function (p) {
      return ++p;
    });
  }

  function handlePrev() {
    props.setPage(function (p) {
      if (p > 0) {
        return --p;
      } else {
        return 0;
      }
    });
  }
  return (
    <div className={styles.container}>
      <button onClick={handlePrev}>Perv</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Pagination;
