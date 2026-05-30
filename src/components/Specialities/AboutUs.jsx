"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import productBanner from "@/assets/ContactUs.jpg"; // Swap this asset if you have a medical/clinical one later!

const SpecialtiesHero = () => {
  return (
    /* 
      1. SYNCHRONIZED CONTAINER: Height and padding metrics matching your layout standard
         (h-95 sm:h-125 md:h-150 with mb-15 md:mb-0 spacing)
    */
    <div className="relative w-full h-100 sm:h-125 md:h-150 overflow-hidden rounded-2xl md:rounded-4xl mb-15 md:mb-0">
      <Image
        src={productBanner}
        alt="Veterinary Specialties Banner"
        fill
        /* 
          FIXED DESKTOP CROP: 'object-center' on mobile, 
          but shifts to 'md:object-top' on desktop to stop head/face clipping.
        */
        className="object-cover object-center md:object-top w-full h-full"
        priority
      />

      {/* 
        2. SYNCHRONIZED ALIGNMENT: Left-aligned overlay content box layout 
           (text-left px-4 sm:px-6 md:pl-24 md:pr-16)
      */}
      <div className="absolute inset-0 flex flex-col justify-center text-left px-4 sm:px-6 md:pl-24 md:pr-16 w-full bg-gradient-to-r from-black/50 via-black/30 to-transparent">

        {/* 3. SYNCHRONIZED BADGE: Premium Asymmetric Two-Tone Slice */}
        <div className="self-start flex items-stretch rounded-md overflow-hidden bg-white/10 backdrop-blur-xs mb-4 border border-white/10 shadow-xs select-none">
          <div className="w-1 bg-primary" />
          <span className="text-[11px] font-bold tracking-wider text-white uppercase px-3 py-1">
            Medical Expertise
          </span>
        </div>

        {/* HEADING ALIGNMENT: Focused on specialized therapeutic areas & veterinary clinical sectors */}
        <h1 className="text-white text-[35px] sm:text-4xl md:text-5xl lg:text-[80px] font-medium mb-2 sm:mb-3 md:mb-4 w-full max-w-full md:max-w-5xl leading-tight tracking-tight">
          Targeted Specialties for Complex Animal Care
        </h1>

        {/* SUBHEADING ALIGNMENT: Highlights advanced sciences, biosecurity fields, and targeted treatments */}
        <p className="text-white text-[15px] md:text-[18px] font-light mb-4 sm:mb-4 md:mb-6 leading-relaxed w-full md:max-w-2xl text-white/90">
          Discover our specialized clinical categories—ranging from core immunotherapies 
          and advanced avian pathology to precision livestock nutrition and comprehensive 
          herd biosecurity management systems.
        </p>

        {/* BUTTONS ALIGNMENT: Navigation routes oriented toward specialized clinical solutions */}
        <div className="flex flex-row gap-2 md:gap-4 justify-start items-center">

          {/* Button 1: Deep dive directly into the clinical categories below */}
          <div>
            <a href="#clinical-categories">
              <button className="bg-primary text-white xs-only:text-[12px] xs-only:px-3 text-[15px] sm:text-[18px] px-6 md:px-8 py-2.5 rounded-full hover:bg-[#8f0075] transition-colors cursor-pointer whitespace-nowrap font-medium shadow-md">
                View Specialties
              </button>
            </a>
          </div>

          {/* Button 2: Crosslink directly back to core commercial portfolio matching these segments */}
          <div>
            <Link href="/our-products">
              <button className="border border-white xs-only:mr-4 text-white xs-only:text-[12px] xs-only:px-3 text-[15px] sm:text-[18px] px-5 sm:px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
                Medical Products
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SpecialtiesHero;