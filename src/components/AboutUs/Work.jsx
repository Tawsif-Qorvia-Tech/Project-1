'use client';

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-150 flex items-center justify-center bg-gray-100">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

const Work = () => {
  return (
    <div className="w-full flex flex-col items-center py-16 md:py-24 px-4 sm:px-8 lg:px-24">
      {/* Header */}
      <h2 className="text-4xl md:text-7xl font-semibold text-gray-900 mb-4 text-center font-[--font-gilroy]">
        Where We Work
      </h2>
      <p className="text-sm md:text-base text-[#555] font-light leading-relaxed text-center max-w-xl mb-10">
        We proudly serve farmers and veterinary professionals across the country. Our distribution
        network ensures timely delivery and reliable support wherever you are.
      </p>

      {/* Map */}
      <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200">
        <MapComponent />
      </div>
    </div>
  );
};

export default Work;