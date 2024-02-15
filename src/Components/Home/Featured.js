import React from "react";
import PageHeadings from "../PageHeadings";
import { BEER_IMAGE_1, BEER_IMAGE_2 } from "../../Utils/Constants";

const Featured = () => {
  return (
    <div className="bg-white mx-5 py-6 sm:py-8 lg:py-12">
      {/* Section heading */}
      <PageHeadings
        heading="Featured Beers"
        description="Explore our curated collection of craft beers from around the world. Find the perfect brew to satisfy your taste buds and elevate your beer-drinking experience."
      />

      {/* Image Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Image */}
        <div className="relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img
            src={BEER_IMAGE_1}
            alt="cheers"
            className="absolute inset-0 h-full w-full transition duration-200 hover:scale-110"
          />
          {/* Text Content */}
          <div className="relative flex flex-col">
            <span className="text-gray-300">Crafted at Home</span>
            <span className="text-lg font-semibold text-white lg:text-xl">
              Homebrew Kits
            </span>
          </div>
        </div>
        <div className="relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img
            src={BEER_IMAGE_2}
            alt="cheers"
            className="absolute inset-0 h-full w-full transition duration-200 hover:scale-110"
          />
          <div className="relative flex flex-col">
            <span className="text-gray-300">Crafted at Home</span>
            <span className="text-lg font-semibold text-white lg:text-xl">
              Homebrew Kits
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
