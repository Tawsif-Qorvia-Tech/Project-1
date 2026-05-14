import Image from "next/image";
import React from "react";
import aboutBanner from "@/assets/ProductBanner.webp";

const AboutUs = () => {
  return (
    <div className="relative h-100 md:h-137.5 overflow-hidden rounded-2xl md:rounded-4xl mb-15 md:mb-0">
      <Image
        src={aboutBanner}
        alt="About Us Banner"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 flex items-center md:items-start">
        <div className="relative flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-24 py-16 md:py-24 lg:py-32 w-full">
          <div className="border border-white/70 rounded-full hidden md:block px-11 py-2.5 text-white text-[18px] font-light tracking-wide bg-white/10">
            Our Products
          </div>

          <h1
            className="text-3xl text-white xs-only:text-2xl lg:text-6xl xl:text-7xl font-semibold mb-2 text-left md:text-center"
            style={{ fontFamily: "'inter', serif" }}
          >
            Trusted Veterinary Medicines <br className="hidden md:block" /> for Better Animal Health
          </h1>

          <p className="text-white text-left md:text-center text-[10px] md:text-[18px] font-normal">
           Explore our wide range of science-backed solutions designed to keep your animals  <br className="hidden md:block" /> healthier and your farm more productive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
