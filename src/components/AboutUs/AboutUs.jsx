import React from "react";
import Image from "next/image";
import aboutBanner from "@/assets/AboutBanner.webp";
// import aboutBanner from "@/assets/AboutBanner.png";
import Explore from "../buttons/Explore";
import LearnMore from "../buttons/LearnMore";

const AboutUs = () => {
  return (
    <div className="relative w-full h-100 sm:h-125 md:h-150 overflow-hidden rounded-2xl md:rounded-4xl mb-15 md:mb-0">
      <Image
        src={aboutBanner}
        alt="About Us Banner"
        fill
        className="object-cover  object-center"
        priority
      />
      {/* Added 'md:items-center' to center-align the content wrapper box on desktops */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-24 w-full">
        
        {/* The 'About Us' Badge - Remains centered */}
        <div className="self-center border border-white/70 rounded-full px-4 py-1 text-white text-[12px] md:text-[15px] font-light tracking-wide bg-white/10 mb-4 md:mb-6">
          About Us
        </div>

        {/* Header - Stays centered, scales beautifully up to lg screens */}
        <h1 
          className="text-white text-[35px] sm:text-4xl md:text-5xl lg:text-[72px] xl:text-[82px] font-semibold mb-3 sm:mb-4 md:mb-6 w-full max-w-full md:max-w-4xl lg:max-w-6xl md:text-center"
          style={{ fontFamily: "'inter', serif" }}
        >
          Dedicated to Animal <br className="hidden md:block" />
          Health & Farm Productivity
        </h1>

        {/* Sub-header - Text centered on desktop and max-width increased to md:max-w-2xl for better readability */}
        <p className="text-white text-[15px] md:text-[18px] font-normal mb-5 sm:mb-6 md:mb-8 leading-relaxed w-full max-w-sm md:max-w-2xl md:text-center">
          With years of experience, we provide science-backed veterinary
          solutions for healthier animals and sustainable farming.
        </p>

        {/* Button Wrapper - Centers the two buttons on all screen sizes */}
        <div className="flex flex-row gap-2 md:gap-4 justify-center">
          <Explore />
          <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
