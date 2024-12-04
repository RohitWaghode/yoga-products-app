import React from "react";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl py-8">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="billboard"
          className="h-72 w-full rounded-lg"
        />
        <h3 className="absolute left-10 top-1/2 w-full max-w-3xl -translate-y-1/2 text-5xl font-semibold tracking-tight text-white">
          Yoga is the journey of the self, through the self, to the self.
        </h3>
      </div>
    </div>
  );
};

export default Banner;
