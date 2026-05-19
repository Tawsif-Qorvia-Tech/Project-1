import React from "react";
import Image from "next/image";
import banner2 from "@/assets/Banner2.webp";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center w-full min-h-100 lg:min-h-125 gap-8 lg:gap-12 pt-16 lg:pt-30 px-4 sm:px-8 lg:px-10">
      
      {/* Image Column */}
      <div className="flex-1 w-full relative rounded-2xl md:rounded-3xl overflow-hidden">
        <Image
          src={banner2}
          alt="About Banner"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", display: "block" }}
          className="rounded-2xl md:rounded-3xl"
        />
      </div>

      {/* Text Column */}
      <div className="flex-1 w-full flex flex-col justify-center gap-4 lg:gap-6">
        <h2 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#232323]">
          Committed to Animal Health & Farmer Success
        </h2>
        <p className="text-s lg:text-[16px] font-light text-[#444444] tracking-tighter [word-spacing:0.3em]">
          With years of expertise in veterinary pharmaceuticals, we specialize
          in creating innovative, reliable, and effective solutions for poultry
          health. Our mission is to support farmers with high-quality medicines
          that ensure healthier flocks and better productivity.
        </p>
        <Link
          href="/about-us"
          className="bg-primary text-white flex items-center justify-center gap-3 rounded-[22.4px] py-[5.6px] pl-[16.8px] pr-[5.6px] w-max"
        >
          <h1 className="text-base lg:text-[18px] font-light">Learn More About Us</h1>
          <div className="bg-white text-primary flex items-center justify-center rounded-full aspect-square h-full p-1">
            <MdOutlineArrowRightAlt size={28} />
          </div>
        </Link>
      </div>

    </div>
  );
};

export default About;