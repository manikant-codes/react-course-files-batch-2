import React, { useState } from "react";
import styles from "../../../styles/home/faqsRow.module.css";
function Faq(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function onExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqQuestionContainer}>
        <i className="fa-solid fa-question"></i>
        <p>{props.que}</p>
        <i
          className="fa-solid fa-angle-up"
          onClick={onExpand}
          style={{
            transition: "all 300ms linear",
            rotate: isExpanded ? "0deg" : "180deg",
            cursor: "pointer",
          }}
        ></i>
      </div>

      <p
        style={{
          maxHeight: isExpanded ? "300px" : "0px",
          overflow: "hidden",
          transition: "all 300ms linear",
        }}
      >
        {props.ans}
      </p>
    </div>
  );
}

export default Faq;
