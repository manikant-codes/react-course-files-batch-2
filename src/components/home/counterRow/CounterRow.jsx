import React from "react";
import Counter from "./Counter";
import styles from "../../../styles/home/counterRow.module.css";
import Title from "../../common/Title";

function CounterRow() {
  const data = [
    { number: 100, desc: "Lorem ipsum dolor sit amet." },
    { number: 200, desc: "Lorem ipsum dolor sit amet." },
    { number: 300, desc: "Lorem ipsum dolor sit amet." },
    { number: 400, desc: "Lorem ipsum dolor sit amet." },
  ];

  const components = data.map(function (value, index) {
    return <Counter key={index} number={value.number} desc={value.desc} />;
  });

  return (
    <div className={styles.counterRowContainerOuter}>
      <Title
        title="Our Journey So Far"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, suscipit."
      />
      <div className={styles.counterRowContainerInner}>{components}</div>
    </div>
  );
}

export default CounterRow;
