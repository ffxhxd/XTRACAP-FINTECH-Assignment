import { useEffect, useState } from "react";
import { SEARCH_BEER_API_URL } from "./Constants";

// Custom hook for searching beer data based on the provided query
const useSearchBeer = (query) => {
  // State to store the fetched beer data
  const [beerData, setBeerData] = useState(null);

  // Function to fetch beer data based on the query
  const fetchData = async () => {
    try {
      // Check if the query is not empty before making the request
      if (query.trim() !== "") {
        const data = await fetch(SEARCH_BEER_API_URL + query);
        const json = await data.json();
        // Update the state with the fetched beer data
        setBeerData(json);
      }
    } catch (e) {}
  };

  // useEffect hook to perform the fetch operation when the query changes
  useEffect(() => {
    // Debouncing: Set a timer to delay the fetch operation by 200 milliseconds
    const timer = setTimeout(() => fetchData(), 200);

    // Cleanup: Clear the timer if the component unmounts or the query changes
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  // Return the fetched beer data to be used in the component
  return beerData;
};

export default useSearchBeer;
