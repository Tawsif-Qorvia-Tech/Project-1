import React from "react";
import Image from "next/image";
import aboutBanner from "@/assets/AboutUsBanner.webp";
import Explore from "../buttons/Explore";
import LearnMore from "../buttons/LearnMore";

const AboutUsBanner = () => {
  return (
    /* 
      1. RETAINED: Original About Us background frame sizes 
         (h-100 sm:h-125 md:h-150 with mb-15 md:mb-0 spacing)
    */
    <div className="relative w-full h-95 sm:h-125 md:h-150 overflow-hidden rounded-2xl md:rounded-4xl mb-15 md:mb-0">
      <Image
        src={aboutBanner}
        alt="About Us Banner"
        fill
        /* 2. RETAINED: Exact About Us center-focused asset placement rules */
        className="object-cover object-center"
        priority
      />

      {/* 
        3. MATCHED ALIGNMENT: Converted the content wrapper to match 
           the Home Page Banner text-left, padding, and layout structure.
      */}
      <div className="absolute inset-0 flex flex-col justify-center text-left px-4 sm:px-6 md:pl-24 md:pr-16 w-full">

        {/* The 'About Us' Badge - Now floats perfectly into the left-aligned typography stream */}
        {/* <div className="self-start border border-white/70 rounded-full px-4 py-1 text-white text-[12px] md:text-[15px] font-light tracking-wide bg-white/10 mb-4 md:mb-6">
          About Us
        </div> */}
        <div className="self-start flex items-stretch rounded-md overflow-hidden bg-white/10 backdrop-blur-xs mb-4 border border-white/10 shadow-xs">
          <div className="w-1 bg-primary" />
          <span className="text-[11px] font-bold tracking-wider text-white uppercase px-3 py-1">
            About Us
          </span>
        </div>

        {/* MATCHED HEADING ALIGNMENT: Left-aligned, identical font scaling & margin parameters */}
        <h1 className="text-white text-[35px] sm:text-4xl md:text-5xl lg:text-[80px] font-medium mb-2 sm:mb-3 md:mb-4 w-full max-w-full md:max-w-4xl leading-tight">
          Dedicated to Animal Health & Farm Productivity
        </h1>

        {/* MATCHED SUBHEADING ALIGNMENT: Left-aligned, matching font weight & width caps */}
        <p className="text-white text-[15px] md:text-[18px] font-light mb-4 sm:mb-4 md:mb-6 leading-relaxed w-full md:max-w-xl">
          With years of experience, we provide science-backed veterinary
          solutions for healthier animals and sustainable farming.
        </p>

        {/* MATCHED BUTTONS ALIGNMENT: Left-aligned layout mapping row */}
        <div className="flex flex-row gap-2 md:gap-4 justify-start">
          <Explore />
          <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
