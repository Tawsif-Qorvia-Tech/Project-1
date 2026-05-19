"use client";

import { MdOutlineArrowRightAlt } from "react-icons/md";
import OurProductsClient from "./OurProductsClient";
import Link from "next/link";

const OurProductsWrapper = ({ products }) => {
  return (
    <>
      <div className="mb-6 md:mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
        <h2 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl  font-semibold text-[#232323] wrap-break-word md:whitespace-nowrap">
          Explore Our Products
        </h2>
        {/* Swiper will look for this class to inject bullets */}
        <div className="products-pagination-container pl-0 md:pl-7 min-w-25 flex justify-center md:justify-end w-full md:w-auto"></div>
      </div>

      <div className="max-w-8xl mx-auto">
        <OurProductsClient products={products} />
      </div>

      <Link
        href="/our-products"
        className="bg-primary text-white w-fit flex justify-center items-center gap-2 sm:gap-3 rounded-[22.4px] py-[5.6px] pl-3 sm:pl-[16.8px] pr-[5.6px] mx-auto mt-8"
      >
        <div>
          <h1 className="text-sm sm:text-[18px] font-light pl-2 sm:pl-4">
            View More
          </h1>
        </div>
        <div className="bg-white text-primary flex items-center justify-center rounded-full aspect-square h-full p-1">
          <MdOutlineArrowRightAlt size={28} />
        </div>
      </Link>
    </>
  );
};

export default OurProductsWrapper;
