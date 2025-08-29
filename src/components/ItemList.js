import React, { useState } from "react";
import { comman_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Check } from "lucide-react";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({}); // store added item ids

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setAddedItems((prev) => ({ ...prev, [item?.card?.info?.id]: true }));
  };

  return (
    <div>
      {items.map((item,index) => {
        const id = item?.card?.info?.id;
        const isAdded = addedItems[id];

        return (
          <div
            data-testid="foodItems"
             key={`${id}-${index}`}   
            className="bg-gray-100 p-2 m-2 text-left border-b-2 border-gray-300 flex justify-between"
          >
            {/* Left section */}
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
                </span>
                <br />
                {item?.card?.info?.ratings?.aggregatedRating?.rating && (
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

            {/* Right section */}
            <div className="w-3/12 p-4 relative">
              <img
                className="w-full h-[140px] object-cover rounded-2xl"
                src={comman_URL + item?.card?.info?.imageId}
              />
              <button
                className={`absolute bottom-2 left-1/2 -translate-x-1/2 text-lg font-bold p-2 px-5 rounded-lg shadow-md ${
                  isAdded
                    ? "bg-green-500 text-white"
                    : "bg-white text-green-500"
                }`}
                onClick={() => handleAddItem(item)}
              >
                {isAdded ? (
                  <span className="flex items-center gap-1">
                   ADDED <Check className="w-5 h-5 text-white font-bold" />
                  </span>
                ) : (
                  "ADD+"
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
