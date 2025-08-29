import React from "react";

const About = () => {
  return (
    <><div className="flex justify-center mt-5">
      <div className="bg-gray-100 rounded-3xl shadow-lg p-10 w-[800px] text-center">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-semibold">FlavorHub</span>, your one-stop destination
          for exploring and ordering delicious meals from your favorite restaurants.
          We believe good food brings people together, and our mission is to make dining
          experiences seamless, convenient, and full of flavor.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          What We Offer
        </h2>
        <ul className="text-left list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>🍔 A wide selection of top-rated restaurants and cuisines.</li>
          <li>🔍 Easy search & filters to find your perfect meal.</li>
          <li>⚡ Fast and reliable delivery straight to your door.</li>
          <li>💳 Secure and flexible payment options.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          Our Vision
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We’re passionate about connecting food lovers with the best restaurants
          in town. Whether it’s a quick bite or a family feast,
          <span className="font-semibold"> FlavorHub </span> is here to make every meal special.
        </p>

        <p className="mt-8 text-gray-500 italic">
          "Good food, good mood – delivered with ease."
        </p>
      </div>
    </div>
    
      </>
  );
};

export default About;
