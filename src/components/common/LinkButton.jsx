import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/linkButton.module.css";

function LinkButton(props) {
  return (
    <Link to={props.href} className={styles.link}>
      {props.children}
    </Link>
  );
}

export default LinkButton;
