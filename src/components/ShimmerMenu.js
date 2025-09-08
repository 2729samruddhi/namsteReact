import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="animate-pulse">
      {/* Restaurant header skeleton */}
      <div className="flex justify-center mt-5">
        <div className="bg-white p-4 m-2 border-b-2 rounded-3xl shadow-lg border-gray-300 w-[650px]">
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>

      {/* Categories + items skeleton */}
      <div className="flex flex-col items-center mt-6 space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white w-[650px] p-4 rounded-3xl shadow-md border border-gray-200"
          >
            <div className="h-5 bg-gray-300 rounded w-1/3 mb-3"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;
