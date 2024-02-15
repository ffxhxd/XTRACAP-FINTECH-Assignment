import React from "react";
import { Link } from "react-router-dom";

const EmptyFavourites = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[80vh] gap-10">
      <h1 className="font-bold text-3xl text-center tracking-wide">
        You have no favorites 😭
      </h1>
      <div className="flex gap-6 items-center justify-center">
        <Link
          className="px-8 py-3 rounded-md font-medium bg-indigo-900 hover:bg-indigo-800 text-white"
          to="/explore"
        >
          Start Adding
        </Link>
      </div>
    </div>
  );
};

export default EmptyFavourites;
