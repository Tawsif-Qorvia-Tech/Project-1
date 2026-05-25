"use client";

import React from "react";
import Link from "next/link";
import { FaShieldAlt, FaTemperatureLow, FaMicroscope, FaChevronRight } from "react-icons/fa";

const SpecialtiesPage = () => {
  const specialtySegments = [
    {
      id: "broiler",
      title: "Broiler Optimization Frameworks",
      desc: "Engineered for intensive growth phases. Our solutions prioritize rapid immune system conditioning, metabolic stability, and gut health integrity to maximize final flock yield.",
      points: ["Early-stage day-to-day immunity boosts", "FCR (Feed Conversion Ratio) optimization matrices", "Skeletal development support compounds"]
    },
    {
      id: "layer",
      title: "Layer & Breeder Longevity Programs",
      desc: "Formulated to handle the high physiological demands of long-term laying cycles. Focuses explicitly on peak laying persistence, calcium metabolism, and cellular vitality.",
      points: ["Eggshell structural density enhancements", "Ovarian health and metabolic defense solutions", "Extended lifespans for breeding flocks"]
    },
    {
      id: "hatchery",
      title: "Hatchery & Biosecurity Lines",
      desc: "Critical foundational defenses designed for embryonic and newly hatched chicks. Formulations are highly specialized for mass administration protocols without flock stress.",
      points: ["Day-0 to Day-7 spray-delivery vaccines", "Decontamination and broad-spectrum biosecurity", "Stress-mitigation nutritional therapies"]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-8 lg:px-24 space-y-20">
      
      {/* 1. HERO SECTION: Left-aligned structural layout matching your brand standard */}
      <div className="relative w-full py-16 bg-gray-900 rounded-3xl overflow-hidden px-6 md:pl-24 md:pr-16 flex flex-col justify-center text-left min-h-[360px]">
        {/* Asymmetric Two-Tone Tag Block */}
        <div className="self-start flex items-stretch rounded-md overflow-hidden bg-white/10 backdrop-blur-xs mb-4 border border-white/10 shadow-xs select-none">
          <div className="w-1 bg-primary" />
          <span className="text-[11px] font-bold tracking-wider text-white uppercase px-3 py-1">
            Our Specialties
          </span>
        </div>

        <h1 className="text-white text-4xl md:text-5xl lg:text-[68px] font-medium mb-3 max-w-4xl leading-none tracking-tight">
          Scientific Precision <br /> For Commercial Poultry
        </h1>
        
        <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-xl mb-6">
          We combine advanced immunological research with real-world farm logistics to keep your animals healthier and your operations highly productive.
        </p>

        <div className="flex justify-start">
          <Link href="/contact-us">
            <button className="bg-primary text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full hover:bg-primary/95 transition-all cursor-pointer">
              Consult with a Veterinary Expert
            </button>
          </Link>
        </div>
      </div>

      {/* 2. THE ADVANTAGE PILLARS: High-contrast corporate trust metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3 p-6 bg-white rounded-2xl border border-gray-100 shadow-xs">
          <div className="p-3 bg-primary/5 text-primary rounded-xl w-fit"><FaMicroscope className="text-lg" /></div>
          <h3 className="text-lg font-bold text-[#232323]">Validated R&D Formulations</h3>
          <p className="text-xs text-gray-500 font-light leading-relaxed">Every batch undergoes rigorous clinical trials to ensure complete stability across diverse field climates.</p>
        </div>

        <div className="space-y-3 p-6 bg-white rounded-2xl border border-gray-100 shadow-xs">
          <div className="p-3 bg-primary/5 text-primary rounded-xl w-fit"><FaTemperatureLow className="text-lg" /></div>
          <h3 className="text-lg font-bold text-[#232323]">Cold-Chain Logistics Management</h3>
          <p className="text-xs text-gray-500 font-light leading-relaxed">Continuous temperature monitoring keeps active vaccine compounds stable from our facility to your farm gate.</p>
        </div>

        <div className="space-y-3 p-6 bg-white rounded-2xl border border-gray-100 shadow-xs">
          <div className="p-3 bg-primary/5 text-primary rounded-xl w-fit"><FaShieldAlt className="text-lg" /></div>
          <h3 className="text-lg font-bold text-[#232323]">Strict Biosafety Compliance</h3>
          <p className="text-xs text-gray-500 font-light leading-relaxed">Our production channels strictly adhere to nationwide regulatory certifications and contamination controls.</p>
        </div>
      </div>

      {/* 3. FLOCK TARGET SEGMENTS: The segmented structural breakdown */}
      <div className="space-y-8">
        <div className="border-b border-gray-100 pb-4">
          <h2 className="text-2xl md:text-3xl font-black text-[#232323]">Targeted Poultry Health Segments</h2>
          <p className="text-xs text-gray-400 mt-1">Specialized clinical coverage for commercial farm profiles</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specialtySegments.map((segment) => (
            <div key={segment.id} className="bg-gray-50/60 rounded-2xl border border-gray-100 p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-[#232323]">{segment.title}</h4>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{segment.desc}</p>
                
                <ul className="pt-2 space-y-2">
                  {segment.points.map((point, idx) => (
                    <li key={idx} className="text-[11px] sm:text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200/60">
                <Link href="/contact-us" className="text-xs text-primary font-bold inline-flex items-center gap-1 hover:underline">
                  Request Solution Specifications <FaChevronRight className="text-[9px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SpecialtiesPage;
