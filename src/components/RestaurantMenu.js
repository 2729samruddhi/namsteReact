import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resId === null) return <Shimmer />;

  const { name, cuisines, avgRating } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const regularCards =
    resInfo?.cards?.find((c) => c?.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const menuCard = regularCards.find((c) => c?.card?.card?.itemCards);
  const itemCards = menuCard?.card?.card?.itemCards || [];

  const categories =
    resInfo?.cards
      ?.find((c) => c?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || [];

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines?.join(", ")}</p>
      {/*<p>⭐ {avgRating}</p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}> 
          {item?.card?.info?.name} - {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}
          </li>
        ))}
      </ul> */}

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={()=>{setShowIndex(index)}}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
