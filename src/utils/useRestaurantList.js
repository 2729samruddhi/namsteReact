import React, { useEffect, useState } from 'react'
import { RESTAURANTLIST_API } from './constants'

const useRestaurantList = () => {
    const [restList,setResList] = useState([])

    useEffect(()=>{
        fetchRestaurant();
    },[])

    const fetchRestaurant =async()=>{
     const data = await fetch(RESTAURANTLIST_API);
     const json = await data?.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResList(restaurants || []);
    }
  return restList
    
}
export default useRestaurantList;
