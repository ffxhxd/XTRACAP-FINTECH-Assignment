import React, { useEffect, useState } from "react";
import BeerCard from "./BeerCard";
import PageHeadings from "../PageHeadings";
import { BEER_API_URL } from "../../Utils/Constants";
import { FaArrowUp } from "react-icons/fa";
import Loading from "../Loading";

const Explore = () => {
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Function to fetch beer data from the API
  const getCardData = async () => {
    try {
      const res = await fetch(BEER_API_URL + `?page=${page}&per_page=12`);
      const data = await res.json();
      setCardData((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching beer data:", error);
    }
  };

  // Fetch initial data on component mount
  useEffect(() => {
    getCardData();
  }, [page]);

  // Function to handle infinite scroll
  const handleInfiniteScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error handling infinite scroll:", error);
    }
  };

  // Add event listener for infinite scroll on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  // Function to scroll to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white py-2 sm:py-3 lg:py-5">
      {/* Scroll-to-top button */}
      <div
        onClick={handleScrollToTop}
        className="fixed right-8 bg-indigo-800 p-2 rounded-full bottom-8 cursor-pointer z-10 hover:scale-110"
      >
        <FaArrowUp className="animate-pulse" fill="white" size={40} />
      </div>

      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Page headings */}
        <PageHeadings
          heading=" Discover Our Beer Collection"
          description=" Explore a diverse selection of premium beers. From craft brews to
          classics, find the perfect brew to elevate your taste experience."
        />

        {/* Grid of beer cards */}
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {cardData.map((curr) => (
            <BeerCard key={curr.id} beerdata={curr} />
          ))}
        </div>
      </div>

      {/* Loading indicator */}
      {loading && <Loading />}
    </div>
  );
};

export default Explore;
