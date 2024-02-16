import React from "react";
import styles from "../../../styles/home/productsRow.module.css";

function ProductCard(props) {
  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCardImgContainer}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.productCardDescContainer}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
