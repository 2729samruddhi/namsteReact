import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {

  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);

  if(resId === null) return <Shimmer/>

  const { name, cuisines, avgRating } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const regularCards = resInfo?.cards
  ?.find(c => c?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

const menuCard = regularCards.find(c => c?.card?.card?.itemCards);
const itemCards = menuCard?.card?.card?.itemCards || [];



  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")}</p>
      <p>⭐ {avgRating}</p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}> 
          {item?.card?.info?.name} - {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
