import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
   const data = await fetch(MENU_API + resId);
  const json = await data.json();
  console.log(json);
   const dataObj = json?.data;
      setResInfo(dataObj);
  };

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
