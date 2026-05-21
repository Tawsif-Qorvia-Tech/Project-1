"use client";

import { MdOutlineArrowRightAlt } from "react-icons/md";
import OurProductsClient from "./OurProductsClient";
import Link from "next/link";

const OurProductsWrapper = ({ products }) => {
  return (
    <>
      <div className="mb-6 md:mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 w-full">
        <h2 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#232323] wrap-break-word md:whitespace-nowrap">
          Explore Our Products
        </h2>
        
        {/* FIX: Replaced absolute positioning anomalies by removing min-w restrictions, adding explicit relative positioning, and isolating layout alignment */}
        <div className="products-pagination-container relative pl-0 md:pl-7 flex justify-center md:justify-end items-center w-full md:w-auto z-10 !text-right [&_.swiper-pagination-bullet]:mx-1"></div>
      </div>

      <div className="max-w-8xl mx-auto w-full">
        <OurProductsClient products={products} />
      </div>

      <Link
        href="/our-products"
        className="group relative overflow-hidden bg-primary text-white w-fit flex justify-center items-center gap-2 sm:gap-3 rounded-[22.4px] py-[5.6px] pl-3 sm:pl-[10px] pr-[5.6px] mx-auto mt-8 border border-primary transition-transform duration-300 active:scale-95 cursor-pointer"
      >
        {/* Background slide panel */}
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />

        {/* Clean Text Layer */}
        <div className="pl-3 sm:pl-4 z-10">
          <span className="inline-block text-[16px] sm:text-[18px] font-medium text-white group-hover:text-primary transition-colors duration-300">
            View More
          </span>
        </div>

        {/* Animated Arrow Container */}
        <div className="bg-white text-primary flex items-center justify-center rounded-full aspect-square h-full p-1 z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-[-45deg] group-hover:bg-primary group-hover:text-white">
          <MdOutlineArrowRightAlt size={28} />
        </div>
      </Link>
    </>
  );
};

export default OurProductsWrapper;
