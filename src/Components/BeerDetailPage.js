import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import useSingleBeer from "../Utils/useSingleBeer";
import Loading from "./Loading";

const BeerDetailPage = () => {
  const { id } = useParams();
  const data = useSingleBeer(id);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 mx-auto max-w-screen-lg px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center group relative h-[50vh] md:h-screen overflow-hidden bg-gray-100">
            <img
              src={data[0].image_url}
              alt="beer bottle"
              className="w-16 md:w-32 transition duration-200 group-hover:scale-110 mx-auto"
            />
          </div>
        </div>
        <div className="md:py-8">
          <div className="mb-2 md:mb-3">
            <span className="mb-0.5 inline-block text-gray-500">
              {data[0].name}
            </span>
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              {data[0].tagline}
            </h2>
          </div>
          <div className="mb-6 flex items-center md:mb-10">
            <div className="-ml-1 flex gap-0.5">
              {[...Array(4)].map((_, index) => (
                <AiFillStar key={index} className="h-6 w-6 text-yellow-400" />
              ))}
              <AiFillStar className="h-6 w-6 text-gray-300" />
            </div>
            <span className="ml-2 text-sm text-gray-500">4.2</span>
            <div className="ml-4 text-sm font-semibold text-indigo-500 hover:text-indigo-600 active:text-indigo-700">
              view all 47 reviews
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-gray-800 md:text-2xl">
                $15.00
              </span>
              <span className="mb-0.5 text-red-500 line-through">$30.00</span>
            </div>
            <span className="text-sm text-gray-500">
              incl. VAT plus shipping
            </span>
          </div>
          <div className="mb-6 flex items-center gap-2 text-gray-500">
            <FaShippingFast size={28} />
            <span className="text-sm">2-4 day shipping</span>
          </div>
          <div className="flex gap-2.5">
            <Link
              to="#"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white transition duration-100 hover:bg-indigo-600 md:text-base"
            >
              Add to cart
            </Link>
            <Link
              to="/explore"
              className="inline-block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-semibold text-white transition duration-100 hover:bg-gray-600 md:text-base"
            >
              Explore
            </Link>
          </div>
          <div className="mt-10 md:mt-16 lg:mt-20">
            <div className="mb-3 text-lg font-semibold text-gray-800">
              Description
            </div>
            <p className="text-gray-500">{data[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerDetailPage;
