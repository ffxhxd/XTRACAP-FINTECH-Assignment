import { useEffect, useState } from "react";
import { SINGLE_BEER_API_URL } from "./Constants";

// Custom hook for fetching data of a single beer by ID
const useSingleBeer = (id) => {
  // State to store the fetched beer data
  const [beerData, setBeerData] = useState(null);

  // Function to fetch data of a single beer based on the provided ID
  const fetchData = async () => {
    try {
      // Fetch data from the specified API endpoint with the provided ID
      const data = await fetch(SINGLE_BEER_API_URL + id);
      const json = await data.json();
      // Update the state with the fetched beer data
      setBeerData(json);
    } catch (e) {}
  };

  // useEffect hook to perform the initial fetch operation when the component mounts
  useEffect(() => {
    fetchData();
  }, [id]); // Dependency on 'id' to re-fetch data when the ID changes

  // Return the fetched beer data to be used in the component
  return beerData;
};

export default useSingleBeer;
