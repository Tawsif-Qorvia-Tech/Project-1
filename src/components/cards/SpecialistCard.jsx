import React from "react";
import Image from "next/image";
import Arrow from "../../assets/Arrow2.webp";

const SpecialistCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col relative p-4">
      {/* Image Container */}
      <div className="relative w-full h-40 sm:h-52">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col flex-1 pt-5 pb-12">
        <h3 className="text-xl sm:text-[24px] font-bold text-[#222222] mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 flex-1 leading-relaxed">
          {description}
        </p>
      </div>

      {/* The Curved Corner & Floating Button */}
      <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24">
        {/* Top Fillet */}
        <div className="absolute -top-8 right-0 w-8 h-8 bg-transparent overflow-hidden pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white absolute bottom-0 right-0"></div>
        </div>

        {/* Left Fillet */}
        <div className="absolute bottom-0 -left-8 w-8 h-8 bg-transparent overflow-hidden pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white absolute top-0 left-0"></div>
        </div>

        {/* The Main Corner Cutout Area */}
        <div className="absolute inset-0 bg-white rounded-tl-[2rem]">
          {/* Inner Background */}
          <div className="absolute bottom-0 right-0 w-[calc(100%-10px)] h-[calc(100%-10px)] bg-[#f5e6f5] rounded-tl-[2rem] flex items-center justify-center">
            {/* Arrow Button */}
            <button
              className="bg-primary text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center hover:scale-105 transition-transform shadow-md z-20"
              aria-label="View details"
            >
              <div className="relative w-5 h-5">
                <Image
                  src={Arrow}
                  alt="Arrow"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistCard;
