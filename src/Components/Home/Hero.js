import React from "react";
import heroImage from "../../Assets/heroImage.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col justify-around gap-6 sm:gap-10 md:gap-3 lg:flex-row">
      {/* Text Content */}
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
          Explore Our Exquisite Beer Collection
        </p>
        <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
          Elevate Your Beer Experience with Us
        </h1>
        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
          Discover a wide selection of premium beers curated just for you. Our
          online store brings you the finest brews from around the world,
          providing a revolutionary way to enjoy the best beers at your
          convenience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <Link
            to="/explore"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Explore Now
          </Link>
          <button className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
            Learn More
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="lg:h-auto xl:w-5/12">
        <img
          src={heroImage}
          alt="Beer Bottle"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
