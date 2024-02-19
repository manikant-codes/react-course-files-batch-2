import React from "react";
import styles from "../styles/layouts/navbar.module.css";

function Navbar() {
  console.log("styles", styles);
  return (
    <div className={styles.container}>
      <div>
        <h1>Pokedex</h1>
      </div>
      <ul className={styles.links}>
        <li>Home</li>
        <li>Pokedex</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
