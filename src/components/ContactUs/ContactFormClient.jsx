"use client";

import { PostLeads } from "@/actions/server/Leads";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import Swal from "sweetalert2";


const INITIAL_STATE = {
  name: "",
  farmName: "",
  email: "",
  number: "",
  operationType: "",
  flockSize: "",
  urgency: "",
  responseChannel: "email",
  productName: "",
  query: "",
  alertsOptIn: false,
};

const ContactFormClient = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, number, productName, query } = formData;
    if (!name || !email || !number || !productName || !query) {
      Swal.fire({
        icon: "warning",
        title: "Missing Required Fields",
        text: "Please fill in Contact Name, Email, Phone, Product Requirement, and Inquiry Specifications.",
        confirmButtonColor: "#7c3aed",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await PostLeads({
        name: formData.name,
        farmName: formData.farmName,
        email: formData.email,
        number: formData.number,
        operationType: formData.operationType,
        flockSize: formData.flockSize,
        urgency: formData.urgency,
        productName: formData.productName,
        query: formData.query,
      });

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Request Submitted!",
          text: result.message || "We'll get back to you within 1 business day.",
          confirmButtonColor: "#7c3aed",
          confirmButtonText: "Got it",
        });
        setFormData(INITIAL_STATE);
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: result.message || "Something went wrong. Please try again.",
          confirmButtonColor: "#7c3aed",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Unexpected Error",
        text: "An unexpected error occurred. Please try again later.",
        confirmButtonColor: "#7c3aed",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f5e6f5]/40 backdrop-blur-md rounded-3xl border border-white p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden w-full">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

      <div className="mb-8">
        <h3 className="text-xl font-bold text-[#232323] tracking-tight">Request Bulk Quote / General Query</h3>
        <p className="text-xs text-gray-500 mt-1">
          Provide your farm details below to match with a dedicated poultry vet consultant.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* Row 1: Contact Name & Farm Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Contact Person Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Robert Chen"
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] placeholder:text-gray-300"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Farm / Company Name</label>
            <input
              type="text"
              name="farmName"
              value={formData.farmName}
              onChange={handleChange}
              placeholder="e.g. Apex Poultry Farms Ltd."
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] placeholder:text-gray-300"
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Business Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="purchasing@yourfarm.com"
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] placeholder:text-gray-300"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Contact Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="e.g. +1 (555) 000-0000"
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] placeholder:text-gray-300"
            />
          </div>
        </div>

        {/* Row 3: Operation Type & Flock Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Poultry Operation Type</label>
            <div className="relative">
              <select
                name="operationType"
                value={formData.operationType}
                onChange={handleChange}
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] appearance-none cursor-pointer"
              >
                <option value="" disabled>Select your farm type...</option>
                <option value="broiler">Broiler (Meat Production)</option>
                <option value="layer">Layer (Egg Production)</option>
                <option value="breeder">Breeder / Hatchery</option>
                <option value="mixed">Diversified Poultry/Mixed</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Current Flock Size</label>
            <div className="relative">
              <select
                name="flockSize"
                value={formData.flockSize}
                onChange={handleChange}
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] appearance-none cursor-pointer"
              >
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

        {/* Row 4: Urgency & Response Channel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Inquiry Urgency Status</label>
            <div className="relative">
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] appearance-none cursor-pointer"
              >
                <option value="" disabled>Select urgency ranking...</option>
                <option value="routine">Routine Stocking / Next Cycle Planning</option>
                <option value="restock">Immediate Supply Replenishment Required</option>
                <option value="critical">Critical Health Event / On-Farm Outbreak Assistance</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Preferred Response Channel</label>
            <div className="relative">
              <select
                name="responseChannel"
                value={formData.responseChannel}
                onChange={handleChange}
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] appearance-none cursor-pointer"
              >
                <option value="email">Official Business Email</option>
                <option value="phone">Direct Voice Call Verification</option>
                <option value="whatsapp">WhatsApp Business Secure Text</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
            </div>
          </div>
        </div>

        {/* Primary Product Requirement */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Primary Product Requirement <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <select
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] appearance-none cursor-pointer"
            >
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

        {/* File Attachment */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Attach Current Diagnostics or Vaccination Plan (Optional)
          </label>
          <div className="border border-dashed border-gray-200 bg-white hover:border-primary rounded-xl p-4 transition-all flex flex-col items-center justify-center cursor-pointer relative group">
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
            <p className="text-xs font-semibold text-gray-500 group-hover:text-primary transition-colors">
              Upload PDF, JPEG or Pathology Reports
            </p>
            <p className="text-[10px] text-gray-300 mt-0.5">Accelerates medical onboarding validation</p>
          </div>
        </div>

        {/* Inquiry Specifications */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Inquiry Specifications <span className="text-red-400">*</span>
          </label>
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            rows={4}
            placeholder="List specific medicine requirements, volume requirements, or clinical challenges your flock is experiencing..."
            className="w-full p-4 bg-white border border-gray-200/80 rounded-xl focus:border-primary focus:outline-none shadow-xs transition-all text-sm font-medium text-[#232323] placeholder:text-gray-300 resize-none leading-relaxed"
          />
        </div>

        {/* Alerts Opt-In */}
        <div className="flex items-start gap-3 px-1">
          <input
            type="checkbox"
            id="epidemic-alerts"
            name="alertsOptIn"
            checked={formData.alertsOptIn}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary accent-primary focus:ring-primary cursor-pointer"
          />
          <label htmlFor="epidemic-alerts" className="text-xs text-gray-500 font-medium leading-tight cursor-pointer select-none">
            Send regional poultry disease outbreak advisories, cold-chain system updates, and specialized biosecurity compliance schedules.
          </label>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-w-[220px] bg-primary hover:bg-primary/95 text-white font-semibold text-sm h-12 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? "Submitting..." : "Submit Commercial Request"}</span>
            <IoSend className="text-xs" />
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactFormClient;