"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TopSellerCard from "../cards/TopSellerCard";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const TopSeller = ({ products = [] }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [totalSlides, setTotalSlides] = useState(1);

  useEffect(() => {
    if (products.length > 0) {
      setTotalSlides(products.length);
    }
  }, [products]);

  // Use swiper native methods directly with preventDefault to stop touch bubbling
  const handlePrev = (e) => {
    e.preventDefault();
    if (swiperRef.current && !swiperRef.current.destroyed) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (swiperRef.current && !swiperRef.current.destroyed) {
      swiperRef.current.slideNext();
    }
  };

  const maxIndex = Math.max(totalSlides - 1, 1);
  const barLeftPercent = (activeIndex / maxIndex) * 100;

  return (
    <section id="topseller" className="w-full px-4 sm:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-5xl md:text-[72px] font-bold text-[#1a1a1a] tracking-tight leading-tight select-none">
          Our Top-Selling Products
        </h2>

        {/* Isolation container to block touch gesture bubbling */}
        <div 
          className="flex items-center gap-4 relative z-30 self-end sm:self-auto touch-none"
          onTouchStart={(e) => e.stopPropagation()} 
          onTouchMove={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous"
            disabled={isBeginning}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 active:scale-95
              ${
                isBeginning
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-[#c4006e] text-[#c4006e] bg-white active:bg-gray-50"
              }`}
          >
            <MdOutlineArrowRightAlt size={34} className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next"
            disabled={isEnd}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 active:scale-95
              ${
                isEnd
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-[#c4006e] text-[#c4006e] bg-white active:bg-gray-50"
              }`}
          >
            <MdOutlineArrowRightAlt size={34} />
          </button>
        </div>
      </div>

      {/* Animated pink bar */}
      <div className="relative w-full h-[3px] my-8 bg-gray-100 rounded-full">
        <div
          className="absolute top-0 h-[3px] w-48 bg-[#c4006e] rounded-full transition-all duration-300 ease-out"
          style={{
            left: `calc(${barLeftPercent}% - ${(barLeftPercent / 100) * 192}px)`,
          }}
        />
      </div>

      {products.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          No top-selling products available.
        </div>
      ) : (
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          grabCursor={true}
          observer={true}
          observeParents={true}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTotalSlides(swiper.slides.length || products.length);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          // Hook into the transition start state instead of generic slide change
          onSlideChangeTransitionStart={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id} className="select-none">
              <TopSellerCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default TopSeller;
