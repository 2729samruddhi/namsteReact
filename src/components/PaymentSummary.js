import React from "react";
import toast from "react-hot-toast";

const PaymentSummary = ({ totalAmount }) => {
   const handlePaymentClick = () => {
    toast.success(" Order placed successfully!");
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 sticky top-20">
      <h2 className="text-xl font-bold mb-3">Order Summary</h2>
      <p className="text-sm text-gray-500 mb-4">
        Your total amount includes all taxes and fees. You can proceed to
        checkout or continue shopping for more items.
      </p>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>₹{totalAmount}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Delivery Fee</span>
        <span>₹30</span>
      </div>
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₹{totalAmount + 30}</span>
      </div>
      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-500"  
       onClick={handlePaymentClick}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default PaymentSummary;
