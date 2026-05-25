"use client";

import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const audiences = [
  "Poultry Farm Owner",
  "Cattle Farmer",
  "Veterinary Distributor",
  "Agricultural Wholesaler",
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

const CTA = () => {
  return (
    <section className="sm:px-8 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl md:rounded-3xl bg-[#faf5f9] border border-[#e8d0e4] overflow-hidden px-8 sm:px-12 md:px-16 py-14 sm:py-16 md:py-20">

          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#af008c]/8 -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-20 w-40 h-40 rounded-full bg-[#af008c]/6 translate-y-1/2 pointer-events-none" />
          <div className="absolute top-0 left-0 h-1 w-24 bg-[#af008c] rounded-t-3xl" />

          <div className="relative z-10 max-w-2xl">
            {/* <Eyebrow label="Get In Touch" /> */}

            <h2 className="text-[#1a1a1a] text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.1] tracking-tight mb-5">
              Need a Reliable <span className="text-[#af008c]">Supplier?</span>
            </h2>

            <p className="text-[#444] text-base sm:text-[17px] font-light leading-relaxed mb-7">
              Whether you&apos;re a farm owner, distributor, or wholesaler, tell us your requirements
              and we&apos;ll suggest the right products. Our team responds within 24 hours.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {audiences.map((a, i) => (
                <span
                  key={i}
                  className="bg-white border border-[#e8d0e4] text-[#555] text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {a}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <ArrowButton href="/contact-us" label="Send Us an Enquiry" />
              <p className="text-[#888] text-xs leading-snug">
                <span className="text-[#555]">⚡ Response within 1 Business Day</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;