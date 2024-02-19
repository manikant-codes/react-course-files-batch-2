import React from "react";
import Faq from "./Faq";
import Title from "../../common/Title";
import styles from "../../../styles/home/faqsRow.module.css";

function FaqsRow() {
  return (
    <div className={styles.faqsRowContainer}>
      <Title
        title="FAQs"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
          nam?"
      />
      <div className={styles.faqsRowInnerContainer}>
        <Faq
          que="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
          nam?"
          ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum debitis
          delectus odit, sit, voluptates amet rerum culpa doloribus, corrupti
          architecto atque corporis dolorem dignissimos eaque nostrum! Hic impedit
          culpa eveniet!"
        />
        <Faq
          que="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
          nam?"
          ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum debitis
          delectus odit, sit, voluptates amet rerum culpa doloribus, corrupti
          architecto atque corporis dolorem dignissimos eaque nostrum! Hic impedit
          culpa eveniet!"
        />
      </div>
    </div>
  );
}

export default FaqsRow;
