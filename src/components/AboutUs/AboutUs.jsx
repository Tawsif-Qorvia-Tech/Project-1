import Image from "next/image";
import React from "react";
import aboutBanner from "@/assets/AboutBanner.webp";

const AboutUs = () => {
  return (
    /* 1. We keep your explicit heights (h-100 on mobile, h-137.5 on PC). 
       This tells the container *exactly* how tall the image should appear. */
    <div className="relative h-100 md:h-137.5 w-full overflow-hidden rounded-2xl md:rounded-4xl mb-15 md:mb-0">
      
      {/* 2. We keep 'fill'. Combined with the parent's explicit height, this forces 
         the image to match that height. */}
      <Image
        src={aboutBanner}
        alt="About Us Banner"
        fill
        /* 3. THIS IS THE KEY CHANGE. 
           'object-cover' ensures the image completely fills the container.
           Because the image is too wide, 'object-cover' will *crop the excess width* (x-axis)
           so that the vertical height matches the container perfectly.
           'object-center' ensures the crop happens evenly from both sides. */
        className="object-cover object-center"
        priority
      />

      {/* 4. Overlay Content - unchanged from your original input */}
      <div className="absolute inset-0 flex items-center md:items-start z-10">
        <div className="relative flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-24 py-16 md:py-24 lg:py-32 w-full">
          <div className="border border-white/70 rounded-full hidden md:block px-11 py-2.5 text-white text-[18px] font-light tracking-wide bg-white/10 mb-6">
            About Us
          </div>

          <h1
            className="text-2xl text-white min-[321px]:text-3xl lg:text-6xl xl:text-7xl font-semibold mb-2 text-left md:text-center"
            style={{ fontFamily: "'inter', serif" }}
          >
            Dedicated to Animal <br className="hidden md:block" />
            Health & Farm Productivity
          </h1>

          <p className="text-white text-left md:text-center text-sm md:text-[18px] font-normal">
            With years of experience, we provide science-backed veterinary
            solutions for healthier animals and sustainable farming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;