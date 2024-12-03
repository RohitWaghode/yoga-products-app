import React from "react";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const respose = await fetch(`${process.env.BACKEND_BASE_URL}/products/list`);

  if (!respose?.ok) {
    throw new Error("An error while fetching products");
  }
  const products = await respose.json();
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
      {Array.isArray(products.output) &&
        products.output.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
