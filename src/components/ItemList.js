import React, { useState } from "react";
import { comman_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //console.log(items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
      
      <div>
        {items.map((item) => (
          <div
            data-testid="foodItems"
            key={item?.card?.info?.id}
            className="bg-gray-100 p-2 m-2 text-left border-b-2 border-gray-300 flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="text-gray-700 text-lg font-bold">
                  {item?.card?.info?.name}
                </span>
                <br />
                <span className="text-black text-lg font-semibold">
                  ₹{" "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>{" "}
                <br />
                {item?.card?.info?.ratings?.aggregatedRating?.rating &&
                  item?.card?.info?.ratings?.aggregatedRating
                    ?.ratingCountV2 && (
                    <div className="flex">
                      <span className="text-green-800">
                        ❇️{item?.card?.info?.ratings?.aggregatedRating?.rating}
                      </span>
                      <p>
                        (
                        {
                          item?.card?.info?.ratings?.aggregatedRating
                            ?.ratingCountV2
                        }
                        )
                      </p>
                    </div>
                  )}
              </div>
              <p className="text-gray-700 font-sans leading-snug">
                {item?.card?.info?.description}
              </p>
            </div>

            <div className="w-3/12 p-4 relative">
              <img
                className="w-full h-[140px] object-cover rounded-2xl"
                src={comman_URL + item?.card?.info?.imageId}
              />
              <button
                className="absolute bottom-2 left-1/2 -translate-x-1/2 text-lg bg-white text-green-500 font-bold p-2 px-5 rounded-lg shadow-md"
                onClick={() => handleAddItem(item)}
              >
                ADD+
              </button>
            </div>
          </div>
        ))}
      </div>
  );
};

export default ItemList;
