import Baner from "@/components/Baner";
import React, { Suspense } from "react";
import ProductList from "./components/ProductList";

const Page = async () => {
  return (
    <div>
      <Baner />
      <ProductList />
    </div>
  );
};

export default Page;
