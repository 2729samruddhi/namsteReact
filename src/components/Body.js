import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//import Shimmer from "./Shimmer";


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=16.706369&lng=74.2481772&carousel=true&third_party_vendor=1"
    );
    // https://corsproxy.io/?  use this before url

    const json = await data.json();
    
    const cards = json?.data?.cards;
    const restaurantCard = cards?.find((c) => c?.card?.card?.id?.includes("restaurant_grid_listing") );
    const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (restaurants && Array.isArray(restaurants)) {
      const names = restaurants
        .map((res) => res?.info?.name)
        .filter((name) => typeof name === "string");
      console.log("Restaurant names:", names);
      setRestaurantList(restaurants);
      setFilteredRestroList(restaurants);
    }
  };
   
  if(onlineStatus === false) return <h1>Looks Like a You're offline! Please check your Network!</h1>
    

  //  return  restaurantList.length ===0 ?(
  //   <Shimmer/>
  //  ):
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const restroList = restaurantList.filter(
              (res) => res?.info?.avgRating >= 4
            );
            setFilteredRestroList(restroList); // ✅ update display list
          }}
        >
          Top Rated Restaurant
        </button>

        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="search-btn"
            onClick={() => {
              console.log("button clicked");
              const filterdList = restaurantList.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestroList(filterdList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restro-container">
        {filteredRestroList.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/city/kolhapur/"+restaurant?.info?.id }>
         <Restaurant  resData={restaurant} /> 
         </Link>
        ))}
      </div>
    </div>
  );
};



export default Body;
