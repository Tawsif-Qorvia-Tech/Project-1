import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

const ContactForm = () => {
  return (
    <section className="py-16 md:py-36 px-4 sm:px-8 lg:px-24 w-full">
      <div className="flex flex-col lg:flex-row bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-base-200">
        {/* LEFT SIDE: Contact Details (Primary) */}
        <div className="bg-primary lg:w-2/5 p-10 md:p-14 text-primary-content flex flex-col justify-between relative overflow-hidden">
          {/* Decorative subtle circle for a professional touch */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">
              Reach Out to Us
            </h2>
            <p className="text-primary-content/80 mb-12 text-lg leading-relaxed">
              Have questions about our veterinary solutions or need expert
              advice for your farm? We are here to help.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors">
                  <HiMail className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">
                    Email Address
                  </p>
                  <p className="text-lg font-medium">
                    support@togetherincommunity.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors">
                  <HiPhone className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">
                    Phone Support
                  </p>
                  <p className="text-lg font-medium">800-288-4960</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors">
                  <HiLocationMarker className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">
                    Main Office
                  </p>
                  <p className="text-lg font-medium">
                    123 Agriculture Way, TX 75001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-sm font-light opacity-60 italic relative z-10">
            Empowering farmers through science-backed innovation.
          </div>
        </div>

        {/* RIGHT SIDE: The Form (Off-White) */}
        <div className="bg-[#e2bcd1] lg:w-3/5 p-8 md:p-16">
          {/* Form Header */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
              Send a Message
            </h3>
            <p className="text-slate-500 mt-2 text-sm md:text-base">
              Our veterinary experts usually respond within one business day.
            </p>
          </div>

          <form className="flex flex-col gap-y-7">
            {/* Full Name - Full Width Stacked */}
            <div className="form-control w-full">
              <label className="label pb-2">
                <span className="label-text font-bold text-[11px] uppercase tracking-[0.15em] text-slate-500">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                className="input input-bordered bg-white w-full h-14 rounded-xl border-slate-200 focus:border-primary focus:outline-none shadow-sm transition-all placeholder:text-slate-300"
              />
            </div>

            {/* Email Address - Full Width Stacked */}
            <div className="form-control w-full">
              <label className="label pb-2">
                <span className="label-text font-bold text-[11px] uppercase tracking-[0.15em] text-slate-500">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="input input-bordered bg-white w-full h-14 rounded-xl border-slate-200 focus:border-primary focus:outline-none shadow-sm transition-all placeholder:text-slate-300"
              />
            </div>

            {/* Inquiry Type - Full Width Stacked */}
            <div className="form-control w-full">
              <label className="label pb-2">
                <span className="label-text font-bold text-[11px] uppercase tracking-[0.15em] text-slate-500">
                  How can we assist you?
                </span>
              </label>
              <select className="select select-bordered bg-white w-full h-14 rounded-xl border-slate-200 focus:border-primary focus:outline-none shadow-sm transition-all text-slate-600 font-medium">
                <option disabled selected>
                  Select an inquiry type
                </option>
                <option>Product Information</option>
                <option>Technical Support</option>
                <option>Wholesale & Partnerships</option>
                <option>General Feedback</option>
              </select>
            </div>

            {/* Message - Full Width Stacked */}
            <div className="form-control w-full">
              <label className="label pb-2">
                <span className="label-text font-bold text-[11px] uppercase tracking-[0.15em] text-slate-500">
                  Message
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered bg-white w-full h-40 rounded-xl border-slate-200 focus:border-primary focus:outline-none shadow-sm transition-all text-base pt-4 placeholder:text-slate-300"
                placeholder="Tell us about your animals or farm requirements..."
              ></textarea>
            </div>

            {/* Submit Button - Full Width on Mobile, Large on Desktop */}
            <div className="pt-2">
              <button className="btn btn-primary btn-lg w-full md:w-auto md:min-w-[200px] gap-3 text-white rounded-xl shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border-none">
                Send Message
                <IoSend className="text-lg" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
