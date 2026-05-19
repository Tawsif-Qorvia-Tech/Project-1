"use client";

import Link from "next/link";
import React from "react";

const LearnMore = () => {
  return (
    <div>
      <Link href={"/about-us"}>
        <button className="border border-white  xs-only:mr-4 text-white xs-only:text-[12px] xs-only:px-3 text-[14px] sm:text-[18px] px-5 sm:px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
          More About Us
        </button>
      </Link>
    </div>
  );
};

export default LearnMore;
