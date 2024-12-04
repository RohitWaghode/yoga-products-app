"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const [products, setProducts] = useState([]);

  const handleDelete = async (_id) => {
    const response = await fetch(
      `${process.env.BACKEND_BASE_URL}/products/delete/${_id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      setProducts(products.filter((prod) => prod._id !== _id));
      alert("Product deleted successfully");
    } else {
      const data = await response.json();
      throw new Error(data.message);
    }
  };
  return (
    <div className="flex gap-5 border py-5 shadow-md rounded">
      <Image
        src={
          "data:image/jpeg;base64,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"
        }
        alt={product.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "12rem" }}
      />
      <div>
        <h2 className="line-clamp-2 text-xl font-bold text-primary-600 text-balance">
          {product.title}
        </h2>
        <p className="font-bold mt-2">₹ : {product.price}</p>
        <Link
          href={`/product/${product._id}`}
          className="py-1 px-2 rounded border border-primary-500 mt-5 inline-block text-primary-500 font-medium text-sm 
          hover:border-primary-100 hover:bg-primary-100 "
        >
          Read More
        </Link>
        <button
          className="py-1 px-4 m-2 rounded border border-primary-500 mt-5 inline-block text-primary-500 font-medium text-sm 
          hover:border-primary-100 hover:bg-primary-100"
          onClick={() => handleDelete(product._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
