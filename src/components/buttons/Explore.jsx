"use client";
import Link from "next/link";
import React from "react";

const Explore = () => {
  return (
    <div>
      <Link href={"/our-products"}>
        <button className="bg-primary text-white xs-only:text-[12px] xs-only:px-3 text-[14px] sm:text-[18px] px-7 md:px-8 py-2.5 rounded-full hover:bg-[#8f0075] transition-colors cursor-pointer whitespace-nowrap">
          Explore Products
        </button>
      </Link>
    </div>
  );
};

export default Explore;
