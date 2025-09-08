import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) return <ShimmerMenu/>;

  const { name, cuisines, avgRating, totalRatingsString, costForTwoMessage,areaName,cloudinaryImageId} =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const { slaString } = resInfo?.cards?.[2]?.card?.card?.info?.sla || {};

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

  //  const { name, cuisines, avgRating } =
  // resInfo?.cards?.[2]?.card?.card?.info || {};

  //console.log(categories);

  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="bg-white  justify-center text-left p-2 m-2 border-b-2 rounded-3xl shadow-lg border-gray-300 w-[650px]">
          <h1 className="font-bold my-4 text-2xl">{name}</h1>
          <div className="bg-gray-100 rounded-3xl p-3">
            <p className="font-bold flex items-center gap-2">
              <span>
                ❇️ {avgRating} ({totalRatingsString})
              </span>
              <span className="text-gray-400">•</span>
              <span>{costForTwoMessage}</span>
            </p>
            <p className="font-bold text-orange-500">{cuisines?.join(", ")}</p>
             <p className="font-bold">Outlet- {areaName}</p>
            <p className="font-bold ">{slaString}</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        {/* <p className="font-bold text-lg">{cuisines?.join(", ")}</p> */}
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
