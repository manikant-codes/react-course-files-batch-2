import React from "react";
import styles from "../../../styles/home/counterRow.module.css";
import CountUp from "react-countup";

function Counter(props) {
  return (
    <div className={styles.counterContainer}>
      <h3>
        <CountUp end={props.number} />+
      </h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default Counter;
