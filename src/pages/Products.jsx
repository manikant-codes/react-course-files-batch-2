import React from "react";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });

  console.log("searchParams", Array.from(searchParams.keys()));

  return (
    <div>
      <h1>All Products</h1>
      <input
        type="text"
        value={searchParams.get("n")}
        onChange={function (e) {
          setSearchParams({ n: e.target.value });
        }}
      />
    </div>
  );
}

export default Products;
