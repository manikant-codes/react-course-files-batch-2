import React from "react";
import styles from "../styles/layouts/navbar.module.css";

function Navbar() {
  console.log("styles", styles);
  return (
    <div className={styles.container}>
      <div>
        <h1>Pkodex</h1>
      </div>
      <ul className={styles.links}>
        <li>Home</li>
        <li>Pokekex</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
