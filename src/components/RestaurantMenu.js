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

  //console.log(categories);

  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="bg-gray-100  justify-center text-left p-2 m-2 border-b-2 rounded-2xl shadow-lg border-gray-300 w-[700px]">
         <h1 className="font-bold my-4 text-2xl">{name}</h1>
         <div className="bg-purple-400 rounded-lg">
            <p className="font-bold text-lg">{cuisines?.join(", ")}</p>
         </div>
        </div>
      </div>

      <div className="text-center">
        
        <p className="font-bold text-lg">{cuisines?.join(", ")}</p>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
