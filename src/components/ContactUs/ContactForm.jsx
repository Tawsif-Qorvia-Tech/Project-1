import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import ContactFormClient from "./ContactFormClient";

const ContactForm = () => {
  return (
    <section className="md:pt-15 pb-20 px-4 sm:px-8 lg:px-24 w-full max-w-7xl mx-auto">
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
              Connect with our commercial veterinary division for bulk pricing,
              vaccine schedules, and customized healthcare management solutions.
            </p>
          </div>

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

        {/* RIGHT COLUMN: Client form */}
        <div className="lg:col-span-7">
          <ContactFormClient />
        </div>

      </div>
    </section>
  );
};

export default ContactForm;