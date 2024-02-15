import React from "react";
import styles from "../styles/layouts/footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <p>&copy; Copyright 2024. All rights Reserved.</p>
      </div>
      <ul className={styles.links}>
        <li>Privacy Policy</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Footer;
