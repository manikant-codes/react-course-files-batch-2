import React from "react";
import { useParams } from "react-router-dom";
import ProductsNav from "../layouts/ProductsNav";

function ProductDetails() {
  const params = useParams();
  return (
    <div>
      <h1>Product {params.id} Details</h1>
    </div>
  );
}

export default ProductDetails;
