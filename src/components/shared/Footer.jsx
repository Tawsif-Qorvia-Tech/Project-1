import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white pb-5 mt-10">
      <div className="w-10/12 mx-auto py-14">
        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT — Logo & Socials */}
          <div className="flex flex-col gap-4 md:w-1/3 md:pr-10">
            <Image src={logo} alt="Logo" width={100} height={100} />
            <p className="text-[15px] font-light text-[#CFCFCF] leading-relaxed">
              Together for healthier poultry, <br className="hidden md:block" />
              stronger farming.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                className="bg-primary rounded-full p-2.5 hover:opacity-80 transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="bg-primary rounded-full p-2.5 hover:opacity-80 transition"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="bg-primary rounded-full p-2.5 hover:opacity-80 transition"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="#"
                className="bg-primary rounded-full p-2.5 hover:opacity-80 transition"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT — Links & Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold mb-2">Quick Links</h3>
              {["Home", "About Us", "Products", "Blogs", "Contact Us"].map(
                (link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    {link}
                  </Link>
                ),
              )}
            </div>

            {/* Help */}
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold mb-2">Help</h3>
              {["Help Center", "Trust And Safety", "Privacy Settings"].map(
                (link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    {link}
                  </Link>
                ),
              )}
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold">
                Subscribe Aur Newsletter
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Subscribe for exclusive news, training tips, and event updates!
              </p>
              <div className="flex items-center bg-white rounded-full border border-gray-200 pr-1 py-1">
                <input
                  type="email"
                  placeholder="Type Here"
                  className="flex-1 bg-transparent text-gray-800 text-sm px-4 outline-none placeholder-gray-400 min-w-0"
                />
                <button className="btn btn-primary btn-sm rounded-full px-5 shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-center">
        <div className="w-10/12 border-t border-gray-700">
          <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-sm text-gray-400">
              Copyright &copy; 2025 Together In Community. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white transition"
              >
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
