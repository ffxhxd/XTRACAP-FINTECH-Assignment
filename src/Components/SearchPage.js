import React, { useState } from "react";
import PageHeadings from "./PageHeadings";
import { CiSearch } from "react-icons/ci";
import useSearchBeer from "../Utils/useSearchBeer";
import BeerCard from "./Explore/BeerCard";

const SearchPage = () => {
  // State for the search query and beer data
  const [query, setQuery] = useState("");
  const beerData = useSearchBeer(query);

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Page headings */}
      <div className="pt-1 md:pt-16">
        <PageHeadings
          heading="Find Your Perfect Brew in Our Selection of 1000+ Beers"
          description="Discover over 1000 carefully curated craft beers. Find your perfect brew with our diverse selection, offering something for every palate. Cheers to a world of flavors waiting to be explored!"
        />
      </div>

      {/* Search form */}
      <form className="max-w-md mx-auto p-4 md:p-0" onSubmit={onSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <CiSearch size={20} fill="gray" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-md bg-gray-50 mb-2"
            placeholder="Search Beers"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </div>
      </form>

      {/* Display beer cards or no results message */}
      {beerData && beerData.length > 0 ? (
        <div className="px-8 py-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {beerData.map((curr) => (
            <BeerCard key={curr.id} beerdata={curr} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-4 text-gray-500 h-[50vh]">
          No beers found. Try a different search.
        </p>
      )}
    </>
  );
};

export default SearchPage;
