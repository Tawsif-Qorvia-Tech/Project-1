"use client";

import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const categories = [
  {
    title: "Poultry Feed Supplements",
    count: "19 products",
    desc:  "Growth, immunity, and performance support for broilers and layers.",
    icon:  "🐔",
  },
  {
    title: "Poultry Feed Additives",
    count: "Targeted Solutions",
    desc:  "Heat stress relief, toxin management, and gut health optimization.",
    icon:  "🌿",
  },
  {
    title: "Animal Feed Supplements",
    count: "For All Livestock",
    desc:  "Calcium, vitamins, and essential mineral support across species.",
    icon:  "🐄",
  },
  {
    title: "Cattle Feed Supplements",
    count: "Dairy Focused",
    desc:  "Formulated for dairy cattle productivity and reproductive health.",
    icon:  "🥛",
  },
  {
    title: "Poultry Disinfectants",
    count: "Farm Hygiene",
    desc:  "Disease prevention through effective farm sanitation solutions.",
    icon:  "🛡️",
  },
  {
    title: "Mineral Mixtures",
    count: "Macro & Micro",
    desc:  "Liquid calcium and essential mineral supplementation for peak performance.",
    icon:  "⚗️",
  },
];

const ArrowButton = ({ href, label, className = "" }) => (
  <Link
    href={href}
    className={`group relative overflow-hidden bg-[#af008c] text-white flex items-center gap-3 rounded-full py-[6px] pl-5 pr-[6px] w-max border border-[#af008c] transition-transform duration-300 active:scale-95 ${className}`}
  >
    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
    <span className="z-10 text-sm sm:text-base font-semibold text-white group-hover:text-[#af008c] transition-colors duration-300">
      {label}
    </span>
    <div className="bg-white text-[#af008c] flex items-center justify-center rounded-full aspect-square h-8 w-8 z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-[-45deg] group-hover:bg-[#af008c] group-hover:text-white">
      <MdOutlineArrowRightAlt size={22} />
    </div>
  </Link>
);

const Categories = () => {
  return (
    <section className="px-4 sm:px-8 md:px-10 pt-10 md:pt-10">
      <div className="max-w-7xl mx-auto">

        {/* Header Block */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-[#1a1a1a] text-5xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.1] tracking-tight">
            Every Stage, <span className="text-[#af008c]">Covered.</span>
          </h2>
        </div>

        {/* Product Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href="/our-products"
              className="group relative rounded-2xl p-6 sm:p-7 border bg-white border-[#e8d0e4] hover:border-[#af008c]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(175,0,140,0.12)] cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#faf5f9] text-[#af008c]">
                  {cat.count}
                </span>
              </div>
              <h3 className="text-lg font-bold leading-snug mb-2 text-[#1a1a1a]">
                {cat.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-[#555]">
                {cat.desc}
              </p>
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#af008c]">
                View Products <MdOutlineArrowRightAlt size={16} />
              </div>
            </Link>
          ))}
        </div>

        {/* Center-aligned CTA button container at the bottom */}
        <div className="mt-12 md:mt-16 flex justify-center w-full">
          <ArrowButton href="/our-products" label="View Full Range" />
        </div>

      </div>
    </section>
  );
};

export default Categories;
