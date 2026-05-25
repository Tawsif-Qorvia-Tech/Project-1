"use client";

import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

// const stats = [
//   { value: "40+", label: "Products" },
//   { value: "6+",  label: "Categories" },
//   { value: "2018", label: "Est." },
//   { value: "PAN", label: "India Reach" },
// ];

const stats = [
  { value: "40+",   label: "Products"},
  { value: "6+",    label: "Categories"},
  { value: "2018",  label: "Established"},
  { value: "🌍",    label: "Global Exports"},
];


// ─── SHARED SUB-COMPONENTS ────────────────────────────────────────────────────

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

const Eyebrow = ({ label }) => (
  <div className="flex items-center gap-2 mb-5">
    <span className="h-px w-8 bg-[#af008c]" />
    <span className="text-[#af008c] text-xs font-semibold tracking-[0.18em] uppercase">
      {label}
    </span>
  </div>
);


const WhyChooseUs = () => {
    return (
        <section className="px-4 sm:px-8 md:px-10 pt-20 md:pt-28">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <div>
                        {/* <Eyebrow label="Why It Matters" /> */}
                        <h2 className="text-[#1a1a1a] text-5xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight mb-6">
                            Feed Right. <br />
                            <span className="text-[#af008c]">Farm Better.</span>
                        </h2>
                        <p className="text-[#444] text-base sm:text-[17px] font-light leading-relaxed mb-6">
                            Poor feed quality quietly drains farm profitability through slower growth, weaker immunity,
                            higher mortality, and lower milk or egg output. At Shiv Sunder Agrovet, every supplement we
                            manufacture is formulated to directly reverse these losses.
                        </p>
                        <p className="text-[#444] text-base sm:text-[17px] font-light leading-relaxed">
                            From growth boosters and immunity builders to digestive tonics and mineral mixtures, our
                            range is built for measurable results under real farm conditions across India.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((s, i) => (
                            <div
                                key={i}
                                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[130px] ${i === 0 ? "bg-[#af008c]" : "bg-[#faf5f9] border border-[#e8d0e4]"
                                    }`}
                            >
                                <span className={`text-4xl sm:text-5xl font-bold tracking-tight ${i === 0 ? "text-white" : "text-[#af008c]"
                                    }`}>
                                    {s.value}
                                </span>
                                <span className={`text-sm font-medium tracking-wide mt-2 ${i === 0 ? "text-white/75" : "text-[#555]"
                                    }`}>
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;