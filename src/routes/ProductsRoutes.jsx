import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsLayout from "../layouts/ProductsLayout";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import ProductsNew from "../pages/ProductsNew";
import NotFound from "../pages/NotFound";

function ProductsRoutes() {
  return (
    <Routes>
      <Route element={<ProductsLayout />}>
        <Route index element={<Products />} />
        <Route path=":id" element={<ProductDetails />} />
        <Route path="new" element={<ProductsNew />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default ProductsRoutes;
