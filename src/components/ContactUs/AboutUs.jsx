import Image from 'next/image';
import React from 'react';
import aboutBanner from "@/assets/ProductBanner.webp";

const AboutUs = () => {
    return (
        <div className="relative h-100 md:h-137.5 overflow-hidden rounded-2xl md:rounded-4xl mb-15 md:mb-0">
  <Image
    src={aboutBanner}
    alt="Contact Us Banner"
    fill
    className="object-cover object-center md:object-top"
    priority
  />

  <div className="absolute inset-0 flex items-center md:items-start">
    <div className="relative flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-24 py-16 md:py-24 lg:py-32 w-full">
      
      {/* Badge / Tag */}
      <div className="border border-white/70 rounded-full hidden md:block px-11 py-2.5 text-white text-[18px] font-light tracking-wide bg-white/10">
        Get In Touch
      </div>

      {/* Main Heading */}
      <h1
        className="text-3xl text-white xs-only:text-2xl lg:text-6xl xl:text-7xl font-semibold mt-6 mb-4 text-left md:text-center leading-tight"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Partnering for Healthier <br className="hidden md:block" /> Animals and Better Yields
      </h1>

      {/* Descriptive Paragraph */}
      <p className="text-white text-left md:text-center text-[14px] md:text-[18px] font-normal max-w-3xl opacity-90">
        Have questions about our veterinary solutions? Whether you are a farmer seeking support 
        <br className="hidden md:block" /> or a partner looking to innovate, our team is here to provide the expert care you need.
      </p>
      
    </div>
  </div>
</div>
    );
};

export default AboutUs;