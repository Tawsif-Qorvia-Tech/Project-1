import React from "react";
import Image from "next/image";
import banner2 from "@/assets/Banner2.png";
import LearnMore from "../buttons/LearnMore";
import { FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex items-center w-[90%] min-h-127.75 gap-12 pt-37.5">
      <div className="w-1/2 h-127.75 relative rounded-3xl overflow-hidden shrink-0">
        <Image
          src={banner2}
          alt="About Banner"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center gap-6">
        <h2 className="text-7xl font-semibold text-[#232323] leading-tight">
          Committed to Animal Health & Farmer Success
        </h2>
        <p className="text-sm text-[#444444] leading-relaxed uppercase">
          With years of expertise in veterinary pharmaceuticals, we specialize
          in creating innovative, reliable, and effective solutions for poultry
          health. Our mission is to support farmers with high-quality medicines
          that ensure healthier flocks and better productivity.
        </p>
        <div className="bg-primary text-white flex items-center justify-center gap-3 rounded-[22.4px] py-[5.6px] pl-[16.8px] pr-[5.6px] w-max">
          <div>
            <h1 className="text-[18px] font-light">Learn More About Us</h1>
          </div>
          <div>
            <FaArrowAltCircleRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
