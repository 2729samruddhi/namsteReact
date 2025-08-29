import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import PaymentSummary from "./PaymentSummary";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  const totalAmount = cartItems.reduce(
    (acc, item) =>
      acc +
      (item?.card?.info?.price / 100 ||
        item?.card?.info?.defaultPrice / 100) * item.quantity,
    0
  );

  return (
    <div className="flex justify-center mt-8 gap-8">
      {/* Left Section: Cart Items */}
      <div className="w-7/12">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">
            Your Cart ({cartItems.length} items)
          </h1>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {cartItems.length === 0 ? (
          <h2 className="text-gray-500">
            Cart is empty. Please add some items!
          </h2>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cartItems.map((item) => (
              <CartItem key={item.card.info.id} item={item} />
            ))}
          </div>
        )}
      </div>

      {/* Right Section: Payment Summary */}
      <div className="w-4/12 mt-10">
        <PaymentSummary totalAmount={totalAmount} />
      </div>
    </div>
  );
};

export default Cart;
