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
          src="/images/01.jpg"
          title="Product 1"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellendus."
        />
        <ProductCard
          src="/images/02.jpg"
          title="Product 1"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellendus."
        />
        <ProductCard
          src="/images/03.jpg"
          title="Product 1"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellendus."
        />
        <ProductCard
          src="/images/01.jpg"
          title="Product 1"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellendus."
        />
      </div>
    </div>
  );
}

export default ProductsRow;
