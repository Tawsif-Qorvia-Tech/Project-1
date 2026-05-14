"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TopSellerCard from "../cards/TopSellerCard";
import Arrow from "../../assets/Arrow.png";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";

const TopSeller = ({ products = [] }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  // Bar travels from left=0 to left=(100% - 192px) as index goes 0 → max
  const maxIndex = Math.max(totalSlides - 1, 1);
  const barLeftPercent = (activeIndex / maxIndex) * 100;

  return (
    <section className="w-full px-4 sm:px-8 py-10">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-3xl sm:text-[78px] font-bold text-[#1a1a1a] tracking-tight">
          Our Top-Selling Products
        </h2>

        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            disabled={activeIndex === 0}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-200 
    ${
      activeIndex === 0
        ? "border-gray-300 text-gray-300 cursor-not-allowed"
        : "border-[#c4006e] text-[#c4006e]"
    }`}
          >
            <MdOutlineArrowRightAlt size={34} className="rotate-180" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="w-9 h-9 rounded-full border flex items-center justify-center border-[#c4006e] text-[#c4006e] transition-colors duration-200"
          >
            <MdOutlineArrowRightAlt size={34} />
          </button>
        </div>
      </div>

      {/* Animated pink bar */}
      <div className="relative w-full h-[3px] my-8">
        <div
          className="absolute top-0 h-[3px] w-48 bg-[#c4006e] rounded-full transition-all duration-500 ease-in-out"
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
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTotalSlides(swiper.slides.length);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <TopSellerCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default TopSeller;
