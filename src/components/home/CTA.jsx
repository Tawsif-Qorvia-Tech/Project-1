import React from 'react';
import Link from 'next/link';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const CTA = () => {
  return (
    <section className="relative w-full my- 16 py-10 px-8 md:px-16 md:my-16 lg:px-24 mt-20 rounded-2xl overflow-hidden">

      {/* Decorative rings */}
      {/* <div className="absolute -top-12 -right-10 w-56 h-56 rounded-full border-[32px] border-[#a05abe]/10 pointer-events-none" />
      <div className="absolute -bottom-14 right-20 w-36 h-36 rounded-full border-[22px] border-[#a05abe]/[0.07] pointer-events-none" /> */}

      <div className="relative z-10 flex flex-col items-center text-center gap-5">

        {/* Pill + stats inline row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <div className="inline-flex items-center gap-1.5 bg-[#8b3fac]/10 text-[#7c3fa0] text-[12px] font-medium px-3 py-1 rounded-full">
            Science-backed care
          </div>

          <div className="flex items-center gap-3 text-[12px] text-[#666]">
            <span className="w-1 h-1 rounded-full bg-[#bbb]" />
            <span><strong className="text-[#232323] font-semibold">500+</strong> farms</span>
            <span className="w-1 h-1 rounded-full bg-[#bbb] inline-block" />
            <span><strong className="text-[#232323] font-semibold">98%</strong> satisfaction</span>
            <span className="w-1 h-1 rounded-full bg-[#bbb] inline-block" />
            <span><strong className="text-[#232323] font-semibold">15+</strong> yrs expertise</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[36px] md:text-[60px] md:text-[72px] font-semibold text-[#1a1a1a] leading-[1.2]">
          Protect Your Herd. <br />
          <span className="text-[#8b3fac]">Optimize</span> Your Yield.
        </h2>

        {/* Paragraph */}
        <p className="text-[14px] text-[#666666] leading-relaxed max-w-xl">
          Invest in science-backed veterinary medicines engineered to keep your livestock healthier,
          your animals happier, and your farm operations running at peak productivity.
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 flex-wrap">
          <Link
            href="/our-products"
            className="group relative overflow-hidden bg-primary text-white flex items-center justify-center gap-2 rounded-full px-3 py-2 text-[16px] font-medium border border-primary transition-transform duration-300 active:scale-95 cursor-pointer"
          >
            {/* Background slide panel */}
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />

            {/* Clean Text Layer */}
            <span className="relative z-10 inline-block text-white group-hover:text-primary transition-colors duration-300">
              Shop Vet Solutions
            </span>

            {/* Animated Arrow Container */}
            <div className="bg-white text-primary flex items-center justify-center rounded-full aspect-square h-full p-1 z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-[-45deg] group-hover:bg-primary group-hover:text-white">
              <MdOutlineArrowRightAlt size={25} />
            </div>
          </Link>

          <Link
            href="/contact-us"
            className="group relative overflow-hidden bg-transparent text-primary flex items-center justify-center gap-2 rounded-full px-4 py-3 text-[16px] font-medium border border-black/15 hover:border-transparent transition-all duration-300 active:scale-95 cursor-pointer"
          >
            {/* Custom background slide panel */}
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-[#f5e6f5] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />

            {/* Clean Text Layer */}
            <span className="relative z-10 inline-block text-primary transition-colors duration-300">
              Consult an Expert
            </span>

            {/* Animated Arrow Container */}
            <div className="bg-white text-primary flex items-center justify-center rounded-full aspect-square h-full p-1 z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-[-45deg]">
              <MdOutlineArrowRightAlt size={17} className="text-[#8b3fac]" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTA;