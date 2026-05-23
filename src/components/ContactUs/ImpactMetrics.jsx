"use client";

import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

const ContactForm = () => {
  return (
    <section className="p-5 md:pt-20 md:pb-5 px-4 sm:px-8 lg:px-24 w-full max-w-7xl mx-auto">
      
      {/* =========================================================================
          PREVIOUS SECTION: Psychological Authority & Social Proof
          De-risks the transaction for anxious farm owners before they fill out data.
         ========================================================================= */}
      <div className="pb-12">
        <div className="text-center md:text-left mb-8">
          <p className="text-xs uppercase font-bold tracking-widest text-primary">Enterprise Validation</p>
          <h3 className="text-4xl font-black text-[#232323] tracking-tight mt-1">Trusted Across the Commercial Poultry Ecosystem</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
            <p className="text-4xl font-black text-primary">5M+</p>
            <p className="text-sm font-bold text-[#232323] mt-1">Commercial Birds Protected</p>
            <p className="text-s text-gray-500 mt-1">Active biological protection and nutritional coverage deployed this year alone.</p>
          </div>
          <div className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
            <p className="text-4xl font-black text-primary">200+</p>
            <p className="text-sm font-bold text-[#232323] mt-1">Partner Hatcheries & Networks</p>
            <p className="text-s text-gray-500 mt-1">From localized family facilities to industrial-scale multi-tier farming systems.</p>
          </div>
          <div className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
            <p className="text-4xl font-black text-primary">100%</p>
            <p className="text-sm font-bold text-[#232323] mt-1">Verified Cold-Chain Precision</p>
            <p className="text-s text-gray-500 mt-1">Every vaccine cargo batch tracks structural viability metrics door-to-door.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactForm;