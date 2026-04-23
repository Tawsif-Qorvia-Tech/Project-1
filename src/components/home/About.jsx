import React from "react";
import Image from "next/image";
import banner2 from "@/assets/Banner2.png";
import { FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center w-[90%] min-h-100 lg:min-h-125 gap-8 lg:gap-12 pt-16 lg:pt-30">
      <div className="w-full lg:w-1/2 h-75 lg:h-125 relative rounded-3xl overflow-hidden shrink-0">
        <Image
          src={banner2}
          alt="About Banner"
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:gap-6 px-4 lg:px-0">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-semibold text-[#232323] leading-tight">
          Committed to Animal Health & Farmer Success
        </h2>
        <p className="text-sm lg:text-base text-[#444444] leading-relaxed uppercase">
          With years of expertise in veterinary pharmaceuticals, we specialize
          in creating innovative, reliable, and effective solutions for poultry
          health. Our mission is to support farmers with high-quality medicines
          that ensure healthier flocks and better productivity.
        </p>
        <div className="bg-primary text-white flex items-center justify-center gap-3 rounded-[22.4px] py-[5.6px] pl-[16.8px] pr-[5.6px] w-max">
          <div>
            <h1 className="text-base lg:text-[18px] font-light">Learn More About Us</h1>
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
