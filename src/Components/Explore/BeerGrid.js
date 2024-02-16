import React from "react";
import BeerCard from "./BeerCard";

const BeerGrid = ({ cardData }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
      {cardData.map((curr) => (
        <BeerCard key={curr.id} beerdata={curr} />
      ))}
    </div>
  );
};

export default BeerGrid;
