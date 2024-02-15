import { useEffect, useState } from "react";
import { SINGLE_BEER_API_URL } from "./Constants";

const useSingleBeer = (id) => {
  const [beerData, setBeerData] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetch(SINGLE_BEER_API_URL + id);
      const json = await data.json();
      setBeerData(json);
    } catch (e) {
      // console.log(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return beerData;
};

export default useSingleBeer;
