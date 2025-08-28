import { useContext, useEffect, useState } from "react";
import Restaurant, { withPromotedLabel } from "./Restaurant";
import { Link, useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContexts from "../utils/UserContexts";
import Shimmer from "./Shimmer"
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const {setUserName,loggedInUser} = useContext(UserContexts);
  const RestaurantCardPromoted = withPromotedLabel(Restaurant);
  const restaurantList  = useRestaurantList()
 
  useEffect(() => {
    setFilteredRestroList(restaurantList);
  }, [restaurantList]);
   //console.log("body rendered...",restaurantList);
  
  if(onlineStatus === false) return <h1>Looks Like a You're offline! Please check your Network!</h1>
    
   return restaurantList?.length === 0 ?(
    <Shimmer/>
   ):
   (
    <div className="body ">
      <div className="flex mt-10 justify-between">
      <div className="flex gap-10 w-8/13">
        <button
          className="px-4 ml-5 py-2 bg-orange-400 items-center rounded-lg font-semibold hover:bg-orange-200 transition"
          onClick={() => {
            const restroList = restaurantList.filter(
              (res) => res?.info?.avgRating >= 4
            );
            setFilteredRestroList(restroList); 
          }}
        >
          Top Rated Restaurant
        </button>

        <div className="gap-3 flex ml-8">
          <input
            type="text"
            data-testid="searchInput"
            className="bg-slate-100 px-20 py-2 rounded-lg w-[600px] focus:outline-none focus:ring-2 focus:ring-orange-200"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-5 py-2 rounded-lg bg-orange-400 ml-3 text-md font-semibold items-center hover:bg-orange-200 transition"
            onClick={() => {
             // console.log("button clicked");
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
       
       <div className="mr-4">
        <div className="gap-2">
          <label className="text-lg font-bold">User: </label>
            <input
            type="text"
            className="bg-slate-100 px-20 py-2 rounded-lg w-50 focus:outline-none focus:ring-2 focus:ring-orange-200"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
          </div>
       </div>
       </div>
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 ml-3 mr-3">
        {filteredRestroList?.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/city/kolhapur/"+restaurant?.info?.id }>
          {restaurant.info.promoted ?(
            <RestaurantCardPromoted  resData={restaurant} /> ):( <Restaurant  resData={restaurant} />
          )}
         </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
