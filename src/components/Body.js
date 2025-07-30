import { useEffect, useState } from "react";
import Restaurant from "./Resaurant";
// import Shimmer from "./Shimmer";

const Body = () => {
  const [reastaurantList, setRestaurantList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=16.706369&lng=74.2481772&carousel=true&third_party_vendor=1"
    );
    // https://corsproxy.io/?  use this before url 

    const json = await data.json();

   // Using [4] works only if that card always stays at index 4. A more stable way is to dynamically find it using the card ID
    const restaurantCard = json?.data?.cards?.find((c) =>
      c?.card?.card?.id?.includes("restaurant_grid_listing")
    );
    const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

     console.log(restaurants);
     
    setRestaurantList(restaurants)
  };

  //  return  reastaurantList.length ===0 ?(
  //   <Shimmer/>
  //  ):
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const restroList = reastaurantList.filter(
              (res) => res?.info?.avgRating >= 4
            );
            setRestaurantList(restroList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restro-container">
        {reastaurantList.map((restaurant) => (
          <Restaurant key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
