'use client';

import { useRef } from 'react';
import OurProductsClient from './OurProductsClient';

const OurProductsWrapper = ({ products }) => {
  const paginationRef = useRef(null);

  return (
    <>
      <div className="mb-6 md:mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-[#232323] wrap-break-word md:whitespace-nowrap font-[family-name:--font-gilroy]">Explore Our Products</h2>
        <div ref={paginationRef} className="custom-pagination-container min-w-25 flex justify-center md:justify-end w-full md:w-auto"></div>
      </div>

      <div className="max-w-8xl mx-auto">
        <OurProductsClient products={products} paginationRef={paginationRef} />
      </div>
    </>
  );
};

export default OurProductsWrapper;
