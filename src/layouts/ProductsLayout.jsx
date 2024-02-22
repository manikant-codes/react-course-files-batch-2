import React from "react";
import ProductsNav from "./ProductsNav";
import { Outlet } from "react-router-dom";

function ProductsLayout() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
      <ProductsNav />
      <Outlet />
    </div>
  );
}

export default ProductsLayout;
