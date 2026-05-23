"use client";

import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

const ContactForm = () => {
  return (
    <section className="md:pt-15 pb-20 px-4 sm:px-8 lg:px-24 w-full max-w-7xl mx-auto">
      {/* =========================================================================
          MAIN CONTACT & ENTRY SECTION
         ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        {/* LEFT COLUMN: Editorial B2B Branding Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md inline-block">
              B2B Partner Portal
            </span>
            <h2 className="text-5xl md:text-5xl font-black text-[#232323] tracking-tight leading-none">
              Optimize your flock's health.
            </h2>
            <p className="text-[#666666] text-base md:text-lg font-light leading-relaxed max-w-md">
              Connect with our commercial veterinary division for bulk pricing, vaccine schedules, and customized healthcare management solutions.
            </p>
          </div>

          {/* Clean Info Grid */}
          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="p-3.5 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs">
                <HiMail className="text-2xl" />
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-bold text-gray-400">Commercial Sales</p>
                <a href="mailto:partners@poultryhealth.com" className="text-base font-semibold text-[#232323] hover:text-primary transition-colors block">
                  partners@poultryhealth.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="p-3.5 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs">
                <HiPhone className="text-2xl" />
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-bold text-gray-400">Bulk Order Desk</p>
                <a href="tel:8002884960" className="text-base font-semibold text-[#232323] hover:text-primary transition-colors block">
                  800-288-4960
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="p-3.5 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs">
                <HiLocationMarker className="text-2xl" />
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-bold text-gray-400">Distribution Hub</p>
                <p className="text-base font-semibold text-[#232323] leading-snug">
                  123 Agriculture Way, TX 75001
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 text-xs text-gray-400 font-medium tracking-wide uppercase">
            ⚡ Response within 1 Business Day
          </div>
        </div>

        {/* RIGHT COLUMN: B2B Verified Form Container */}
        <div className="lg:col-span-7 bg-[#f5e6f5]/40 backdrop-blur-md rounded-3xl border border-white p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden w-full">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#232323] tracking-tight">Request Bulk Quote / General Query</h3>
            <p className="text-xs text-gray-500 mt-1">Provide your farm details below to match with a dedicated poultry vet consultant.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

            {/* Row 1: Contact Name & Farm/Company Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5 w-full">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Contact Person Name</label>
                <input
                  type="text"
                  placeholder="e.g. Robert Chen"
                  className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-1.5 w-full">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Farm / Company Name</label>
                <input
                  type="text"
                  placeholder="e.g. Apex Poultry Farms Ltd."
                  className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Row 2: Business Email & Phone Support */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5 w-full">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Business Email</label>
                <input
                  type="email"
                  placeholder="purchasing@yourfarm.com"
                  className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-1.5 w-full">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Contact Number</label>
                <input
                  type="tel"
                  placeholder="e.g. +1 (555) 000-0000"
                  className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Row 3: B2B Operational Qualifiers (Farm Type & Flock Capacity) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5 w-full">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Poultry Operation Type</label>
                <div className="relative w-full">
                  <select className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] appearance-none cursor-pointer" defaultValue="">
                    <option value="" disabled>Select your farm type...</option>
                    <option value="broiler">Broiler (Meat Production)</option>
                    <option value="layer">Layer (Egg Production)</option>
                    <option value="breeder">Breeder / Hatchery</option>
                    <option value="mixed">Diversified Poultry/Mixed</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                </div>
              </div>

              <div className="space-y-1.5 w-full">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Current Flock Size (Capacity)</label>
                <div className="relative w-full">
                  <select className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] appearance-none cursor-pointer" defaultValue="">
                    <option value="" disabled>Select scale category...</option>
                    <option value="small">Under 5,000 birds</option>
                    <option value="medium">5,000 – 20,000 birds</option>
                    <option value="large">20,000 – 100,000 birds</option>
                    <option value="enterprise">100,000+ birds (Enterprise)</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                </div>
              </div>
            </div>

            {/* Row 4: SUGGESTED ADDITION - Triage Status & Preferred Communication */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5 w-full">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Inquiry Urgency Status</label>
                <div className="relative w-full">
                  <select className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] appearance-none cursor-pointer" defaultValue="">
                    <option value="" disabled>Select urgency ranking...</option>
                    <option value="routine">Routine Stocking / Next Cycle Planning</option>
                    <option value="restock">Immediate Supply Replenishment Required</option>
                    <option value="critical">Critical Health Event / On-Farm Outbreak Assistance</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                </div>
              </div>

              <div className="space-y-1.5 w-full">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Preferred Response Channel</label>
                <div className="relative w-full">
                  <select className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] appearance-none cursor-pointer" defaultValue="email">
                    <option value="email">Official Business Email</option>
                    <option value="phone">Direct Voice Call Verification</option>
                    <option value="whatsapp">WhatsApp Business Secure Text</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                </div>
              </div>
            </div>

            {/* B2B Requirement Context Selection */}
            <div className="space-y-1.5 w-full">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Primary Product Requirement</label>
              <div className="relative w-full">
                <select className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] appearance-none cursor-pointer" defaultValue="">
                  <option value="" disabled>What solutions are you looking for?</option>
                  <option value="vaccines">Poultry Vaccines Bulk Supply</option>
                  <option value="daily_health">Daily Health Products & Supplements</option>
                  <option value="biosecurity">Biosecurity & Hygiene Management</option>
                  <option value="schedule">Custom Vaccine Schedule Consultation</option>
                  <option value="partnership">Distribution / Dealership Inquiry</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
              </div>
            </div>

            {/* SUGGESTED ADDITION: Lab / Schedule Document Attachment */}
            <div className="space-y-1.5 w-full">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Attach Current Diagnostics or Vaccination Plan (Optional)</label>
              <div className="border border-dashed border-gray-200 bg-white hover:border-primary rounded-xl p-4 transition-all flex flex-col items-center justify-center cursor-pointer relative group">
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                <p className="text-xs font-semibold text-gray-500 group-hover:text-primary transition-colors">
                  Upload PDF, JPEG or Pathology Reports
                </p>
                <p className="text-[10px] text-gray-300 mt-0.5">Accelerates medical onboarding validation</p>
              </div>
            </div>

            {/* Message Details */}
            <div className="space-y-1.5 w-full">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Inquiry Specifications</label>
              <textarea
                rows={4}
                placeholder="List specific medicine requirements, volume requirements, or clinical challenges your flock is experiencing..."
                className="w-full p-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] placeholder:text-gray-300 resize-none leading-relaxed"
              />
            </div>

            {/* SUGGESTED ADDITION: Value-add Triage & Newsletter Opt-In */}
            <div className="flex items-start gap-3 px-1">
              <input
                type="checkbox"
                id="epidemic-alerts"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary accent-primary focus:ring-primary cursor-pointer"
              />
              <label htmlFor="epidemic-alerts" className="text-xs text-gray-500 font-medium leading-tight cursor-pointer select-none">
                Send regional poultry disease outbreak advisories, cold-chain system updates, and specialized biosecurity compliance schedules.
              </label>
            </div>

            {/* Submit Action Block */}
            <div className="pt-2">
              <button className="w-full sm:w-auto min-w-[220px] bg-primary hover:bg-primary/95 text-white font-semibold text-sm h-12 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98">
                <span>Submit Commercial Request</span>
                <IoSend className="text-xs" />
              </button>
            </div>

          </form>
        </div>

      </div>
      
    </section>
  );
};
export default ContactForm;