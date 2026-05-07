'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import ProductsCard from '../cards/ProductsCard';

const TopSeller = ({ products = [] }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full px-4 sm:px-8 py-10">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] tracking-tight">
          Our Top-Selling Products
        </h2>

        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#c4006e] hover:text-[#c4006e] transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            ref={nextRef}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#c4006e] hover:text-[#c4006e] transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="w-48 h-[3px] bg-[#c4006e] rounded-full mb-8" />

      {products.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          No top-selling products available.
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductsCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-3 bg-[#c4006e] hover:bg-[#a3005c] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-colors duration-200">
          View More
          <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default TopSeller;