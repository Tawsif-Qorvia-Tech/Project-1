'use client';

import { useRef } from 'react';
import OurProductsClient from './OurProductsClient';

const OurProductsWrapper = ({ products }) => {
  const paginationRef = useRef(null);

  return (
    <>
      <div className="max-w-8xl mx-auto mb-10 flex items-center justify-between">
        <h2 className="text-4xl md:text-7xl font-semibold text-[#232323]">Explore Our Products</h2>
        <div ref={paginationRef} className="custom-pagination-container"></div>
      </div>

      <OurProductsClient products={products} paginationRef={paginationRef} />
    </>
  );
};

export default OurProductsWrapper;
