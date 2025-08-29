import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { comman_URL } from "../utils/constants";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const info = item.card.info;

  return (
    <div className="bg-gray-50 rounded-xl shadow-md p-4 flex flex-col justify-between">
      {/* Item Image */}
      <div className="relative">
        <img
          src={comman_URL + info.imageId}
          alt={info.name}
          className="w-full h-40 object-cover rounded-lg"
        />
        {/* Quantity Controls */}
        <div className="absolute top-2 right-2 bg-white shadow-md rounded-full flex items-center px-2">
          <button
            onClick={() => dispatch(removeItem(info.id))}
            className="px-2 text-lg font-bold text-red-500"
          >
            -
          </button>
          <span className="px-2 font-bold">{item.quantity}</span>
          <button
            onClick={() => dispatch(addItem(item))}
            className="px-2 text-lg font-bold text-green-500"
          >
            +
          </button>
        </div>
      </div>

      {/* Item Info */}
      <div className="mt-3 text-left">
        <h2 className="text-lg font-semibold">{info.name}</h2>
        <p className="text-gray-700 font-bold">
          ₹{info.price / 100 || info.defaultPrice / 100}
        </p>
        {info.ratings?.aggregatedRating?.rating && (
          <p className="text-green-600 font-medium">
            {info.ratings.aggregatedRating.rating} ★ (
            {info.ratings.aggregatedRating.ratingCountV2})
          </p>
        )}
        <p className="text-sm text-gray-600 mt-1">{info.description}</p>
      </div>
    </div>
  );
};

export default CartItem;
