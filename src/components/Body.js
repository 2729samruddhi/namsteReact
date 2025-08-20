import { useContext, useEffect, useState } from "react";
import Restaurant, { withPromotedLabel } from "./Restaurant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContexts from "../utils/UserContexts";

//import Shimmer from "./Shimmer";


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const {setUserName,loggedInUser} = useContext(UserContexts);
  const RestaurantCardPromoted = withPromotedLabel(Restaurant);
 
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
   //console.log("body rendered...",restaurantList);
    

  if(onlineStatus === false) return <h1>Looks Like a You're offline! Please check your Network!</h1>
    

  //  return  restaurantList.length ===0 ?(
  //   <Shimmer/>
  //  ):
  return (
    <div className="body">
      <div className="flex mt-5 gap-10">
        <button
          className="px-4 ml-5 py-2 bg-fuchsia-200 items-center rounded-lg font-semibold hover:bg-fuchsia-300 transition"
          onClick={() => {
            const restroList = restaurantList.filter(
              (res) => res?.info?.avgRating >= 4
            );
            setFilteredRestroList(restroList); 
          }}
        >
          Top Rated Restaurant
        </button>

        <div className="gap-2 flex">
          <input
            type="text"
            className="bg-slate-100 px-20 py-2 rounded-lg w-90 focus:outline-none focus:ring-2 focus:ring-orange-200"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-5 py-2 rounded-lg bg-green-400 ml-3 text-md font-semibold items-center hover:bg-green-200 transition"
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

        <div className="gap-2">
          <label>User:</label>
            <input
            type="text"
            className="bg-slate-100 px-20 py-2 rounded-lg w-50 border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
          </div>

        </div>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 ml-3 mr-3">
        {filteredRestroList.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/city/kolhapur/"+restaurant?.info?.id }>

          {restaurant.info.promoted ?(
            <RestaurantCardPromoted  resData={restaurant} /> ):( <Restaurant  resData={restaurant} />
          )}

         {/* <Restaurant  resData={restaurant} />  */}
         </Link>
        ))}
      </div>
    </div>
  );
};



export default Body;
