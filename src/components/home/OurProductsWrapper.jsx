'use client';

import { useRef } from 'react';
import OurProductsClient from './OurProductsClient';

const OurProductsWrapper = ({ products }) => {
  const paginationRef = useRef(null);

  return (
    <>
      {/* Section Header */}
      <div className="max-w-8xl mx-auto mb-10 relative flex items-center">
        <h2 className="text-4xl md:text-7xl font-semibold text-[#232323]">Explore Our Products</h2>
        {/* Pagination in absolute top-right */}
        <div ref={paginationRef} className="custom-pagination-container absolute right-0"></div>
      </div>

      {/* Products Grid with Pagination */}
      <OurProductsClient products={products} paginationRef={paginationRef} />
    </>
  );
};

export default OurProductsWrapper;
