import React, { useEffect, useState } from "react";
import FavouriteBeerCard from "./FavouriteBeerCard";
import PageHeadings from "../PageHeadings";
import EmptyFavourites from "./EmptyFavourites";

const FavouritesPage = () => {
  // State for storing favorite beers
  const [favourites, setFavourites] = useState([]);

  // Fetch favorites from local storage on component mount
  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  // Handler for removing a beer from favorites
  const handleRemoveFromFavourites = (id) => {
    const updatedFavourites = favourites.filter((fav) => fav.id !== id);
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  // If there are no favorites, render the empty state
  if (favourites.length === 0) {
    return <EmptyFavourites />;
  }

  // Render the favorites list
  return (
    <div className="bg-white py-1 sm:py-3 lg:py-5">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div>
          {/* Page headings */}
          <PageHeadings
            heading="Your Favorites"
            description="Explore your selected beers. Dive into a collection of your favorite
          brews, carefully chosen to satisfy your taste buds and enhance your
          beer experience."
          />
        </div>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {/* Render each favorite beer card */}
          {favourites.map((curr) => (
            <FavouriteBeerCard
              key={curr.id}
              favouritesData={curr}
              onRemove={handleRemoveFromFavourites}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;
