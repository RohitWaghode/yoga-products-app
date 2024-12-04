import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto flex flex-items justify-between py-4">
        <div>
          <Link href={"/"}>
            <div className="flex items-center gap-1">
              <div className="relative">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/84/84145.png"
                  width={30}
                />
              </div>
              <span className="text-xl font-bold uppercase text-primary-500">
                Yoga Products
              </span>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href={"/blogs"}>
            <button className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">
              Blogs
            </button>
          </Link>
          <button className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">
            Add Blogs
          </button>
          <Link href={"/add-products"}>
            <button className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">
              Add Products
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
