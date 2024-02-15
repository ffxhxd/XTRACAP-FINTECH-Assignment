import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BeerCard = (props) => {
  // Destructure beer data from props
  const { name, first_brewed, description, image_url, id, ph } = props.beerdata;

  // State to track whether the beer is in favorites
  const [isInFavourites, setIsInFavourites] = useState(false);

  // Check if the beer is already in favorites when the component mounts
  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isAlreadyInFavourites = favourites.some((beer) => beer.id === id);
    setIsInFavourites(isAlreadyInFavourites);
  }, [id]);

  // Handler for adding the beer to favorites
  const handleAddToFavourites = () => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isAlreadyInFavourites = favourites.some((beer) => beer.id === id);

    if (!isAlreadyInFavourites) {
      favourites.push({ id, name, first_brewed, description, image_url, ph });
      localStorage.setItem("favourites", JSON.stringify(favourites));
      setIsInFavourites(true);
    } else {
      // Notify user if the beer is already in favorites
      const notify = () => toast.warning("Already in Favourites");
      notify();
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
      {/* Beer image container */}
      <div className="flex flex-col items-center justify-center group relative h-48 overflow-hidden bg-gray-100 md:h-52">
        {/* Beer image */}
        <img
          src={image_url}
          alt="beer bottle"
          className="w-12 transition duration-200 group-hover:scale-110 mx-auto"
        />
      </div>

      {/* Beer details */}
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        {/* Beer name */}
        <div className="mb-2 text-lg font-semibold text-gray-800">
          <div className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">
            {name}
          </div>
        </div>

        {/* Beer description */}
        <p className="mb-4 text-sm text-gray-500 truncate">{description}</p>

        {/* First Brewed information */}
        <div className="mt-auto flex items-end justify-between">
          <div className="flex items-center gap-2">
            <div>
              <span className="block text-indigo-500">First Brewed</span>
              <span className="block text-sm text-gray-400">
                {first_brewed}
              </span>
            </div>
          </div>

          {/* Button to add to favorites */}
          <div className="flex items-center justify-center gap-2">
            <Link
              to={`/details/${id}`}
              className="rounded border px-2 py-2 text-sm bg-indigo-700 font-medium text-white hover:bg-indigo-600"
            >
              Details
            </Link>
            <button
              onClick={handleAddToFavourites}
              className="rounded border px-2 py-1 text-sm bg-red-200 font-medium text-white "
            >
              <FaHeart
                className="hover:scale-110"
                fill={isInFavourites ? "red" : "white"}
                size={26}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default BeerCard;
