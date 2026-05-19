import React from 'react';
import Link from 'next/link';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const CTA = () => {
  return (
    <section className="relative w-full py-8 px-8 md:px-16 lg:px-24 mt-20 rounded-2xl overflow-hidden">

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

        {/* Left — copy */}
        <div className="flex-1 min-w-0">

          {/* Pill + stats inline row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
            <div className="inline-flex items-center gap-1.5 bg-[#8b3fac]/10 text-[#7c3fa0] text-[12px] font-medium px-3 py-1 rounded-full">
              Science-backed care
            </div>
            <span className="w-1 h-1 rounded-full bg-[#bbb]" />
            <div className="flex items-center gap-3 text-[12px] text-[#666]">
              <span><strong className="text-[#232323] font-semibold">500+</strong> farms</span>
              <span className="w-1 h-1 rounded-full bg-[#bbb] inline-block" />
              <span><strong className="text-[#232323] font-semibold">98%</strong> satisfaction</span>
              <span className="w-1 h-1 rounded-full bg-[#bbb] inline-block" />
              <span><strong className="text-[#232323] font-semibold">15+</strong> yrs expertise</span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-[50px] font-semibold text-[#1a1a1a] leading-[1.2] mb-1.5">
            Protect Your Herd.{' '} <br/>
            <span className="text-[#8b3fac]">Optimize</span> Your Yield.
          </h2>

          <p className="text-[14px] text-[#666666] leading-relaxed max-w-lg">
            Invest in science-backed veterinary medicines engineered to keep your livestock healthier,
            your animals happier, and your farm operations running at peak productivity.
          </p>
        </div>

        {/* Right — buttons */}
        <div className="flex flex-col gap-2.5 w-full lg:w-auto lg:min-w-[200px] shrink-0">
          <Link
            href="/our-products"
            className="bg-[#232323] text-white flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium hover:bg-[#3a3a3a] transition-colors"
          >
            <span>Shop Vet Solutions</span>
            <div className="bg-[#8b3fac] rounded-full w-[28px] h-[28px] flex items-center justify-center shrink-0">
              <MdOutlineArrowRightAlt size={16} />
            </div>
          </Link>

          <Link
            href="/contact-us"
            className="bg-transparent text-[#232323] flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium border border-black/15 hover:border-[#8b3fac] hover:bg-[#8b3fac]/[0.04] transition-all"
          >
            <span>Consult an Expert</span>
            <div className="bg-[#8b3fac]/10 rounded-full w-[30px] h-[30px] flex items-center justify-center shrink-0">
              <MdOutlineArrowRightAlt size={17} className="text-[#8b3fac]" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTA;