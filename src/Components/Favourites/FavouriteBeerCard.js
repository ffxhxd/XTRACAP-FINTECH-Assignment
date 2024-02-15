import React from "react";

const FavouriteBeerCard = (props) => {
  // Destructure data from props
  const { first_brewed, image_url, name, ph, id } = props.favouritesData;

  // Handler function for removing the beer from favorites
  const handleRemoveClick = () => {
    props.onRemove(id);
  };

  return (
    <div>
      {/* Beer image container */}
      <div className="flex items-center justify-center group relative mb-2 h-72 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
        {/* Beer image */}
        <img
          src={image_url}
          alt={`${name}`}
          className="w-12 object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </div>

      {/* Beer information and remove button */}
      <div className="flex items-start justify-between gap-2 px-2">
        <div className="flex flex-col">
          {/* Beer name */}
          <div className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
            {name}
          </div>
          {/* First Brewed information */}
          <span className="text-gray-500 mt-2">
            First Brewed: {first_brewed}
          </span>
        </div>

        <div className="flex flex-col items-end">
          {/* PH value */}
          <span className="font-bold text-gray-600 text-sm">PH: {ph}</span>

          {/* Remove button */}
          <button
            onClick={handleRemoveClick}
            className="mt-2 text-sm py-2 px-3 font-semibold rounded-sm bg-red-600 hover:bg-red-500 focus:outline-none focus:ring focus:border-indigo-300"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteBeerCard;
