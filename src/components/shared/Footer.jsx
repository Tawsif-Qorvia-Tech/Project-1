import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white pb-5 mt-20 sm:mt-32">
      <div className="w-11/12 mx-auto py-10 sm:py-14 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-10">
          {/* LEFT — Logo & Socials */}
          <div className="flex flex-col gap-3 sm:gap-4 md:w-1/3 md:pr-10">
            <Image src="/GLogo.webp" alt="Logo" width={80} height={80} className="rounded-full sm:w-[100px] sm:h-[100px]"/>
            <p className="text-[15px] sm:text-[17px] font-light text-[#CFCFCF] leading-relaxed font-[family-name:--font-bdo-grotesk]">
              Together for healthier poultry, <br className="hidden md:block" />
              stronger farming.
            </p>
            <div className="flex gap-2 sm:gap-3 mt-2">
              <a href="#" className="bg-primary rounded-full p-2 sm:p-2.5 hover:opacity-80 transition">
                <FaFacebookF size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="bg-primary rounded-full p-2 sm:p-2.5 hover:opacity-80 transition">
                <FaInstagram size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="bg-primary rounded-full p-2 sm:p-2.5 hover:opacity-80 transition">
                <FaXTwitter size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="bg-primary rounded-full p-2 sm:p-2.5 hover:opacity-80 transition">
                <FaLinkedinIn size={14} className="sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* RIGHT — Links & Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
            {/* Quick Links */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-[15px] sm:text-[18px] font-semibold mb-1 sm:mb-2 font-[family-name:--font-gilroy]">Quick Links</h3>
              {["Home", "About Us", "Products", "Blogs", "Contact Us"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[14px] sm:text-[16px] text-white hover:text-white transition font-[family-name:--font-bdo-grotesk]"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Help */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-[15px] sm:text-[18px] font-semibold mb-1 sm:mb-2 font-[family-name:--font-gilroy]">Help</h3>
              {["Help Center", "Trust And Safety", "Privacy Settings"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[14px] sm:text-[16px] text-white hover:text-white transition font-[family-name:--font-bdo-grotesk]"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-[15px] sm:text-[18px] font-semibold font-[family-name:--font-gilroy]">
                Subscribe Aur Newsletter
              </h3>
              <p className="text-[14px] sm:text-[16px] text-white leading-relaxed font-[family-name:--font-bdo-grotesk]">
                Subscribe for exclusive news, training tips, and event updates!
              </p>
             <div className="flex items-center bg-white rounded-full border border-gray-200 pr-1 py-1 max-w-[200px] sm:max-w-full mt-5 ml-5 md:ml-0">
                <input
                  type="email"
                  placeholder="Type Here"
                  className="flex-1 bg-transparent text-gray-800 text-[14px] sm:text-[16px] px-3 sm:px-4 outline-none placeholder-gray-400 min-w-0 font-[family-name:--font-bdo-grotesk]"
                />
                <button className="btn btn-primary btn-xs sm:btn-sm rounded-full px-3 sm:px-5 shrink-0 min-h-7 h-7 sm:min-h-8 sm:h-8 text-[14px] font-[family-name:--font-bdo-grotesk]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-center px-4">
        <div className="w-10/12 border-t border-gray-700">
          <div className="py-4 sm:py-5 flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3">
            <p className="text-[14px] sm:text-[16px] text-white text-center md:text-left font-[family-name:--font-bdo-grotesk]">
              Copyright &copy; 2025 Together In Community. All Rights Reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="#" className="text-[14px] sm:text-[16px] text-white hover:text-white transition font-[family-name:--font-bdo-grotesk]">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[14px] sm:text-[16px] text-white hover:text-white transition font-[family-name:--font-bdo-grotesk]">
                Terms And Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
