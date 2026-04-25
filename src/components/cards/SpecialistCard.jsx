import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const SpecialistCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col relative p-4">
      {/* Main card content */}
      <div className="relative w-full h-52">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-1 pt-5 pb-16">
        <h3 className="text-[24px] font-bold text-[#222222] mb-2">{title}</h3>
        <p className="text-lg text-[#222222] flex-1">{description}</p>
      </div>

      {/* Curved corner with arrow */}
      <div className="absolute bottom-0 right-0">
        {/* Background circle/oval that creates the curve */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-tl-full" />
        
        {/* The curve cutout effect using a pseudo-circle */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#f5e6f5] rounded-tl-full translate-x-2 translate-y-2" />
        
        {/* Arrow Button - positioned at the curve intersection */}
        <button 
          className="absolute bottom-2 right-2 bg-primary text-white rounded-full p-3 
                     hover:opacity-90 transition shadow-lg z-20"
          aria-label="View details"
        >
          <FiArrowUpRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SpecialistCard;