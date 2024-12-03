import Baner from "@/components/Baner";
import React from "react";
import ProductList from "./components/ProductList";

const Page = async () => {
  const respose = await fetch(`${process.env.BACKEND_BASE_URL}/products/list`);

  if (!respose?.ok) {
    console.log("An error while fetching products");
  }
  const products = await respose.json();
  console.log("output", products);

  return (
    <div>
      <Baner />
      <ProductList products={products} />
    </div>
  );
};

export default Page;
