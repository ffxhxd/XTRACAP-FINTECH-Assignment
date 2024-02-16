import React, { useEffect, useState } from "react";
import PageHeadings from "../PageHeadings";
import { BEER_API_URL } from "../../Utils/Constants";
import Loading from "../Loading";
import ScrollToTop from "./ScrollToTop";
import BeerGrid from "./BeerGrid";

const Explore = () => {
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    getCardData();
  }, [page]);

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

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="bg-white py-2 sm:py-3 lg:py-5">
      {/* Scroll to Top button */}
      <ScrollToTop />

      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Page headings */}
        <PageHeadings
          heading="Discover Our Beer Collection"
          description="Explore a diverse selection of premium beers. From craft brews to classics, find the perfect brew to elevate your taste experience."
        />

        {/* Beer cards grid */}
        <BeerGrid cardData={cardData} />
      </div>

      {/* Loading spinner */}
      {loading && <Loading />}
    </div>
  );
};

export default Explore;
