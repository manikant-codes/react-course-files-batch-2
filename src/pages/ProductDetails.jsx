import React from "react";
import { useLocation, useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  const location = useLocation();
  console.log("location", location);
  return (
    <div>
      <h1>Product {params.id} Details</h1>
    </div>
  );
}

export default ProductDetails;
