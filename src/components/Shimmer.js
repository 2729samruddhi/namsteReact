import React from 'react'

const Shimmer=()=> {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array(12)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="animate-pulse flex flex-col space-y-3 rounded-xl border border-gray-200 p-4 shadow-sm"
          >
            {/* Image placeholder */}
            <div className="h-32 w-full rounded-lg bg-gray-300"></div>

            {/* Text placeholders */}
            <div className="h-4 w-3/4 rounded bg-gray-300"></div>
            <div className="h-4 w-1/2 rounded bg-gray-300"></div>
          </div>
        ))}
    </div>
  );
}

export default Shimmer;
