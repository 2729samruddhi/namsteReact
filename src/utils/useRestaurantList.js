import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [restList, setResList] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    try {
      const res = await fetch("/.netlify/functions/restaurants");
      const json = await res.json();

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setResList(restaurants || []);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
    }
  };

  return restList;
};

export default useRestaurantList;
