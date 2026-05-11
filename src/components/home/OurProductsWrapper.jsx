"use client";

import OurProductsClient from "./OurProductsClient";

const OurProductsWrapper = ({ products }) => {
  return (
    <>
      <div className="mb-6 md:mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
        <h2 className="text-3xl xs:text-[32px] sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-[#232323] wrap-break-word md:whitespace-nowrap">
          Explore Our Products
        </h2>
        {/* Swiper will look for this class to inject bullets */}
        <div className="products-pagination-container pl-0 md:pl-7 min-w-25 flex justify-center md:justify-end w-full md:w-auto"></div>
      </div>

      <div className="max-w-8xl mx-auto">
        <OurProductsClient products={products} />
      </div>
    </>
  );
};

export default OurProductsWrapper;