"use client";

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import aboutBanner from "@/assets/ProductBanner.webp";

const ContactHero = () => {
    return (
        <div className="relative w-full h-100 sm:h-125 md:h-150 overflow-hidden rounded-2xl md:rounded-4xl mb-15 md:mb-0">
          <Image
            src={aboutBanner}
            alt="Contact Us Banner"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Absolute content box wrapper matching your AboutUs and ProductHero layout systems */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-24 w-full">
            
            {/* The 'Get In Touch' Badge */}
            <div className="self-center border border-white/70 rounded-full px-4 py-1 text-white text-[12px] md:text-[15px] font-light tracking-wide bg-white/10 mb-4 md:mb-6">
              Get In Touch
            </div>

            {/* Main Heading */}
            <h1
              className="text-white text-[38px] sm:text-4xl md:text-5xl lg:text-[72px] xl:text-[82px] font-semibold mb-3 sm:mb-4 md:mb-6 w-full max-w-full md:max-w-4xl lg:max-w-6xl md:text-center leading-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Partnering for Healthier <br className="hidden md:block" /> Animals and Better Yields
            </h1>

            {/* Descriptive Paragraph */}
            <p className="text-white text-[15px] md:text-[18px] font-normal mb-5 sm:mb-6 md:mb-8 leading-relaxed w-full max-w-sm md:max-w-2xl md:text-center">
              Have questions about our veterinary solutions? Whether you are a farmer seeking support 
              or a partner looking to innovate, our team is here to provide the expert care you need.
            </p>

            {/* Simple Navigation Buttons Wrapper */}
            <div className="flex flex-row gap-2 md:gap-4 justify-center items-center">
              
              {/* Button 1: Explore Products (Solid colored button style) */}
              <div>
                <Link href="/our-products">
                  <button className="bg-primary text-white xs-only:text-[12px] xs-only:px-3 text-[15px] sm:text-[18px] px-6 md:px-8 py-2.5 rounded-full hover:bg-[#8f0075] transition-colors cursor-pointer whitespace-nowrap">
                    Explore Products
                  </button>
                </Link>
              </div>

              {/* Button 2: More About Us (Border outline button style) */}
              <div>
                <Link href="/about-us">
                  <button className="border border-white xs-only:mr-4 text-white xs-only:text-[12px] xs-only:px-3 text-[15px] sm:text-[18px] px-5 sm:px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
                    More About Us
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
    );
};

export default ContactHero;
