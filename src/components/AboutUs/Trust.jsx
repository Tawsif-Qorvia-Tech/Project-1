import Image from "next/image";
import React from "react";
import TrustImg from "@/assets/Trust.webp";

const trustPoints = [
  {
    title: "Science-Backed Solutions",
    desc: "Every product is developed with research and proven results.",
  },
  {
    title: "Farmer-Centric Approach",
    desc: "We listen to real on-ground challenges and create practical remedies.",
  },
  {
    title: "Affordable & Accessible",
    desc: "Quality medicines at prices that farmers can rely on.",
  },
];

const Trust = () => {
  return (
    <div className="w-full bg-[#f9eef9] py-16 md:py-24 px-4 sm:px-8 lg:px-24">
      {/* Structural layout: Reverse column order on mobile, side-by-side row on desktop */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-7xl mx-auto">
        
        {/* Left Side: Image Block */}
        <div className="w-full md:flex-1"> 
          <Image
            src={TrustImg}
            alt="Farmers with poultry"
            style={{ 
                width: "100%", 
                height: "auto", 
                display: "block",
                objectFit: "contain"
            }}
            className="rounded-2xl md:rounded-3xl px-2 md:px-0"
            priority
          />
        </div>

        {/* Right Side: Text & Points Content */}
        <div className="w-full md:flex-1 flex flex-col">
          {/* Header - Scaled smoothly from mobile up to desktop sizes */}
          <h2 className="text-[40px] sm:text-4xl md:text-5xl lg:text-[72px] xl:text-[82px] font-black text-gray-900 uppercase leading-none mb-6 md:mb-8 tracking-tight text-center">
            Why Farmers <br className="hidden md:block" /> Trust Us
          </h2>

          {/* Points List - Kept exactly as your original side-by-side structure */}
          <div className="flex flex-col w-full">
            {trustPoints.map((point, index) => (
              <div key={index} className="border-b-2 border-gray-300 last:border-b-0">
                <div className="flex items-start gap-4 py-6 text-left">
                  {/* Check icon wrapper */}
                  <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      width="13"
                      height="10"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://w3.org"
                    >
                      <path
                        d="M1 5L4.5 8.5L11.5 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Title and Description Group */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[#555] font-light leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Trust;
