"use client";

import React from "react";
// import { FaTruck, FaThermometerSnowflake, FaWarehouse, FaGlobe } from "react-icons/fa";

const SupplyLogistics = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-24 max-w-7xl mx-auto w-full border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Aspect: Value Proposition Editorial Text (5 Columns) */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md inline-block">
            Supply Chain Security
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#232323] tracking-tight leading-tight">
            Nationwide cold-chain logistics you can count on.
          </h2>
          <p className="text-[#666666] text-sm md:text-base font-light leading-relaxed">
            We operate a network of certified biosecurity distribution hubs to ensure your vaccines and critical daily treatments arrive at your farm fully potent and safely preserved.
          </p>
          <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
            <span>✓ WHO-GMP Compliant</span>
            <span>✓ Real-time Temp Tracking</span>
          </div>
        </div>

        {/* Right Aspect: Minimalist Feature Matrix Grid (7 Columns) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          
          {/* Card 1: Cold Chain */}
          <div className="p-6 bg-[#f5e6f5]/20 border border-[#f5e6f5]/60 rounded-2xl space-y-3 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-transparent">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              {/* <FaThermometerSnowflake className="text-lg" /> */}
            </div>
            <h3 className="text-base font-bold text-[#232323]">Strict Cold-Chain Tracking</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Vaccines are stored constantly between 2°C to 8°C from production to final farm offloading.
            </p>
          </div>

          {/* Card 2: Fulfillment */}
          <div className="p-6 bg-gray-50/80 border border-gray-100 rounded-2xl space-y-3 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-transparent">
            <div className="w-10 h-10 rounded-xl bg-gray-900/5 text-gray-800 flex items-center justify-center">
              <FaWarehouse className="text-lg" />
            </div>
            <h3 className="text-base font-bold text-[#232323]">Strategic Hub Network</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Regional storage centers guarantee rapid dispatch times to major poultry belts nationwide.
            </p>
          </div>

          {/* Card 3: Shipping */}
          <div className="p-6 bg-gray-50/80 border border-gray-100 rounded-2xl space-y-3 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-transparent">
            <div className="w-10 h-10 rounded-xl bg-gray-900/5 text-gray-800 flex items-center justify-center">
              <FaTruck className="text-lg" />
            </div>
            <h3 className="text-base font-bold text-[#232323]">Priority Farm Freight</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Dedicated biosecurity transport vehicles deliver orders straight to your farm gates.
            </p>
          </div>

          {/* Card 4: Global standards */}
          <div className="p-6 bg-gray-50/80 border border-gray-100 rounded-2xl space-y-3 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-transparent">
            <div className="w-10 h-10 rounded-xl bg-gray-900/5 text-gray-800 flex items-center justify-center">
              <FaGlobe className="text-lg" />
            </div>
            <h3 className="text-base font-bold text-[#232323]">Bulk Scalability</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Equipped to comfortably fulfill ongoing monthly contracts for multi-location enterprise operations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SupplyLogistics;
