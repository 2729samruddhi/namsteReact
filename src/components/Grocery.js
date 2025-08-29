import React from "react";

const Grocery = () => {
  return (
    <><div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl font-extrabold text-orange-500 mb-4">
        🛒 FlavorHub Grocery
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Welcome to <span className="font-semibold">FlavorHub Grocery</span>, your
        one-stop shop for fresh and fast grocery delivery. From daily essentials
        to fresh produce, we deliver everything you need right to your doorstep.
      </p>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-orange-500 mb-2">
            🥦 Fresh Produce
          </h2>
          <p className="text-gray-600">
            Get the freshest fruits, vegetables, and organic items handpicked
            daily.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-orange-500 mb-2">
            ⏱️ Express Delivery
          </h2>
          <p className="text-gray-600">
            Lightning-fast delivery within minutes, right at your doorstep.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-orange-500 mb-2">
            💳 Easy Payments
          </h2>
          <p className="text-gray-600">
            Multiple payment options including UPI, cards, and cash on delivery.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 shadow-inner rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">
          📦 How It Works
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Browse our wide range of groceries and daily essentials.</li>
          <li>Add your favorite items to the cart.</li>
          <li>Select delivery slot and complete your payment securely.</li>
          <li>Relax while we deliver your order at lightning speed!</li>
        </ol>
      </div>
    </div>
      {/* <div>  <Footer/> </div> */}
      </>
  );
};

export default Grocery;
