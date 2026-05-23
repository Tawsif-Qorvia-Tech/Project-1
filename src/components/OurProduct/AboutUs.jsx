"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import productBanner from "@/assets/ProductBanner.webp";

const ProductHero = () => {
  return (
    /* 
      1. SYNCHRONIZED CONTAINER: Height and padding metrics matching your final AboutUsBanner 
         (h-95 sm:h-125 md:h-150 with mb-15 md:mb-0 spacing)
    */
    <div className="relative w-full h-95 sm:h-125 md:h-150 overflow-hidden rounded-2xl md:rounded-4xl mb-15 md:mb-0">
      <Image
        src={productBanner}
        alt="Our Products Banner"
        fill
        className="object-cover object-center"
        priority
      />
      
      {/* 
        2. SYNCHRONIZED ALIGNMENT: Left-aligned overlay content box layout 
           (text-left px-4 sm:px-6 md:pl-24 md:pr-16)
      */}
      <div className="absolute inset-0 flex flex-col justify-center text-left px-4 sm:px-6 md:pl-24 md:pr-16 w-full">
        
        {/* 3. SYNCHRONIZED BADGE: Your chosen premium Asymmetric Two-Tone Slice */}
        <div className="self-start flex items-stretch rounded-md overflow-hidden bg-white/10 backdrop-blur-xs mb-4 border border-white/10 shadow-xs select-none">
          <div className="w-1 bg-primary" />
          <span className="text-[11px] font-bold tracking-wider text-white uppercase px-3 py-1">
            Our Products
          </span>
        </div>

        {/* HEADING ALIGNMENT: Left-aligned with font weight parameters matching the About Us banner */}
        <h1 className="text-white text-[35px] sm:text-4xl md:text-5xl lg:text-[80px] font-medium mb-2 sm:mb-3 md:mb-4 w-full max-w-full md:max-w-4xl leading-tight">
          Trusted Veterinary Medicines for Better Animal Health
        </h1>

        {/* SUBHEADING ALIGNMENT: Left-aligned with optimized width constraints matching the About Us layout */}
        <p className="text-white text-[15px] md:text-[18px] font-light mb-4 sm:mb-4 md:mb-6 leading-relaxed w-full md:max-w-xl">
          Explore our wide range of science-backed solutions designed to keep your animals
          healthier and your farm more productive.
        </p>

        {/* BUTTONS ALIGNMENT: Left-aligned layout row container */}
        <div className="flex flex-row gap-2 md:gap-4 justify-start items-center">
          
          {/* Button 1: Top Products (Solid colored button style) */}
          <div>
            <Link href="#topseller">
              <button className="bg-primary text-white xs-only:text-[12px] xs-only:px-3 text-[15px] sm:text-[18px] px-6 md:px-8 py-2.5 rounded-full hover:bg-[#8f0075] transition-colors cursor-pointer whitespace-nowrap">
                Top Products
              </button>
            </Link>
          </div>

          {/* Button 2: More About Us (Border outline button style) */}
          <div>
            <Link href="/about-us">
              <button className="border border-white xs-only:mr-4 text-white xs-only:text-[12px] xs-only:px-3 text-[15px] sm:text-[18px] px-5 sm:px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
                More About US
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductHero;
