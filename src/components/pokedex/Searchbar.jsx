import React from "react";
import { fetchData } from "../../services/apiServices";
import styles from "../../styles/pokedex/searchbar.module.css";

function Searchbar(props) {
  function handleChange(e) {
    props.setQuery(e.target.value);
    if (e.target.value === "") {
      props.setSearchResult(null);
    }
  }

  async function handleSearch() {
    const data = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${props.query}`
    );
    props.setSearchResult(data);
  }

  return (
    <nav className={styles.nav}>
      <input
        className={styles.input}
        type="text"
        placeholder="Name or Number"
        onChange={handleChange}
      />
      <button className={styles.btn} onClick={handleSearch}>
        Search
      </button>
    </nav>
  );
}

export default Searchbar;
