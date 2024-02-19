import React from "react";
import ProductCard from "./ProductCard";
import Title from "../../common/Title";
import styles from "../../../styles/home/productsRow.module.css";

function ProductsRow() {
  return (
    <div className={styles.productsRowContainerOuter}>
      <Title
        title="Our Products"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quam."
      />
      <div className={styles.productsRowContainerInner}>
        <ProductCard
          src="/images/04.jpg"
          title="Product 1"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellendus."
        />
        <ProductCard
          src="/images/05.jpg"
          title="Product 2"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellendus."
        />
        <ProductCard
          src="/images/06.jpg"
          title="Product 3"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellendus."
        />
        <ProductCard
          src="/images/07.jpg"
          title="Product 4"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellendus."
        />
      </div>
    </div>
  );
}

export default ProductsRow;
